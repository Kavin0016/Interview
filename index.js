/*
  LEARN ABOUT 
  
  MICRO-FRONTEND

  ReactDomServer.renderToString(); //turn html to string for server side rendering
  ReactDom.hydrate() // used to attach event handlers and makes the page responsive  

  Progressive Hydration 
  * By progressively hydrating the application, 
    we can delay the hydration(events) for the less imporatnt parts of the page. 
  * (Delaying the page Interaction)

  Oauth 2.0

  CSS: POSITIONS
  CSS: BORDER-BOX, CONTENT-BOX

  HTML: SEMANTIC TAGS

  QUE: == VS === : Which one is faster? :: ANS: === is faster bcoz there's no type conversion in === instead == there is type conversion.
  QUE: DomcontentLoaded vs onLoad : difference ? :: ANS: DomcontentLoaded is fired once dom is loaded, but onLoad will fire after all the resources like img, scripts are loaded.
  QUE: Element.getBoundingClientRect() ? : what it is ? :: ANS: simply returns `DOMRect` Obj providing info abt the size of the obj and position relative to viewport.
  QUE: What happens when you type an URL in the browser and press enter : Medium Article
  QUE: What is AdBlocker ? || How AdBlocker works ? : Medium Article
  QUE: What is first class functions? :: Ans: functions which are treated as variables are known as first class functions.
  QUE: What is the application of JSON.stringify and JSON.parse :: Ans: It will be used for localstorage:.getItem&.setItem methods
  QUE: rest vs spread :: Ans: rest operator should be used at the end of parameter's list, but spread operator can be used at the middle while passing or assigning 
  QUE: what is Abort Controller? :: Ans: read it!!!!
  QUE: what is Intersection Observer? :: Ans: read it!!!!
  QUE: System Design Interview Question as follows :
    1)Google like typeahead / auto-suggestion,
    2)Google like Day Calendar,
    3)Microsoft Excel like SpreadSheet,
    4)Rendering Dynamic form using Config,
    5)Implement Progress bar,
    6)Implement Start Rating Widget,
    7)Twitter post like textarea,
    8)Create a ToDo Application,
    9)Design Cart Page,
    10)Design Product Listing page with filter,
    11)Build tic-tac-toe game
  QUE: (Functiion Declaration || Function Defenition || Function Statement) vs Function Expression
      Ans: 
        1) when we declare a normal function that is called => (Functiion Declaration || Function Defenition || Function Statement)
          eg: function normalFn(){return "Function Declaration"}
        2) when we store a function inside a variable that is called => Function Expression
          eg:  const square = function(num){ //Anonymous Function
                  return num * num;
                };
  QUE: Function Hoisting ?
      Ans: Functions are hoisted completely if we call the function before it is declare or initialized it will work fine,
      bcoz while creating execution context the fuctions will be copied entierly and saved in the memory,
      but this is not the scenario in case of variables, 
      variables will be hoisted which depends on let or var but the value will be stored in memory,
      only when the compiler reaches the line where the values have been initialized, 
      meanwhile variables will be in temporal dead-zone.
  QUE: Normal Function vs Arrow Function
      Ans:
        1) syntax,
        2) Implicit Return keyword
        3) arguments keyword => can be accessible [vs] cannot be accessible bcoz this points to global object
        4) this keyword => it points to current function [vs] it points to global object
  QUE: React18 features:
      1) Enabling React18 feture on root:
        import ReactDOM from 'react-dom/client';
        import App from "./App";
        let container = document.getElementById("root");
        let root = ReactDOM.createRoot(container);
        root.render(<App />);
      2) Automatic Batching: <Internally Handled />
      3) Opt-out Automatic Batching: 
          import {flushSync} from "react-dom"; // flushSync helps us to opt-out automatic batching
          function handleClick(){
            flushSync(() => {
              setCount(c => c+1);  
            })
            flushSync(() => {
              setFlag(f => !f)
            })
          }
      4) StartTransition: mark the state update as not-urgent;
      import {StartTransition} from "react"; // for class comp.
      setInputValue(input); //urgent;
      StartTransition(() => { // not-urgent
        setFilterTextValue(input);
      })
      import {useTransition} from "react"; // for fn. comp. -> provider level
      import {useDefferedValue} from "react"; // for fn. comp. -> consumer level
      const [isPending, startTransition] = useTransition();
      startTransition(() => {
        //not-urgent state update
      })

  */

CONVERT_ARRAY_TO_OBJECT = () => {
  /* CONVERT ARRAY TO OBJECT */
  console.log("/* CONVERT ARRAY TO OBJECT */");
  let CATO = [1, 2, 3, 4];
  let CATOOBJ = {};
  console.log({ ...CATO });
  console.log(
    CATO.reduce((prev, curr, index, arr) => ({ ...prev, [curr]: curr }), {})
  );
  console.log(Object.assign(CATOOBJ, CATO));
  /* CONVERT ARRAY TO OBJECT */
};

// CONVERT_ARRAY_TO_OBJECT();

REMOVING_ELEMENT_IN_AN_OBJECT = () => {
  /* REMOVING ELEMENT IN AN OBJECT */
  console.log("/* REMOVING ELEMENT IN AN OBJECT */");
  let REIAO = { REIAOa: "a", b: "b", c: "c", d: "d", num: 123 };
  let REIAOkey = "b";
  const { REIAOa, ...REIAOrest1 } = REIAO;
  const { [REIAOkey]: REIAOb, ...REIAOrest2 } = REIAO;
  console.log(REIAOrest1);
  console.log(REIAOrest2);
  /* REMOVING ELEMENT IN AN OBJECT */
};

// REMOVING_ELEMENT_IN_AN_OBJECT();

DEEP_CLONING_IN_ARRAY = () => {
  /* DEEP_CLONING_IN_ARRAY */
  console.log("DEEP_CLONING_IN_ARRAY");
  let DCIA = { a: "b", b: "c", d: { e: "e" } };
  let DCIAparse = JSON.parse(JSON.stringify(DCIA));
  let DCIAparse1 = Object.assign({}, DCIA);
  DCIA.a = "modified";
  DCIA.d.e = "MODIFIED";
  console.log(DCIAparse1);
  console.log(DCIAparse);

  //IO-2022
  // let DCIAparse3 = structuredClone(DCIA);
  // DCIAparse3.a = "structerdClone Modification";
  // console.log(DCIAparse3);
  /* DEEP_CLONING_IN_ARRAY */
};

// DEEP_CLONING_IN_ARRAY();

