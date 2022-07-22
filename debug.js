PARANTHESIS_CHECK_NEW = (str) => {
  console.log(`${str} =>`);
  let closeMap = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  let stack = [];
  for (let char of str) {
    if (char == "{" || char == "[" || char == "(") {
      stack.push(char);
      console.log("char =>", char, stack);
    } else {
      if (closeMap[stack.pop()] !== char) return false;
    }
  }
  return stack.length ? false : true;
};

console.log(PARANTHESIS_CHECK_NEW("{}()[]"));
console.log(PARANTHESIS_CHECK_NEW("{}()]"));
console.log(PARANTHESIS_CHECK_NEW("()"));
console.log(PARANTHESIS_CHECK_NEW("(("));
