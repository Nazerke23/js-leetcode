//https://www.youtube.com/watch?v=lRGoZyjkZ3U
//https://leetcode.com/problems/single-number/description/

var singleNumber = function (nums) {
  const ht = {};
  //{2: x, 1: x}

  for (let i = 0; i < nums.length; i++) {
    ht[nums[i]] = ht[nums[i]] + 1 || 1;
  }

  for (let num of nums) {
    if (ht[num] === 1) {
      return num;
    }
  }
};

//ht[4] = 0;
//ht[9] = 1;

console.log(singleNumber([2, 2, 1]));
console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([1]));