REPLACE_ALL_OCCURANCE_IN_STRING = () => {
  /* REPLACE_ALL_OCCURANCE_IN_STRING */
  console.log("/* REPLACE_ALL_OCCURANCE_IN_STRING */");
  let RAOIS = "abc 123 test abc cbd abc xyz";
  console.log(RAOIS.split("abc").join("replaced"));
  // console.log(RAOIS.replaceAll("abc","replaced"));  ===> will work in modern browsers
  console.log(RAOIS.replace(/abc/g, "replaced"));
  /* REPLACE_ALL_OCCURANCE_IN_STRING */
};

// REPLACE_ALL_OCCURANCE_IN_STRING();

CAPITALIZE_THE_STRING = () => {
  /* CAPITALIZE_THE_STRING */
  console.log("/* CAPITALIZE_THE_STRING */");
  Object.defineProperty(String.prototype, "customCapitalize", {
    value: function () {
      return this.charAt(0).toUpperCase() + this.slice(1);
    },
  });
  console.log("abc".customCapitalize());
  /* CAPITALIZE_THE_STRING */
};

// CAPITALIZE_THE_STRING();

INSER_AT_SPECIFIC_INDEX_IN_ARRAY = () => {
  /* INSER_AT_SPECIFIC_INDEX_IN_ARRAY */
  console.log("/* INSER_AT_SPECIFIC_INDEX_IN_ARRAY */");
  Array.prototype.customInsertOneAtPos = function (i, ...rest) {
    return this.slice(0, i).concat(rest, this.slice(i));
  };
  Array.prototype.customInsertTwoAtPos = function (i, ...rest) {
    this.splice(i, 0, ...rest);
    return this;
  };
  console.log([1, 2, 3, 4, 5].customInsertOneAtPos(2, 0, 0));
  console.log([1, 2, 3, 4, 5].customInsertTwoAtPos(2, 0));
  /* INSER_AT_SPECIFIC_INDEX_IN_ARRAY */
};

// INSER_AT_SPECIFIC_INDEX_IN_ARRAY();

ROUND_TO_TWO_PRECISION = () => {
  /* ROUND_TO_TWO_PRECISION */
  console.log("/* ROUND_TO_TWO_PRECISION */");
  console.log(Math.round(120.123456789 * 1000) / 1000);
  /* ROUND_TO_TWO_PRECISION */
};

// ROUND_TO_TWO_PRECISION();

FIND_LENGTH_OF_AN_OBJECT = () => {
  /* FIND_LENGTH_OF_AN_OBJECT */
  console.log("/* FIND_LENGTH_OF_AN_OBJECT */");
  let FLOAO = {
    name: "kavin",
    age: 22,
    qualification: "BSC CS",
    perscuingQualification: "MCA",
  };
  console.log(Object.keys(FLOAO).length);
  /* FIND_LENGTH_OF_AN_OBJECT */
};

// FIND_LENGTH_OF_AN_OBJECT();

FIND_UNIQUE_VALUES_IN_ARRAY = () => {
  /* FIND_UNIQUE_VALUES_IN_ARRAY */
  console.log("/* FIND_UNIQUE_VALUES_IN_ARRAY */");
  let FUVIA = ["a", "b", "c", "a", "c", "1", "2", "2", "3", "1"];
  let uniqueElements = FUVIA.filter((item, index, array) => {
    return array.indexOf(item) == index;
  });
  let uniqueInSet = [...new Set(FUVIA)];
  console.log(uniqueElements);
  console.log(uniqueInSet);
  /* FIND_UNIQUE_VALUES_IN_ARRAY */
};

// FIND_UNIQUE_VALUES_IN_ARRAY();

REMOVE_DUPLICATE_IN_ARRAY = () => {
  /* REMOVE_DUPLICATE_IN_ARRAY */
  console.log("/* REMOVE_DUPLICATE_IN_ARRAY */");
  FIND_UNIQUE_VALUES_IN_ARRAY();
  /* REMOVE_DUPLICATE_IN_ARRAY */
};

// REMOVE_DUPLICATE_IN_ARRAY();

COMBINE_ALL_ARRAY_INTO_SINGLE_ARRAY = () => {
  /* COMBINE_ALL_ARRAY_INTO_SINGLE_ARRAY */
  console.log("/* COMBINE_ALL_ARRAY_INTO_SINGLE_ARRAY */");
  let CAAISA_1 = [1, 2, 3, 4];
  let CAAISA_2 = [5, 6, 7, 8];
  let CAAISA_3 = [9, 10, 11, 12];
  console.log([...CAAISA_1, ...CAAISA_2, ...CAAISA_3]);
  /* COMBINE_ALL_ARRAY_INTO_SINGLE_ARRAY */
};

// COMBINE_ALL_ARRAY_INTO_SINGLE_ARRAY();

HOISTING = () => {
  /* HOISTING */
  console.log("/* HOISTING */");
  // console.log(a); // undefined
  console.log(a, b, c); // error bcoz b and c are in temproal dead zone
  const c = 5;
  let b = 10;
  var a = 10;
  /* HOISTING */
};

// HOISTING()

IMPLICIT_EXPLICT_BINDING = () => {
  /* IMPLICIT_EXPLICT_BINDING */
  console.log("/* IMPLICIT_EXPLICT_BINDING */");

  var obj = {
    name: "kavin",
    display: function () {
      console.log(this.name);
    },
  };

  var obj1 = {
    name: "ABC",
  };

  obj.display(); // kavin
  obj.display.call(obj1); // ABC
  /* IMPLICIT_EXPLICT_BINDING */
};

// IMPLICIT_EXPLICT_BINDING();

CACHING_OR_MEMOIZING = () => {
  /* CACHING_OR_MEMOIZING */
  console.log("/* CACHING_OR_MEMOIZING */");

  function myMemoize(fn, context) {
    const res = {};
    return function (...args) {
      var argsCache = JSON.stringify(args);
      if (!res[argsCache]) {
        res[argsCache] = fn.call(context || this, ...args);
      }
      return res[argsCache];
    };
  }

  const clumsyProduct = (num1, num2) => {
    for (let i = 0; i < 10000000; i++) {}
    return num1 * num2;
  };

  const memoizedClumsyProduct = myMemoize(clumsyProduct);

  console.time("First Call");
  // console.log(clumsyProduct(9783,3289)); // got some time of around 6 - 10 milli sec
  console.log(memoizedClumsyProduct(9783, 3289)); // got some time of around 6 - 10 milli sec
  console.timeEnd("First Call");
  // console.timeLog("First Call");

  console.time("First - same Call");
  console.log(memoizedClumsyProduct(9783, 3289)); // got some time of around 6 - 10 milli sec
  console.timeEnd("First - same Call");
  // console.timeLog("First - same Call");

  console.time("Second Call");
  // console.log(clumsyProduct(9983,8378)); // got some time of around 6 - 10 milli sec
  console.log(memoizedClumsyProduct(9983, 8378)); // time should reduced to few milli seconds say 0.003 sec
  console.timeEnd("Second Call");
  // console.timeLog("Second Call");
  /* CACHING_OR_MEMOIZING */
};

