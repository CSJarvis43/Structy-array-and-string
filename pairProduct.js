// Charlie's solution

const pairProduct = (nums, target) => {


    const prevNums = {};

    for (let i = 0; i < nums.length; i++) {
        if (target % nums[i] === 0) {
            const num = nums[i];
            const complement = target / num;

            if (prevNums[complement] >= 0) {
                return [prevNums[complement], i];
            } else {
                prevNums[num] = i;
            }
        }
    }

    
}



console.log(pairProduct([2, 3, 5, 4, 1], 8))

