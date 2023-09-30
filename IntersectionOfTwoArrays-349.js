//https://leetcode.com/problems/intersection-of-two-arrays/
//https://leetcode.com/problems/intersection-of-two-arrays/submissions/988886223/

// let array = [];
// const intersection = function (nums1, nums2) {
//   for (let i = 0; i < nums1.length; i++) {
//     for (let j = 0; j < nums2.length; j++) {
//       if (nums1[i] === nums2[j]) {
//         array.push(nums1[i]);
//       }
//     }
//   }

//   return [...new Set(array)];
// };

//1.Don't use two dimential array
//2.Try to use built in array menthods

const intersection = function (nums1, nums2) {
  let result = [];

  for (let i = 0; i < nums1.length; i++) {
    if (nums2.includes(nums1[i])) {
      if (!result.includes(nums1[i])) result.push(nums1[i]);
    }
  }

  return result;
};

const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];
console.log(intersection(nums1, nums2));