// CACHING_OR_MEMOIZING();

QUE_ON_EVENT_LOOP = () => {
  /* QUE_ON_EVENT_LOOP */
  console.log("/* QUE_ON_EVENT_LOOP */");
  console.log("a");
  setTimeout(() => console.log("b"), 0);
  Promise.resolve(() => console.log("c").then((res) => res()));
  console.log("d");
  /* result :
        a
        d
        c
        b
    */
  /* QUE_ON_EVENT_LOOP */
};

// QUE_ON_EVENT_LOOP();

INFINITE_CURRYING = (a) => {
  /* INFINITE_CURRYING */
  console.log("/* INFINITE_CURRYING */");
  return (INFINITE_CURRYING = (b) => {
    if (b) return INFINITE_CURRYING(a + b);
    return a;
  });
  /* INFINITE_CURRYING */
};

// console.log(INFINITE_CURRYING(5)(2)(4)(8)()); // 19

FN_CURRYING = () => {
  /* FN_CURRYING */
  console.log("/* FN_CURRYING */");
  function sum(a = 0, b = 0, c = 0, d = 0) {
    return a + b + c + d;
  }

  function currying(fn, ..._args1) {
    return (..._args2) => {
      return fn(..._args1, ..._args2);
    };
  }

  const curriedSum1 = currying(sum, 10);
  let res1 = curriedSum1(10, 10, 10);
  let res2 = curriedSum1(10);
  const curriedSum2 = currying(sum, 10, 10, 10);
  let res3 = curriedSum2();
  const curriedSum3 = currying(sum);
  let res4 = curriedSum3(10, 10, 10, 10);
  let res5 = curriedSum3(10, 10);
  const curriedSum4 = currying(sum, 10, 10, 10, 10);
  let res6 = curriedSum4();
  console.log({
    curriedSum1: {
      res1,
      res2,
    },
    curriedSum2: {
      res3,
    },
    curriedSum3: {
      res4,
      res5,
    },
    curriedSum4: {
      res6,
    },
  });
};

// FN_CURRYING();

CURRIED_FN = () => {
  function makeCurried(targetFn) {
    var noOfArgs = targetFn.length;
    return function fn() {
      if (arguments.length < noOfArgs) return fn.bind(null, ...arguments);
      else return targetFn.apply(null, arguments);
    };
  }

  function sum(a, b, c, d, e, f) {
    return a + b + c + d + e + f;
  }

  const curriedSum = makeCurried(sum);

  console.log(curriedSum(1, 2, 3)(4, 5, 6)); // 21
  console.log(curriedSum(1, 2)(3, 4)(5, 6)); // 21
  console.log(curriedSum(1, 2, 3, 4)(5, 6)); // 21
  console.log(curriedSum(1, 2)(3, 4, 5, 6)); // 21
  console.log(curriedSum(1)(2)(3)(4)(5)(6)); // 21
};

// CURRIED_FN();

CHAIN_THE_OPERATION = () => {
  /* CHAIN_THE_OPERATION */
  console.log("/* CHAIN_THE_OPERATION */");
  const calc = {
    total: 0,
    add(a) {
      this.total += a;
      return this;
    },
    multiply(a) {
      this.total *= a;
      return this;
    },
    subtract(a) {
      this.total -= a;
      return this;
    },
  };
  const result = calc.add(10).multiply(5).subtract(30).add(30);
  console.log(`result = ${result.total}`); // 50

  /* Using Constructor Function */
  const chain = function (initialValue = 0) {
    this.add = function (val = 0) {
      initialValue += val;
      return this;
    };
    this.sub = function (val = 0) {
      initialValue -= val;
      return this;
    };
    this.multiply = function (val = 1) {
      initialValue *= val;
      return this;
    };
    this.log = function () {
      console.log("Initalalue => ", initialValue);
      return this;
    };
  };

  const chainMethod = new chain(100);
  chainMethod.log().add(5).log().sub(10).log().multiply(2).log();

  /* CHAIN_THE_OPERATION */
};

// CHAIN_THE_OPERATION();

COMPOSITION_POLLYFILL = () => {
  function addFive(a) {
    return a + 5;
  }

  function subtractTwo(a) {
    return a - 2;
  }

  function multiplyFour(a) {
    return a * 4;
  }

  const compose = (...functions) => {
    return (args) => {
      return functions.reduceRight((args, fn) => fn(args), args);
    };
  };

  //It will return a function to provide initial value. If we calls that return function with initial value means,
  //it will first call multiplyFour by passing initial vaue as paramete then,
  //it calls subtractTwo by passing the returned value from multiplyFour fn. then,
  //it calls addFive by passing the returned value from subtractTwo fn. then,
  //It will return the result as a computed value of all fn.s
  const evaluate = compose(addFive, subtractTwo, multiplyFour);

  console.log(evaluate(5)); //passing initial value as 5 to compose al three fn.s
};

// COMPOSITION_POLLYFILL();

PIPE_POLLYFILL = () => {
  /* the above COMPOSE is same as this PIPE,
    the only difference is that in compose fn. instead of evaluating all fn.s from RIGHT,
    it should evaluate form LEFT*/
  //with respect to above comment we need to change "reduceRight" method to "reduce",
  //so that it will evauate from left
};

// PIPE_POLLYFILL();

BIND_POLLYFILL = () => {
  let obj = {
    name: "Kavin",
  };
  Object.prototype.myBind = function (context = this, ...arg1) {
    const fn = this;
    return function (...arg2) {
      return fn.apply(context, [...arg1, ...arg2]);
    };
  };
  function printMe() {
    console.log(`My name is ${this.name}`);
  }
  let bindedObj = printMe.myBind(obj, "arg1");
  bindedObj("arg2");
};

// BIND_POLLYFILL();

PROMISE_ALL_POLLYFILL = () => {
  function showText(text, time) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(text);
      }, time);
    });
  }

  function promiseAllPollyfil(promises) {
    let results = [];
    return new Promise((resolve, reject) => {
      promises.forEach((promise, index) => {
        promise
          .then((res) => {
            results.push(res);
            if (index == promise.length - 1) {
              resolve(results);
            }
          })
          .catch((err) => reject(err));
      });
    });
  }

  promiseAllPollyfil([showText("Hello", 2000), Promise.resolve("Hi")])
    .then((results) => console.log(results))
    .catch((err) => console.log(err));
};

