const STATE = {
  FULFILLED: "fulfilled",
  REJECTED: "rejected",
  PENDING: "pending",
};

class MyPromise {
  #thenCbs = [];
  #catchCbs = [];
  #state = STATE.PENDING;
  #value;
  #onSuccessBind = this.#onSuccess.bind(this);
  #onFailBind = this.#onFail.bind(this);
  #runCallbacks = this.#runCallbackMethod.bind(this);

  constructor(cb) {    
    try {
      cb(this.#onSuccessBind, this.#onFailBind);
    } catch (e) {
      this.#onFail(e);
    }
  }

  #runCallbackMethod() {
    if (this.#state === STATE.FULFILLED) {
      this.#thenCbs.forEach((callback, i) => {
        callback(this.#value);        
      });

      this.#thenCbs = [];
    }

    if (this.#state === STATE.REJECTED) {
      this.#catchCbs.forEach((callback) => {
        callback(this.#value);
      });

      this.#catchCbs = [];
    }
  }

  #onSuccess(value) {
    queueMicrotask(() => {
      if (this.#state !== STATE.PENDING) return;

      if (value instanceof MyPromise) {
        value.then(this.#onSuccessBind, this.#onFailBind);
        return;
      }

      this.#value = value;
      this.#state = STATE.FULFILLED;
      this.#runCallbacks();
    });
  }

  #onFail(value) {
    queueMicrotask(() => {
      if (this.#state !== STATE.PENDING) return;

      if (value instanceof MyPromise) {
        value.then(this.#onSuccessBind, this.#onFailBind);
        return;
      }

      if (this.#catchCbs.length === 0) {
        throw new UncaughtPromiseError(value);
      }

      this.#value = value;
      this.#state = STATE.REJECTED;
      this.#runCallbacks();
    });
  }

  then(thenCb, catchCb) {
    return new MyPromise((resolve, reject) => {
      this.#thenCbs.push((result) => {        
        if (thenCb == null) {
          resolve(result);
          return;
        }

        try {
          resolve(thenCb(result));
        } catch (error) {
          reject(error);
        }
      });

      this.#catchCbs.push((result) => {
        if (catchCb == null) {
          reject(result);
          return;
        }

        try {
          resolve(catchCb(result));
        } catch (error) {
          reject(error);
        }
      });

      this.#runCallbacks();
    });
  }

  catch(cb) {
    return this.then(undefined, cb);
  }

  finally(cb) {
    return this.then(
      (result) => {
        cb();
        return result;
      },
      (result) => {
        cb();
        throw result;
      }
    );
  }

  static resolve(value) {
    return new Promise((resolve) => {
      resolve(value);
    });
  }

  static reject(value) {
    return new Promise((resolve, reject) => {
      reject(value);
    });
  }

  static all(promises) {
    const results = [];
    let completedPromises = 0;
    return new MyPromise((resolve, reject) => {
      for (let i = 0; i < promises.length; i++) {
        const promise = promises[i];
        promise
          .then((value) => {
            completedPromises++;
            results[i] = value;
            if (completedPromises === promises.length) {
              resolve(results);
            }
          })
          .catch(reject);
      }
    });
  }

  static allSettled(promises) {
    const results = [];
    let completedPromises = 0;
    return new MyPromise((resolve) => {
      for (let i = 0; i < promises.length; i++) {
        const promise = promises[i];
        promise
          .then((value) => {
            results[i] = { status: STATE.FULFILLED, value };
          })
          .catch((reason) => {
            results[i] = { status: STATE.REJECTED, reason };
          })
          .finally(() => {
            completedPromises++;
            if (completedPromises === promises.length) {
              resolve(results);
            }
          });
      }
    });
  }

  static race(promises) {
    return new MyPromise((resolve, reject) => {
      promises.forEach((promise) => {
        promise.then(resolve).catch(reject);
      });
    });
  }

  static any(promises) {
    const errors = [];
    let rejectedPromises = 0;
    return new MyPromise((resolve, reject) => {
      for (let i = 0; i < promises.length; i++) {
        const promise = promises[i];
        promise.then(resolve).catch((value) => {
          rejectedPromises++;
          errors[i] = value;
          if (rejectedPromises === promises.length) {
            reject(new AggregateError(errors, "All promises were rejected"));
          }
        });
      }
    });
  }
}

class UncaughtPromiseError extends Error {
  constructor(error) {
    super(error);

    this.stack = `(in promise) ${error.stack}`;
  }
}

