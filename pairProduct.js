// Charlie's solution

// const pairProduct = (nums, target) => {


//     const prevNums = {};

//     for (let i = 0; i < nums.length; i++) {
//         if (target % nums[i] === 0) {
//             const num = nums[i];
//             const complement = target / num;

//             if (prevNums[complement] >= 0) {
//                 return [prevNums[complement], i];
//             } else {
//                 prevNums[num] = i;
//             }
//         }
//     }

    
// }

// Slight refactor

const pairProduct = (nums, target) => {


    const prevNums = {};

    for (let i = 0; i < nums.length; i++) {
        if (target % nums[i] === 0) {
            const num = nums[i];
            const complement = target / num;

            if (complement in prevNums) {
                return [prevNums[complement], i];
            } else {
                prevNums[num] = i;
            }
        }
    }

    
}

console.log(pairProduct([2, 3, 5, 4, 1], 8))

//Structy solution

const pairProductStructy = (numbers, targetProduct) => {
    const previousNums = {};

    for (let i = 0; i < numbers.length; i ++) {

        const num = numbers[i];
        const complement = targetProduct / num;

        if (complement in previousNums) {
            return [i, previousNums[complement]];
        }



        previousNums[num] = i;
    }
}