// PROMISE_ALL_POLLYFILL();

WAYS_TO_CENTER_A_DIV = () => {
  /* 
    1. transform: translate(-50%, -50%),
    2. flex,
    3. grid
  */
};

// WAYS_TO_CENTER_A_DIV();

CSS_BOX_MODEL = () => {
  /*
    1. width and height,
    2. padding,
    3. border and
    4. margin
    the above properties are combined to form BOX-MODEL for HTML elemenet
  */
};

// CSS_BOX_MODEL();

//STRING_COMPRESSION

STRING_COMPRESSION = (string = "") => {
  let frequency = {};
  for (let i in string) {
    frequency[string[i]] ? frequency[string[i]]++ : (frequency[string[i]] = 1);
  }
  let compressedString = Object.keys(frequency).reduce(
    (acc, currVal, idx, arr) => {
      acc += `${currVal}${frequency[currVal]}`;
      return acc;
    },
    ""
  );
  // console.log({
  //   frequency,
  //   compressedString,
  //   string,
  //   compressedLen: compressedString.length,
  //   strLen: string.length,
  //   eval: compressedString.length <= string.length,
  // });
  if (compressedString.length < string.length) {
    console.log(compressedString);
  } else {
    console.log(string);
  }
};

// STRING_COMPRESSION("aaabbccddddde");
// STRING_COMPRESSION("aabbccdd");

ROTATE_MATRIX_BY_90_DEG = () => {
  let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ];
  console.log("original => ", matrix);
  let rotatedMatrix = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
  /* My method */
  // for(let i=0; i < 4; i++){
  //   for(let j=0; j<4; j++){
  //     let rowVal = Math.abs(3-j);
  //     rotatedMatrix[i][j] = matrix[rowVal][i];
  //   }
  // }
  /* My method */
  /* CTCI SOLUTION */
  for (let layer = 0; layer < 4 / 2; ++layer) {
    let first = layer;
    let last = 4 - 1 - layer;
    for (let i = 0; i < last; i++) {
      let offset = i - first;
      //save top
      let top = matrix[first][i];
      //left -> top
      rotatedMatrix[first][i] = matrix[last - offset][first];
      //bottom -> left
      rotatedMatrix[last - offset][first] = matrix[last][last - offset];
      //right -> bottom
      rotatedMatrix[last][last - offset] = matrix[i][last];
      //top -> right
      rotatedMatrix[i][last] = top;
    }
  }
  /* CTCI SOLUTION */
  console.log("rotatedMatrix => ", rotatedMatrix);
};

// ROTATE_MATRIX_BY_90_DEG();

PARANTHESIS_CHECK = (str) => {
  let stackQue = str;
  let stackArr = [];
  let stackTop = -1;
  let isNotValid = false;
  let strArr = stackQue.split("");
  strArr.map((str, idx) => {
    // console.log("index: ", idx);
    if (str == "(" || str == "[" || str == "{") {
      // console.log("pushed : ", str, stackArr, idx);
      stackArr.push(str);
      stackTop++;
    } else {
      if (str == ")" && stackArr[stackTop] == "(") {
        // console.log("popped : ", str, stackArr, idx);
        stackArr.pop();
        stackTop--;
      } else if (str == "]" && stackArr[stackTop] == "[") {
        // console.log("popped : ", str, stackArr, idx);
        stackArr.pop();
        stackTop--;
      } else if (str == "}" && stackArr[stackTop] == "{") {
        // console.log("popped : ", str, stackArr, idx);
        stackArr.pop();
        stackTop--;
      } else {
        isNotValid = true;
      }
    }
  });
  console.log(`Valid: ${!isNotValid}`);
};

PARANTHESIS_CHECK_NEW = (str) => {
  let closeMap = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  var stack = new Array();
  for (let char of str) {
    if (char == "{" || char == "[" || char == "(") {
      stack.push(char);
    } else {
      if (closeMap[stack.pop()] !== char) return false;
    }
  }
  return stack.length ? false : true;
};

// console.log(PARANTHESIS_CHECK_NEW("{}()[]")); // PARANTHESIS_CHECK("{}()[]"); // true
// console.log(PARANTHESIS_CHECK_NEW("{}()]")); // PARANTHESIS_CHECK("{}()]"); // false
// console.log(PARANTHESIS_CHECK_NEW("()")); // PARANTHESIS_CHECK("()"); // true
// console.log(PARANTHESIS_CHECK_NEW("((")); // PARANTHESIS_CHECK("(("); // false

OPERATION_WITH_STR_COMMAND = (ops) => {
  /*
  Example 1:
  Input: ops = ["5","2","C","D","+"]
  Output: 30
  Explanation :
  "5" Add 5 to the record, record is now [5].
  "2" Add 2 to the record, record is now [5, 2].
  "C" Invalidate and remove the previous score, record is now [5]
  "D" Add 2 * 5 10 to the record, record is now [5, 10].
  "+" Add 5 + 10 = 15 to the record, record is now [5, 10, 15].
  The total sum is 5+10+15 = 30.
  */
  let operatedRes = ops.reduce((acc, op, idx, arr) => {
    let res = [...acc];
    if (op == "+") {
      let val = Number(res[res.length - 1]) + Number(res[res.length - 2]);
      res.push(val);
    } else if (op == "C") {
      res.splice(Number(idx - 1), 1);
    } else if (op == "D") {
      let val = 2 * Number(res[res.length - 1]);
      res.push(val);
    } else {
      res.push(Number(op));
    }
    return res;
  }, []);
  console.log(operatedRes.reduce((acc, val) => (acc += val), 0));
};

// OPERATION_WITH_STR_COMMAND(["5","2","C","D","+"]);//30
// OPERATION_WITH_STR_COMMAND(["5","-2","4","C","D","9","+","+"])//27

MOVE_ZEROS_TO_END = (arr) => {
  //[8,5,0,10,0,20] = > [8,5,10,20,0,0];
  let c = 0; // to track the non-zero numbers
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[c]] = [arr[c], arr[i]]; //swapping non-zero numbers before zero
      c++; // increment the counter for non-zero numbers
    }
  }
  console.log("MOVE_ZEROS_TO_END\n", arr);
};

// MOVE_ZEROS_TO_END([8, 5, 0, 10, 0, 20]);

