const { MyPromise } = require("./MyPromise.js");

function set(descriptor = "", val = 0) {
  console.log(descriptor, val);
  return val;
}

// testcase1: SYNC simple chain :: Success
new MyPromise((res) => {
  res(100);
})
  .then((data) => data)
  .then((data) => set("a.first", data))
  .then((data) => data + 100)
  .then((data) => set("a.second", data))
  .then((data) => data + 100)
  .then((data) => set("a.third", data));

//testcase2: SYNC Branched chain :: Success
//   const a = new MyPromise((res) => {
//     res(100)
//   })
//     .then((data) => set("b.first", data))

//   a
//     .then(data => data + 100)
//     .then((data) => set("b.second", data))

//   a
//   .then(data => data + 100)
//   .then((data) => set("b.third", data))

// testcase3.ASYNC. simple chain :: Success
//   new MyPromise((res) => {
//     setTimeout(() => res(100), 1500);
//   })
//     .then((data) => set("c.first", data))
//     .then(data => data + 100)
//     .then((data) => set("c.second", data))
//     .then(data => data + 100)
//     .then((data) => set("c.third", data));

//testcase4.ASYNC branched chain
//   const d = new MyPromise((res) => {
//     setTimeout(() => res(100), 3000)
//   })
//     .then((data) => set("d.first", data))
//   d
//     .then(data => data + 100)
//     .then((data) => set("d.second", data))

//   d
//     .then(data => data + 100)
//     .then((data) => set("d.third", data));
