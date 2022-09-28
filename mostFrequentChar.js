// Charlie's initial solution

const mostFrequentChar = (str) => {

    let fq = {};
    let max = -Infinity;
    let result = ''

    for (let char of str) {
        fq[char] = (fq[char] || 0) + 1
    }

    for (key in fq) {
        if (fq[key] > max) {
            result = key;
            max = fq[key];
        }
    }

    return result
}

console.log(mostFrequentChar('bookkeeper'))