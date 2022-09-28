// Charlie's brute force attempt, results in timeout in one test case

function intersection (a, b) {
    let resArr = [];

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (a[i] === b[j]) {
                resArr.push(a[i])
            }
        }
    }
    return resArr
}

console.log(intersection([4,2,1,6], [3,6,9,2,10]))