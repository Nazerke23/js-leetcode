//https://leetcode.com/problems/longest-common-prefix/description/

/* 
Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings. */

var longestCommonPrefix = function (arr) {
  //flower
  //flow
  //flight
  let prefix = "";
  if (arr.length === 0) return prefix;

  for (let i = 0; i < arr[0].length; i++) {
    //flower
    let char = arr[0][i];
    //f
    for (let j = 0; j < arr.length; j++) {
      //flower flow flight
      if (arr[j][i] !== char) return prefix;
    }
    prefix += char;
  }

  return prefix;
};

longestCommonPrefix(["flower", "flow", "flight"]);