CHECK_SUM_PAIR_IN_ARR = (arr, sum) => {
  let set = new Set();
  for (let el of arr) {
    if (set.has(el - sum)) {
      return true;
    } else {
      set.add(el);
    }
  }
  return false;
};

/*
  Initially It will check 3 - 2 = 1 in set,
  Its not in pair it will add in set, then
  will check 3 -1 = 2 in set,
  Its there in set so It will return true 
*/

// console.log(CHECK_SUM_PAIR_IN_ARR([2, 1, 3, 6], 3)); // true
// console.log(CHECK_SUM_PAIR_IN_ARR([2, 1, 3, 6], 6)); // false

POLLYFILL_FOR_FILTER = () => {
  // we need to create function declaration(normal function) not function declaration(arrow function),
  // bcoz we wont get value of array that bind, since arrow function binds to window obj
  Array.prototype.myFilter = function (cb) {
    // console.log(this);
    let arr = [];
    for (let i = 0; i < this.length; i++) {
      if (cb(this[i])) {
        arr.push(this[i]);
      }
    }
    return arr;
  };

  [1, 2, 3, 4, 5, 6].myFilter((el) => el > 3).map((el) => console.log(el));
};

// POLLYFILL_FOR_FILTER();

ANAGRAM = (str1, str2) => {
  //Anagram is a word or phrase made by transposing the letters of another word or phrase
  //Ex: "secure" is an anagram of "rescue", "listen" is an anagram of "silent"

  //We will be creating an araay for 256 characters and filled it with 0.
  //then, we will loop through char of str1 and
  // increament the ASCII value of char at i for str1 string in charArr and
  // decrement the ASCII value of char at i for str2 string in charArr and
  //so that our charArr will be filled with only 0 at last if both the str are anagram
  const CHAR = 256;

  let charArr = Array(CHAR).fill(0);

  if (str1.length !== str2.length) {
    return false;
  }

  for (let i = 0; i < str1.length; i++) {
    charArr[str1.charCodeAt(i)]++;
    charArr[str2.charCodeAt(i)]--;
  }

  for (let i = 0; i < CHAR; i++) {
    if (charArr[i] !== 0) return false;
  }

  return true;
};

// console.log("ANAGRAM => secure,rescue", ANAGRAM("secure", "rescue")); //true
// console.log("ANAGRAM => secure,rescuee", ANAGRAM("secure", "rescuee")); //false

DETECT_LOOP_IN_LINKEDIST = () => {
  class LinkedList {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }

  const head = new LinkedList(10);
  const temp1 = new LinkedList(20);
  const temp2 = new LinkedList(30);

  head.next = temp1;
  temp1.next = temp2;
  temp2.next = head; //Since we need to detect loop we are assigning head to next of temp2

  //we are following flyodCycleDetection Algorithm (i.e: slow pointer Algorithm) to detect cycle

  function flyodCycleDetectionAlgo() {
    let slow = head,
      fast = head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow == fast) return true;
    }
    return false;
  }

  console.log("DETECT_LOOP_IN_LINKEDIST => ", flyodCycleDetectionAlgo());
};

// DETECT_LOOP_IN_LINKEDIST();

MAX_SUM_SUB_ARR = (arr) => {
  let res = 0;
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let curr = 0;
    for (let j = i; j < n; j++) {
      curr = curr + arr[j];
      res = Math.max(curr, res);
    }
  }
  console.log(
    "<= BRUTEFORCE APPROACH O(N^2) =>\n",
    `MAX_SUM_SUB_ARR => ${[...arr]} => `,
    res
  );

  let currSum = (maxSum = 0);
  for (let i = 0; i < n; i++) {
    if (currSum < 0) {
      currSum = arr[i];
    } else {
      currSum += arr[i];
    }
    maxSum = Math.max(currSum, maxSum);
  }
  console.log(
    "<= KADANE'S APPROACH O(N) =>\n",
    `MAX_SUM_SUB_ARR => ${[...arr]} => `,
    res
  );
};

// MAX_SUM_SUB_ARR([-3, -4, 5, -1, 2, -4, 6, -1]); // 8 <= [5, -1, 2, -4, 6]
// MAX_SUM_SUB_ARR([-2, 3, -1, 2]); // 4 <= [3, -1, 2]

MODIFY_ARR_TO_OBJ = (arr) => {
  //modify [1,2,3] to {1:1, 2:2, 3:3}
  let res = arr.map((el) => ({ [el]: el }));
  console.log(`REDUCE_ARR_TO_OBJ =>\n${[...arr]} => `, res);
};

// MODIFY_ARR_TO_OBJ([1, 2, 3, 4, 5]);

CLOSURE_SETTIMEOUT = () => {
  for (var i = 1; i <= 3; i++) {
    // setTimeout(() => {
    //   console.log(i);
    // }, 1000); // It will print 4 four times bcoz of variable scope variable i
    // the interviwer wants to print 1 2 3 by using var variable only,
    // for that we will be creating closure and pass i th value into and print that
    // or we can also use IIFE to call that function
    (function y(i) {
      setTimeout(() => {
        console.log(i);
      }, 1000);
    })(i);
    // y(i);
  }
};

// CLOSURE_SETTIMEOUT();

QUES_ON_PROTOTYPE = () => {
  function Artist(name = "", talent = "") {
    this.name = name;
    this.talent = talent;
  }

  class Musician extends Artist {
    constructor(name, talent, instrument) {
      super(name, talent);

      this.instrument = instrument;
    }
  }

  const frank = new Musician("frank", "guitar", "electrical guitar");

  /* base prototype of every object is object prototype.
   So, if we bind anything to Object prototype it will be accessable among all datatype(arrays, functions, string) */
  Object.prototype.info = function () {
    console.log("this", this);
  };

  frank.info();
  ["3", 4, 5, "100"].info();
  "Kavin".info();

  /* Que 2 */
  function add(a, b) {
    this.a = a;
    this.b = b;
    console.log("add => ", { a: this.a, b: this.b }, this.a + this.b);
  }

  add.prototype.assignA = function (a) {
    this.a = a;
    console.log("assignA => ", { a: this.a, b: this.b }, this.a + this.b);
  };

  add.prototype.assignB = function (b) {
    this.b = b;
    console.log("assignB => ", { a: this.a, b: this.b }, this.a + this.b);
  };

  const a = new add(10, 10);
  a.assignA(20);
  a.assignB(30);
};

// QUES_ON_PROTOTYPE();

FIND_SECONG_LARGEST_NO_IN_ARR = () => {
  /* FIND_SECONG_LARGEST_NO_IN_ARR */
  console.log("/* FIND_SECONG_LARGEST_NO_IN_ARR */");
  let arr = [1, 2, 45, 43, 4, 10, 30, 42];
  arr.sort((a, b) => b - a);
  console.log("second largest number in an array => ", arr[1]);
};

