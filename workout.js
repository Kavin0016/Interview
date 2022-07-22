/*Quesion 1:
Given an array of integers ar, a lucky integer is an integer which has a frequency (how many times an
element occurs within the aray) in the array equal to its value.

Return a lucky integer in the array. If there are multiple lucky integers return the largest of them. If there is
no lucky integer return-1.

Example 1:
Input: arr = [2,2,3,4]
Output: 2
Explanation:
The only lucky number in the array is 2 because it oocurs twice within the array which is equal to its value 2.

Example 2:
Input: arr = [1,2,2,3,3,3]
Output: 3
Explanation:
1, 2 and 3 are all lucky numbers and the largest is retumed.

Example 3:
Input: arr [2,2,2,3,3]
Output:-1
0

Explanation:
There are.no luckv numbers in the aray becayse 2 oceurs 3 times and 3 occurs twice in the arrav
*/

const luckyNumber = (arr) => {
  if (arr.length == 0) return -1;
  if (arr.length == 1) {
    if (arr[0] == 1) return arr[0];
    else return -1;
  }
  if (arr.length == 2) {
    if (arr[0] == arr[1]) return arr[0];
    else return -1;
  }

  let freqCollector = {};
  for (let num of arr) {
    freqCollector[num] ? freqCollector[num]++ : (freqCollector[num] = 1);
  }
  let nums = Object.keys(freqCollector);
  let frequencies = Object.values(freqCollector);
  let lucky = [-1];
  for (let num in nums) {
    if (frequencies[num] == nums[num]) lucky.push(frequencies[num]);
  }
  if (lucky.length == 1) return lucky[0];
  else return Math.max(...lucky);
};

// console.log(luckyNumber([1, 2, 2, 3, 3]));
// console.log(luckyNumber([2, 2, 3, 4]));
// console.log(luckyNumber([1, 2, 2, 3, 3, 3]));
// console.log(luckyNumber([2, 2, 2, 3, 3]));

/*Quesion 2:
Find one extra character in a string Given two strings which are of lengths n and n+1. The second string contains all the
characters of the first string. but there is one extra character. Your task is to find the extra character in the second string.

Input : string strA = "abcd"
string strB = "cbdae";

Output e
string B contain all the element
there is a one extra character which is e

Input: string strA = "kxml";
string strB = "klxm1";
Output: 1
string B contain all the element
there is a one extra character which is l
*/

const findExtraChar = (str1, str2) => {
  let str1Obj = {};
  let str2Obj = {};

  for (let char of str1) {
    str1Obj[char] ? str1Obj[char]++ : (str1Obj[char] = 1);
  }

  for (let char of str2) {
    str2Obj[char] ? str2Obj[char]++ : (str2Obj[char] = 1);
  }
  let result;
  for (let idx in str2Obj) {
    if (str1Obj[idx] !== str2Obj[idx]) result = idx;
  }
  console.log("Extra Char is =>", result);
};

findExtraChar("abcd", "cbdae");
findExtraChar("kxml", "klxml");
findExtraChar("", "klxm2");
