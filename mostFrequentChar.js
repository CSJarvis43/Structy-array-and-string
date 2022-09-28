// Charlie's initial solution

const mostFrequentChar = (str) => {

    let fq = {};
    let max = -Infinity;
    let result = ''

    for (let char of str) {
        fq[char] = (fq[char] || 0) + 1;
    }

    for (let key in fq) {
        if (fq[key] > max) {
            result = key;
            max = fq[key];
        }
    }

    return result;
}

console.log(mostFrequentChar('bookkeeper'))


// Structy solution

const mostFrequentCharStructy = (s) => {
    const count = {};

    for (let char of s) {
        if (!(char in count)) {
            count[char] = 0;
        }

        count[char] += 1;
    }

    let best = null;
    for (let char of s) {
        if(best === null || count[char] > count[best]) {
            best = char;
        }
    }

    return best
}