// FIND_SECONG_LARGEST_NO_IN_ARR();

FIND_DISTANCE_IN_STRING = () => {
  /* FIND_DISTANCE_IN_STRING */
  console.log("/* FIND_DISTANCE_IN_STRING */");
  String.prototype.distance = function (char) {
    var index = this.indexOf(char);

    if (index === -1) {
      console.log(char + " does not appear in " + this);
    } else {
      console.log(
        char +
          " is " +
          (this.length - index) +
          " characters from the end of the string!"
      );
    }
  };

  "Hello".distance("o");
};

// FIND_DISTANCE_IN_STRING();

FIND_EXCEL_COLUMN_NAME = () => {
  /* FIND_EXCEL_COLUMN_NAME */
  console.log("/* FIND_EXCEL_COLUMN_NAME */");
  function printString(columnNumber) {
    // To store result (Excel column name)
    let columnName = [];

    while (columnNumber > 0) {
      // Find remainder
      let rem = columnNumber % 26;

      // If remainder is 0, then a
      // 'Z' must be there in output
      if (rem == 0) {
        columnName.push("Z");
        columnNumber = Math.floor(columnNumber / 26) - 1;
      } // If remainder is non-zero
      else {
        columnName.push(String.fromCharCode(rem - 1 + "A".charCodeAt(0)));
        columnNumber = Math.floor(columnNumber / 26);
      }
    }

    // Reverse the string and print result
    console.log(columnName.reverse().join(""));
  }

  // Driver program to test above function
  printString(26);
  printString(51);
  printString(52);
  printString(80);
  printString(676);
  printString(702);
  printString(705);
};

// FIND_EXCEL_COLUMN_NAME();

FIRST_CLASS_FNS = () => {
  function square(num) {
    return num * num;
  }

  function displaySqaue(fn) {
    /* Here fn is called as first class functions :: fns which is treated as variables are called first class functions */
    const num = 5;
    console.log(`Square of ${num} is => ${fn(num)}`);
  }

  displaySqaue(square);
};

// FIRST_CLASS_FNS();

FUNCTION_SCOPE = () => {
  var x = 21;

  var fun = function () {
    /* Here the var x will be showed from global scope since its showed, local scope has priority over global,
    so it will print "undefined" since the local variable has not yet initialized */
    console.log("inner fun before initialization", x);
    var x = 20;
    console.log("inner fun after initialization", x);
  };
  /* since after inner fun execution we are prinitng the var x it will print "20" 
  becoz, in inner fun the var x in global scope has been update through 
  shadowing by changing the value for global var x through refrence */
  console.log("outter fun after inner fun execution", x);
  fun();
};

// FUNCTION_SCOPE();

OBJ_QUE_1 = () => {
  const func = (function (a) {
    /* Here It will return the value 'a' bcoz, delete operator will apply only to object not for simple variables. so the value of 'a' is untouched*/
    delete a;
    return a;
  })(5);

  console.log("func => ", func);

  const property = "firstName";
  const value = "kavin";
  /* Dynamic property and value in obj */
  const sampleObj = {
    [property]: value,
    lastName: "ln",
    age: "22",
  };

  /* Loop through an object */
  for (key in sampleObj) {
    console.log({
      key,
      value: sampleObj[key],
    });
  }
};

// OBJ_QUE_1();

OBJ_QUE_2 = () => {
  /* Question 2 - Create a function multiplyByTwo(obj) that
      multiplies all numeric property values of nums by 2. */
  let nums = {
    a: 100,
    b: 200,
    title: "multiply value by 2",
  };

  multiplyByTwo(nums);

  function multiplyByTwo(obj) {
    for (key in obj) {
      if (typeof obj[key] === "number") {
        obj[key] *= 2;
      }
    }
  }

  console.log("nums => ", nums);
};

// OBJ_QUE_2();

OBJ_QUE_3 = () => {
  let a = {};
  let b = { key: "b" };
  let c = { key: "c" };
  a[b] = 123;
  a[c] = 456;

  /* Here a[c] will print 456 bcoz, 
   If we passs an object as a key to object It will take that key as
   "[object object]" string. the same happens with second assigmnment.
   Since, the key are same the last assigned value will overwrite the previous value.
   So the output will be '456'*/

  console.log("a[c]", a[c]);
};

// OBJ_QUE_3();

OBJ_QUE_4 = () => {
  const settings = {
    username: "kavin",
    level: 19,
    health: 90,
  };
  /* Here It will stringify only level and health properties of settings */
  console.log(JSON.stringify(settings, ["level", "health"]));
};

// OBJ_QUE_4();

OBJ_QUE_5 = () => {
  let c = { greeting: "Hello!" };
  let d;
  d = c;
  d.greeting = "Hey!!!!";
  console.log("c.greeting", c.greeting); // Hey!!!!
};

// OBJ_QUE_5();

OBJ_QUE_6 = () => {
  let a = { greet: "Hi" };
  let b = a;
  console.log(a == b); // true bcoz, both are refrencing the same memory address
  console.log(a === b); // true bcoz, both are refrencing the same memory address
  console.log({ a: 1 } == { a: 1 }); // false bcoz, both are refrencing different memory address
  console.log({ a: 1 } === { a: 1 }); // false bcoz, both are refrencing different memory address
};

// OBJ_QUE_6();

OBJ_QUE_7 = () => {
  let person = { name: "kavin" };
  const members = [person];
  person.name = "modified";
  person = null;
  /* Here we are modifying the person object and not members[0]th element, 
    but If we modify the properties of person object it will reflect */
  console.log("members => ", members);
};

// OBJ_QUE_7();

OBJ_QUE_8 = () => {
  let value = { number: 10 };
  const multiply = (x = { ...value }) => {
    console.log((x.number *= 2));
  };

  multiply(); // 20
  multiply(); // 20
  multiply(value); // 20
  multiply(value); // 40
};

// OBJ_QUE_8();

OBJ_QUE_9 = () => {
  function changeReferenceAndAge(person) {
    /* Age will chage the passed obj property since, its referencing the address,
    the return obj will be new bcoz we are assigning a new obj that will change the memory address as well. */
    person.age = 25;
    person = {
      name: "Bob",
      age: 50,
    };
    return person;
  }

  const personObj1 = {
    name: "Alex",
    age: 17,
  };

  const personObj2 = changeReferenceAndAge(personObj1);

  console.log({
    personObj1,
    personObj2,
  });
};

// OBJ_QUE_9();

