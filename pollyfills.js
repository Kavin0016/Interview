let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let nestedArr = [1, [2, [3, 4], 5], 6, 7, [8, [9, [10]]]];

let myObj = {
  fname: "Kavinkumar",
  lname: "Nagaraj",
  getFullName: function () {
    return `${this.fname} ${this.lname}`;
  },
};

let modObj = {
  fname: "modObj - fname",
  lname: "modObj - flname",
  getFullName: function (age) {
    return `${this.fname} ${this.lname} ${age}`;
  },
};

let modObj2 = {
  fname: "modObj2 - fname2",
  lname: "modObj2 - flname2",
  getFullName: function (age) {
    return `${this.fname} ${this.lname} ${age}`;
  },
};

function printName(age) {
  console.log(`My Name is ${this.getFullName(age)} ${[...arguments]}`);
}

let promise1 = Promise.resolve(3);
let promise2 = 42;
let promise3 = new Promise((res, rej) => {
  setTimeout(res, 500, "promise3 resolved");
});
let promise4 = new Promise((res, rej) => {
  setTimeout(rej, 1500, "promise4 rejected");
});

/* Pollyfill for call */
Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw "myCall is not callable";
  }

  context[this.name] = this;
  context[this.name](...args);
};

/* Pollyfill for bind */
Function.prototype.myBind = function (context, ...args1) {
  let fn = this;
  return function (...args2) {
    return fn.apply(context, [...args1, ...args2]);
  };
};

/* Pollyfill for filter */
Array.prototype.myFilter = function (callback, context) {
  /* Handling TypeError */
  if (
    !(
      (typeof callback === "function" || typeof callback == "Function") &&
      this.length > 0
    )
  )
    return new TypeError();
  let length = this.length;
  let filteredArr = [];
  for (let i = 0; i < length; i++) {
    if (callback.call(context, this[i], i, this)) filteredArr.push(this[i]);
  }
  return filteredArr;
};

/* Pollyfill for map */
Array.prototype.myMap = function (callback, context) {
  /* Handling TypeError */
  if (
    !(
      (typeof callback === "function" || typeof callback == "Function") &&
      this.length > 0
    )
  )
    return new TypeError();
  let length = this.length;
  let modifiedArr = new Array(length);
  for (let i = 0; i < length; i++) {
    let modifiedValue = callback.call(context, this[i], i, this);
    modifiedArr[i] = modifiedValue;
  }
  return modifiedArr;
};

/* Pollyfill for forEach */
Array.prototype.myForEach = function (callback, context) {
  /* Handling TypeError */
  if (
    !(
      (typeof callback === "function" || typeof callback == "Function") &&
      this.length > 0
    )
  )
    return new TypeError();
  let length = this.length;
  for (let i = 0; i < length; i++) {
    callback.call(context, this[i], i, this);
  }
};

/* Pollyfill for reduce */
Array.prototype.myReduce = function (callback, initialValue, context) {
  /* Handling TypeError */
  if (
    !(
      (typeof callback === "function" || typeof callback == "Function") &&
      this.length > 0
    )
  )
    return new TypeError();

  let accumulator = initialValue || undefined;
  let length = this.length;
  for (let i = 0; i < length; i++) {
    if (accumulator !== undefined) {
      accumulator = callback.call(context, accumulator, this[i], i, this);
    } else {
      accumulator = this[i];
    }
  }
  return accumulator;
};

/* Pollyfill for promise.all */
Promise.myAll = function (promises) {
  return new Promise((res, rej) => {
    let results = [];
    promises.forEach((val, idx) => {
      Promise.resolve(val)
        .then((val) => {
          results[idx] = val;
          if (idx + 1 == promises.length) res(results);
        })
        .catch((err) => rej(err));
    });
  });
};

/* Pollyfill for promise.race */
Promise.myRace = function (promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise, idx) => {
      Promise.resolve(promise).then(resolve, reject);
    });
  });
};

