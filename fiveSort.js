// Charlie's solution

const fiveSort = (nums) => {
    
    let i = 0;
    let j = nums.length - 1;

    while (i <= j) {
        if (nums[j] === 5) {
            j--;
        } else if (nums[i] === 5) {
            const rightIndex = nums[j];
            nums[i] = rightIndex;
            nums[j] = 5;
        } else {
            i++;
        }
    }

    return nums;
}

console.log(fiveSort([1,5,2,5,2,3,4,5,5]))