OBJ_QUE_10 = () => {
  function foo() {
    return {
      bar: "10",
    };
  }

  function foo1() {
    return;
    {
      bar: "10";
    }
  }

  console.log(foo());
  console.log(foo1());
};

// OBJ_QUE_10();

REMOVE_FALSSY_VALUES_FROM_ARR = () => {
  /* REMOVE_FALSSY_VALUES_FROM_ARR */
  let arr = [1, 2, "b", 0, {}, "", NaN, 3, undefined, null, 5];
  console.log("/* REMOVE_FALSSY_VALUES_FROM_ARR */");
  console.log("arr => ", arr, "\n ans =>");
  console.log(arr.filter((a) => a)); // remember from Pollyfill if the returned value is true, then only we will push that indexed value to return
  console.log(arr.filter((a) => !!a));
  console.log(arr.filter((a) => Boolean(a)));
  console.log(arr.filter(Boolean));
};

// REMOVE_FALSSY_VALUES_FROM_ARR();

QUE_IIFE = () => {
  (function (x) {
    return (function (y) {
      console.log(x); // 1 bcoz of Closure
    })();
  })(1);
};

// QUE_IIFE();

FACT_MEMOIZATION = () => {
  let factNumbers = [10, 2, 3, 7, 14];
  let fact = [1];
  function factorial(n) {
    if (fact[n]) {
      return fact[n];
    } else {
      if (n === 0) {
        fact[n] = 1;
      } else {
        fact[n] = n * factorial(n - 1);
      }
    }
    return fact[n];
  }
  factNumbers.forEach((val) =>
    console.log(`Fact Number => ${val} => ${factorial(val)}`)
  );
};

// FACT_MEMOIZATION();

ASYNC_AWAIT_PROMISE = () => {
  //Que 1
  async function getData() {
    return await Promise.resolve("I made it");
  }

  const data = getData();
  // console.log("data => ", data); // <pending> :: bcoz, async fn. will always return promise
  // getData().then((res) => console.log(res));

  //Que 2
  const myPromise = (msg) => Promise.resolve(`I have resolved ${msg}`);

  function firstFunction() {
    myPromise("first").then((res) => console.log(res)); // pushed to micro-task queue
    console.log("first"); // print first bcoz executed on the excecution context flow;
  }

  async function secondFunction() {
    console.log(await myPromise("second")); // await keyword hault the script untill it completes, so thread will remain wait this line to complete its execution, it prints first
    console.log("second"); // it will print second on the flow of execution context
  }

  // firstFunction();
  // secondFunction();

  //Que 3
  // console.log(Promise.resolve(5));

  //Que 4
  async function* range(start, end) {
    for (let i = start; i <= end; i++) {
      yield Promise.resolve(i);
    }
  }

  (async () => {
    const gen = range(1, 3); // will get Promise {1} Primise {2} Promise {3}
    for await (let item of gen) {
      // here await will hault the script untill it resolves then it prints the msg
      // console.log(item);
    }
  })();

  //Que 5
  (async () => {
    try {
      // console.log(await myPromise("try block"));
    } catch {
      throw new Error("Something Went Wrong");
    } finally {
      // console.log(
      //   "I am finnaly, I will work no matter whats the staus of response is"
      // );
    }
  })();

  //Que 6
  const nestedPromise = Promise.resolve(
    Promise.resolve("Nested Promise Resolved")
  );

  function funcOne() {
    nestedPromise
      .then((res) => res)
      .then((res) => console.log(res, "- funcOne"));
    setTimeout(() => console.log("Timeout! - funcOne"), 0);
    console.log("last line - funcOne");
  }

  async function funcTwo() {
    const res = await nestedPromise; // it will hault the script from the execution of below lines,
    console.log(await `${res} - funcTwo`); // meanwhile the thread will look for micro-task queue followed
    setTimeout(() => console.log("Timeout! - funcTwo"), 0); // by callback queue to execute
    console.log("last line - funcTwo");
  }

  funcOne();
  funcTwo();
};

// ASYNC_AWAIT_PROMISE();

LOG_ON_ARRS = () => {
  var arr1 = "john".split("");
  var arr2 = arr1.reverse(); // reverse method will reverse the arr in "in-place" and assigns the refference to the variable, arr2 points to arr1
  var arr3 = "jones".split("");

  //arr1 = [j,o,h,n];
  //arr2 = [n,h,o,j] <=> arr1;
  //arr3 = [j,o,n,e,s]
  arr2.push(arr3); // Here we are pushing a whole arr as one ele. to arr2 (refrence to arr1)
  //arr1 => arr2 => [n,h,o,j,[j,o,n,e,s]]

  console.log(arr1.length, arr1);
};

// LOG_ON_ARRS();

TYPE_CONVERSION = () => {
  console.log("0 || 1 = " + (0 || 1));
  console.log("1 || 2 = " + (1 || 2));
  console.log("0 && 1 = " + (0 && 1));
  console.log("0 && 1 = " + (1 && true));
  console.log("1 && 2 = " + (1 && 2)); // in js the element after && wil return instead of evaluation
  console.log(0.1 + 0.2 == 0.3); //false bcoz 0.1+.2 == 0.33333... (js is precion based)
  console.log(1 + "2" + "2"); //122 bcoz + will converts the number to str
  console.log(1 + +"2" + "2"); //32 bcoz the second parameter, =>  "+'2'" (+) unary operator converts str to number,
  //that adds up with 1 truns into 3,
  //then (+) will conver it to str that concates it with '1' forms '31'
  console.log(1 + -"1" + "2"); // 02 same as above but instead (+) here we have (-)
  console.log(+"1" + "1" + "2"); //112
  console.log("A" - "B" + "2"); //NaN2 bcoz Alphabetic Char don't have any mathematical operations,
  //so ends up with NaN which then converts to str and appends to  '2' by (+) operator.
  console.log("A" - "B" + 2); // NaN, bcoz any mathematical operation with NaN results in NaN
};

// TYPE_CONVERSION();

PLAINDROME = (str = "") => {
  return str.split("").reverse().join("") == str;
};

// console.log("MADAM => ", PLAINDROME("MADAM"));
// console.log("KAVIN => ", PLAINDROME("KAVIN"));

