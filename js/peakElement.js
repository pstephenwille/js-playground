/*
* Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element and your function should return the index number 2.
* */

var findPeakElement = function(nums) {
    if(nums.length === 1) return 0;

    let peakIndex = 0;
    let peakValue = 0;
    let currIndex = 0;
    let peakIndexes = [];

    for(; currIndex < nums.length; currIndex++){
        const currPeak = nums[currIndex];

        if(currPeak > peakValue) {
            peakValue = currPeak;
            peakIndex = currIndex;
        }

        if(currPeak < peakValue) {
            peakIndexes.push(peakIndex);
        }

        if(currIndex + 1 === nums.length){
            return peakIndex;
        }
    }

    console.log(peakIndexes);

    return peakIndexes.pop();

};

console.log(findPeakElement([1, 2]));
