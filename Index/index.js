//remove refresh for a tag
window.addEventListener("DOMContentLoaded", (event) => {
  let aTags = document.querySelectorAll("a");
  aTags.forEach((tag) => {
    tag.addEventListener("click", (e) => {
      e.preventDefault();
    });
  });
});

//Event Delegation
document.querySelector("#products").addEventListener("click", (e) => {
  console.log(`Event Delegation: \n${e.target.id}`);
  console.log("");
  if (e.target.tagName == "LI") {
    window.location.href = `${window.location.pathname}#${e.target.id}`;
  }
});

//Flatten Array
function flattenArray() {
  let arr = [2, [4, 5], [6, 7, [8, 9]], [6]];
  console.log("Flatten Array: \n", [].concat(...arr));
  console.log("");
}
// flattenArray();

//this

// Q1
var name = "Global";

//Q2
const obj1 = {
  name: "obj1",
  a: function () {
    console.log("a..//", this.name);
  },
  b: () => {
    console.log("b..//", this.name); //arrow fn. `this` points to window obj
  },
};

//Q3
function Person_This(name) {
  this.name = name;
  this.getName = () => this.name;
}

//Q4
const obj2 = {
  message: "obj2",
  logMessage() {
    console.log(this.message);
  },
};

//Q5
const obj3 = {
  message: "obj3",
};
function logMessage() {
  //should print `obj3`
  console.log(this.message);
}

function queOnThis() {
  console.log("This:");
  //Q1
  (function () {
    console.log("this", this.name); // in IIFE this wil points to -> window obj, so it will print Global
  })();

  //Q2
  obj1.a();
  obj1.b();

  //Q3
  const p = new Person_This("Person fn.");
  console.log("p.getName()", p.getName());

  //Q4
  setTimeout(obj2.logMessage, 1000); //undefined :: bcoz,
  //inside setTimeout it is called as normal function, so `this` will points to window obj

  //Q5
  logMessage.call(obj3);
  console.log("");
}
// queOnThis();

var status = "global Context - Call QUE1";

setTimeout(() => {
  const status = "setTimeout Callback - Call QUE1";
  const data = {
    status: "inside object - Call QUE1",
    getStatus() {
      console.log(this.status);
    },
  };

  data.getStatus();
  data.getStatus.call(this); // this will not point to function it will point to context
}, 0);

const animals = [
  { species: "Lion", name: "King - Call QUE2" },
  { species: "Whale", name: "Queen - Call QUE2" },
];

function printAnimal(i) {
  this.print = function () {
    console.log(`#${i} ${this.species} ${this.name}`);
  };

  this.print();
}

for (let i = 0; i < animals.length; i++) {
  printAnimal.call(animals[i], i);
}