PRODUCT_OF_ARRAY_EXCEPT_SELF = () => {
  const arr = [1, 2, 3, 4, 5, 6];
  const length = arr.length;
  /* Approach 1 - with division(/) */
  let prd_of_arr = arr.reduce((acc, val) => acc * val, 1);
  let res_arr_appr_1 = [];
  for (let i = 0; i < length; i++) {
    res_arr_appr_1[i] = prd_of_arr / arr[i];
  }
  console.log("Approach 1 => ", { res_arr_appr_1 });

  /* Approach 2 - without division(/) */
  /* Here we are going to have a left-product(excluding current index) and right-products(excluding current index) 
  on seperate arrs, then we will multiply both arr at respective index to form a resultant arr */
  let left_prd = [];
  left_prd[0] = 1;
  let right_prd = [];
  right_prd[length - 1] = 1;
  let res_arr_appr_2 = [];
  for (let i = 1; i < length; i++) {
    left_prd[i] = arr[i - 1] * left_prd[i - 1];
  }
  for (let i = length - 2; i > -1; i--) {
    right_prd[i] = arr[i + 1] * right_prd[i + 1];
  }
  for (let i = 0; i < length; i++) {
    res_arr_appr_2[i] = left_prd[i] * right_prd[i];
  }
  console.log("Approach 2 => ", { res_arr_appr_2 });
};

// PRODUCT_OF_ARRAY_EXCEPT_SELF();

SUM_OF_ARRAY_EXCEPT_SELF = () => {
  /* As of the above mechanism, but at 
  appr_1: for * => +, for / => -;
  appr_2: for * => + */
};

MINUS_OF_ARRAY_EXCEPT_SELF = () => {
  /* As of the above mechanism, but at 
  appr_1: for * => -, for / => +;
  appr_2: for * => - */
};

DIVISION_OF_ARRAY_EXCEPT_SELF = () => {
  /* As of the above mechanism, but at 
  appr_1: for * => /, for / => *;
  appr_2: for * => / */
};

REVERSE_STRING_EXCEPT_SPECIAL_CHAR = () => {
  let str = [..."ab-c+d>e<f>>>ghij"];
  let splCharArr = [];
  let filterAplha = "";
  str.map((char, i) => {
    if (char >= "a" && char <= "z") {
      filterAplha += char;
    } else {
      const Obj = {
        key: char,
        index: i,
      };
      splCharArr.push(Obj);
    }
  });
  filterAplha = filterAplha.split("").reverse().join("").replace(/,/g, "");
  splCharArr.forEach(({ key, index }) => {
    filterAplha = filterAplha.slice(0, index) + key + filterAplha.slice(index);
  });
  console.log("Reversed Str => ", filterAplha);
};

// REVERSE_STRING_EXCEPT_SPECIAL_CHAR();

OBJ_DEEP_COPY = (source) => {
  var target = {};

  // Getting source object keys
  const keys = Object.keys(source);
  keys.forEach((key) => {
    // Checking if current value is an object
    if (typeof source[key] === "object") {
      // Calling our function recursively for current value
      target[key] = OBJ_DEEP_COPY(source[key]);
    } else {
      // Directly assigning the value
      target[key] = source[key];
    }
  });

  console.log(target);
  return target;
};

// OBJ_DEEP_COPY({ a: 'a' });
// OBJ_DEEP_COPY({ b: 'b', c: { d: 'd', e: { f: 'f' } } });
// OBJ_DEEP_COPY({});

CASE_SPECIFIC_STR_SORT = (str = "") => {
  /*
    Given string str consisting of uppercase and lowercase characters. 
    The task is to sort uppercase and lowercase characters separately such that
    if the ith place in the original string had an uppercase character, 
    then it should not have a lowercase character after being sorted and vice versa.
  */
  let smallCase = [];
  let capitalCase = [];
  let res = "";

  [...str].forEach((alpha, idx) => {
    let code = str.charCodeAt(idx);
    if (code >= 65 && code <= 90) capitalCase.push(alpha);
    if (code >= 97 && code <= 122) smallCase.push(alpha);
  });
  smallCase.sort();
  capitalCase.sort();
  [...str].forEach((alpha, idx) => {
    let code = str.charCodeAt(idx);
    if (code >= 65 && code <= 90) res = res + capitalCase.shift();
    if (code >= 97 && code <= 122) res = res + smallCase.shift();
  });
  console.log(`${str} : ${res}`);
};

// CASE_SPECIFIC_STR_SORT("gEeksfOrgEEkS"); //eEfggkEkrEOsS
// CASE_SPECIFIC_STR_SORT("eDefSR"); //eDefRS

MaxDiffBetTwoEle = (eles = []) => {
  let min = eles[0],
    max = eles[0];
  [...eles].forEach((ele) => {
    if (ele - min > max) max = ele - min;
    else if (ele < min) min = ele;
  });
  console.log("Maximum Diff. btw. ele.s is: ", max);
};

// MaxDiffBetTwoEle([20, 18, 45, 78, 3, 65, 55]);
// MaxDiffBetTwoEle([20, 8, 45, 78, 3, 65, 55]);

InfiniteSum = (...rest) => {
  let nums = [],
    sum = 0;
  rest.forEach((num) => {
    if (!isNaN(num) && typeof num !== "object") nums.push(parseInt(num));
  });
  sum = nums.reduce((acc, ele) => (acc += ele), 0);
  console.log(sum);
};

// InfiniteSum(1, 2, 3, "4", null, undefined);
// InfiniteSum(10, 20, NaN, [1, 2, "4"], "1", { 1: "1" });

RepeatStr = (str = "", num = 0) => {
  // sol. 1 - Build-in method
  // if (num < 0) return "";
  // return str.repeat(num);

  //sol. 2 - Recursion
  if (num < 0) return "";
  if (num == 1) return str;
  return str + RepeatStr(str, num - 1);
};

// console.log(RepeatStr("abc", 2));
// console.log(RepeatStr("*", 9));
// console.log(RepeatStr("xyz", -2));

TruncateStr = (str = "", num = 0) => {
  if (num >= str?.length) return str;
  if (num <= 3) return str?.slice(0, num) + "...";
  return str?.slice(0, num - 3) + "...";
};

// console.log(TruncateStr("A-tiket a-tisket a green and yellow basket", 11));
// console.log(TruncateStr("A-tiket a-tisket a green and yellow basket", 2));
// console.log(TruncateStr("A-tiket a-tisket a green and yellow basket", 4));
// console.log(TruncateStr("A-tiket a-tisket a green and yellow basket", 1100));

ChunkArr = (arr = [], size = 0) => {
  let chuks = [];
  while (arr.length) {
    chuks.push(arr.splice(0, size));
  }
  return chuks;
};

console.log(ChunkArr([1, 2, 3, 4, 5], 2));
console.log(ChunkArr([1, 2, 3, 4, 5], 3));
console.log(ChunkArr([1, 2, 3, 4, 5, 6], 2));