/* Pollyfill for promise.allSettled */
Promise.myAllSettled = function (promises) {
  let mappedPromises = promises.map((promise) => {
    return Promise.resolve(promise)
      .then((value) => ({
        status: "fulfilled",
        value,
      }))
      .catch((reason) => ({
        status: "rejected",
        reason,
      }));
  });
  return Promise.all(mappedPromises);
};

/* Pollyfill for promise.any */
Promise.myAny = function (promises) {
  let error = new Error("All got rejected or promises are empty");
  let errCount = 0;
  return new Promise((resolve, reject) => {
    if (promises.length == 0) return reject(error);
    promises.forEach((promise) => {
      Promise.resolve(promise)
        .then((val) => resolve(val))
        .catch((err) => {
          errCount++;
          if (errCount == promises.length) reject(error);
        });
    });
  });
};

/* Pollyfill for flattening an array */
var flatten = (a) => (Array.isArray(a) ? [].concat(...a.map(flatten)) : a);

/* Pollyfill for deep flattening an array */
var deepFlat = (arr, depth = 1) =>
  depth > 0
    ? arr.reduce(
        (acc, arr) =>
          acc.concat(Array.isArray(arr) ? deepFlat(arr, depth - 1) : arr),
        []
      )
    : arr.slice();

console.log(printName.myCall(modObj, 22));
console.log(printName.myCall(modObj2, 24));

let bindedFn = printName.myBind(myObj, "Arguments1");
// bindedFn("Arguments2");

let filteredArr = arr.myFilter((ele) => ele % 2 == 0);
let filteredArrMap = arr.myFilter((ele) => ele % 2 == 0).map((ele) => ele * 2);
// console.log("filteredArr => ", filteredArr);
// console.log("filteredArrMap => ", filteredArrMap);

let modifiedArr = arr.myMap((ele) => ele * 2);
// console.log("modifiedArr => ", modifiedArr);

arr.myForEach((ele, idx, array) => (arr[idx] = ele * 10));
// console.log("consoling forEach after operation ", arr);

let sumOfArr = arr.myReduce((acc, curVal, curIdx, arr) => acc + curVal);
// console.log("consoling reduce after operation ", sumOfArr);
// let reduceErr = [].myReduce((acc, curVal, curIdx, arr) => acc + curVal);
// console.log("consoling reduce after operation(Error Case) ", reduceErr);
// Promise.myAll([promise1, promise2, promise3])
//   .then((res) => console.log("myAll promises resolved ", res))
//   .catch((err) => console.log("myAll one of promise is rejected ", err));
// Promise.myAll([promise1, promise4])
//   .then((res) => console.log("myAll promises resolved ", res))
//   .catch((err) => console.log("myAll one of promise is rejected ", err));

// Promise.myRace([promise3, promise4])
//   .then((res) => console.log("myRace promises resolved ", res))
//   .catch((err) => console.log("myRace one of promise is rejected ", err));
// Promise.myRace([promise1, promise2, promise3])
//   .then((res) => console.log("myRace promises resolved ", res))
//   .catch((err) => console.log("myRace one of promise is rejected ", err));

// Promise.myAllSettled([promise1, promise2, promise3, promise4]).then((res) =>
//   console.log("myAllSettled promises ", res)
// );

// Promise.myAny([promise1, promise2, promise3, promise4, 5]).then((res) =>
//   console.log("myAny promises ", res)
// );
// Promise.myAny([])
//   .then((res) => console.log("myAny promises resolves", res))
//   .catch((err) => console.log("myAny promises err", err));
// Promise.myAny([promise4])
//   .then((res) => console.log("myAny promises resolves", res))
//   .catch((err) => console.log("myAny promises err", err));

// console.log(
//   `flatten an array ${JSON.stringify(nestedArr)} => `,
//   flatten(nestedArr)
// );

// console.log(
//   `Deep flatten an array ${JSON.stringify(nestedArr)} => `,
//   deepFlat(nestedArr, 2)
// );
