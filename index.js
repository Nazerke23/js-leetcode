/* 
`commonSuf(["deforestation", "citation", "conviction", "incarceration"]) // "tion"
commonSuf(["nice", "ice", "baby"]) // ""`
 */

//deforestation  noitatserofed
//     citation  noitatic
//   conviction  noitcivnoc
//incarceration  noitarecracni

//get new array with reversed words

//loop threoght first element
//choose char
//loop through every element
//if not = then return prefix
//add char to prefix

const reverseString = (string) => string.split("").reverse().join("");

function commonSuf(array) {
  const newArray = [];
  //reverse every words in an array
  for (let word of array) {
    newArray.push(reverseString(word));
  }

  let prefix = "";

  for (let i = 0; i < newArray[0].length; i++) {
    let char = newArray[0][i];

    for (let j = 0; j < newArray.length; j++) {
      if (newArray[j][i] !== char) {
        return reverseString(prefix);
      }
    }

    prefix += char;
  }

  let result = reverseString(prefix);

  return result;
}

// console.log(commonSuf(["nice", "ice", "baby"]));
console.log(
  commonSuf(["deforestation", "citation", "conviction", "incarceration"])
);

//

//citation
//deforestation
//conviction
//incarceration
// function commonSuf(arr) {
//   // your code here
//   let result = 0;
//   let count = 0;

//   for (let i = arr[0].length - 1; i > 0; i--) {
//     //i=7
//     count = 0;
//     for (let j = 1; j < arr.length; j++) {
//       //j=1
//       //if n=== (defores).substr(-(1, 1))
//       if (arr[0][i] === arr[j].substr(-(arr[0].length - 1 - i + 1), 1)) {
//         count++;
//       }
//     }
//     if (count === arr.length - 1) {
//       result++;
//     }
//   }
//   if (result === 0) {
//     return "";
//   }
//   return arr[0].slice(-result);
// }
