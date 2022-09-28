// Charlie's initial solution

function pairSum(numbers, targetSum) {
    
    let previous = {};

    for (let i = 0; i < numbers.length; i++) {
        const complement = targetSum - numbers[i];
        if (previous[complement] >= 0) {
            return [previous[complement], i];
        } else {
            previous[numbers[i]] = i;
        }
    }
}

console.log(pairSum([4, 7, 9, 2, 5, 1], 3))

// Structy solution

const pairSumStructy = (numbers, targetSum) => {
    const previousNums = {};

    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i];
        const complement = targetSum - num;

        if (complement in previousNums) {
            return [i, previousNums[complement]];
        }
        
        previousNums[num] = i;
    }
}