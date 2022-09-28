// Charlie's brute force attempt, results in timeout in one test case

// function intersection (a, b) {
//     let resArr = [];

//     for (let i = 0; i < a.length; i++) {
//         for (let j = 0; j < b.length; j++) {
//             if (a[i] === b[j]) {
//                 resArr.push(a[i])
//             }
//         }
//     }
//     return resArr
// }

// Charlie's better solution

const intersection = (a, b) => {

    let fq = {};
    let result = [];

    for (let val of a) {
        fq[val] = 1;
    }

    for (let val of b) {
        if (val in fq) {
            result.push(val);
        }
    }

    return result;
}

// console.log(intersection([4,2,1,6], [3,6,9,2,10]))

// Charlie's solution incorporating sets


// const intersectionStructy = (a, b) => {
//     const result = [];
//     const items = new Set();

//     for (let val of a) {
//         items.add(val);
//     }
    
//     for (let val of b) {
//         if (items.has(val)) {
//             result.push(val);
//         }
//     }

//     return result;

// }

// Structy solution

const intersectionStructy = (a, b) => {
    const result = [];
    const items = new Set();

    for (let item of a) {
        items.add(item);
    }

    for (let element of b) {
        if (items.include(element)) {
            result.push(element);
        }
    }

    return result;

}

console.log(intersectionStructy([4,2,1,6], [3,6,9,2,10]))



// JS sets demo

// const mySet = new Set();
// mySet.add(3);
// mySet.add(5);
// mySet.add(3);

// console.log(mySet);
// console.log(mySet.has(3));
// console.log(mySet.has(12));