/**
 * OWN-IMPLEMENTATION
 * 
 * class MyPromise {
  isResolved = false;
  isRejected = false;
  resolvedData;
  rejectedData;
  resolvedChain = [];
  rejectedChain = [];
  finallyCb;
  constructor(executor) {
    const resolve = (val) => {
      this.isResolved = true;
      this.resolvedData = val;
      if (this.resolvedChain.length) {
        this.resolvedChain.reduce((acc, thenFn, idx) => {
          let res = thenFn(acc);
          if (
            idx == this.resolvedChain.length - 1 &&
            typeof this.finallyCb == "function"
          ) {
            this.finallyCb();
          }
          return res;
        }, this.resolvedData);
      }
    };
    const reject = (errMsg) => {
      this.isRejected = true;
      this.rejectedData = errMsg;
      if (this.rejectedChain.length) {
        this.rejectedChain.reduce((acc, catchFn, idx) => {
          let res = catchFn(acc);
          if (
            idx == this.rejectedChain.length - 1 &&
            typeof this.finallyCb == "function"
          ) {
            this.finallyCb();
          }
          return res;
        }, this.rejectedData);
      }
    };
    executor(resolve, reject);
  }
  then = (cb) => {
    this.resolvedChain.push(cb);
    if (this.isResolved) {
      this.resolvedChain.reduce((acc, thenFn, idx) => {
        let res = thenFn(acc);
        if (
          idx == this.resolvedChain.length - 1 &&
          typeof this.finallyCb == "function"
        ) {
          this.finallyCb();
        }
        return res;
      }, this.resolvedData);
    }
    return this;
  };
  catch = (cb) => {
    this.rejectedChain.push(cb);
    if (this.isRejected) {
      this.rejectedChain.reduce((acc, catchFn, idx) => {
        let res = catchFn(acc);
        if (
          idx == this.rejectedChain.length - 1 &&
          typeof this.finallyCb == "function"
        ) {
          this.finallyCb();
        }
        return res;
      }, this.rejectedData);
    }
    return this;
  };
  finally = (cb) => {
    this.finallyCb = cb;
    if (this.isResolved || this.isRejected) {
      this.finallyCb();
    }
  };
  static resolve = (val) => {
    return new MyPromise((res) => res(val));
  };
  static reject = (val) => {
    return new MyPromise((_, rej) => rej(val));
  };
  static all = (promises) => {
    return new MyPromise((res, rej) => {
      let result = [];
      promises.forEach((promise, idx) => {
        promise
          .then((data) => {
            result[idx] = data;
            if (idx == promises.length - 1) res(result);
          })
          .catch((err) => rej(err));
      });
    });
  };
  static race = (promises) => {
    let isFetchDone = false;
    return new MyPromise((res, rej) => {
      promises.forEach((promise) => {
        promise
          .then((data) => {
            if (!isFetchDone) {
              res(data);
              isFetchDone = true;
            }
          })
          .catch((err) => {
            if (!isFetchDone) {
              rej(err);
              isFetchDone = true;
            }
          });
      });
    });
  };
}

new MyPromise((res, reject) => {
  setTimeout(() => {
    // res("I am resolved  in normal chain");
    // reject("I am Rejected in normal chain");
  }, 2000);
  // res("I am resolved  in normal chain");
  reject("I am Rejected  in normal chain");
})
  .then((data) => `${data} - then Chain 1`)
  .then((data) => `${data} - then Chain 2`)
  .then((data) => console.log(`${data}`))
  .catch((errMsg) => console.log(`${errMsg} :: Error Catched`))
  .finally(() => console.log("I am finally"));

MyPromise.resolve("I am resolved in Static")
  .then((data) => `${data} - then Chain 1`)
  .then((data) => `${data} - then Chain 2`)
  .then((data) => console.log(`${data}`));

MyPromise.reject("I am rejected in static method")
  .then((data) => `${data} - then Chain 1`)
  .then((data) => `${data} - then Chain 2`)
  .then((data) => console.log(`${data}`))
  .catch(function err(err) {
    console.log(`${err} :: Error catched`);
  });

MyPromise.all([
  MyPromise.resolve("1"),
  MyPromise.resolve("2"),
  new MyPromise((res, rej) => setTimeout(() => rej("Rejectd"), 2000)),
])
  .then((data) => console.log(`then response of MyPromise.all :: ${data}`))
  .catch((err) => console.log(`catch response of MyPromise.all :: ${err}`));

MyPromise.race([
  MyPromise.resolve("1"),
  MyPromise.resolve("2"),
  new MyPromise((res, rej) => setTimeout(() => rej("Rejectd"), 2000)),
])
  .then((data) => console.log(`then response of MyPromise.race :: ${data}`))
  .catch((err) => console.log(`catch response of MyPromise.race :: ${err}`));

 */

module.exports = { MyPromise };
