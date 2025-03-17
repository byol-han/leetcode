/*
You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

 Example 1:

Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75

Example 2:

Input: nums = [5], k = 1
Output: 5.00000
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  // 초기 k개의 합 구하기
  let maxSum = nums.slice(0, k).reduce((sum, num) => sum + num, 0);
  let currentSum = maxSum;

  // 슬라이딩 윈도우로 최대 합 찾기
  for (let i = k; i < nums.length; i++) {
    currentSum += nums[i] - nums[i - k]; // 이전 값 빼고, 새로운 값 추가
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum / k; // 평균 반환
};
