const compress = (str) => {
    let result = [];

    let i = 0;
    let j = 0;

    while (j <= str.length) {
        if (str[i] === str[j]) {
            j++;
        } else {
            const count = j - i;
            if (count === 1) {
                result.push(str[i]);
                i = j;
            } else {
                result.push(count, str[i]);
                i = j;
            }
        }
    }
    return result.join('')
}

console.log(compress('aaadddslloooodddkkkki'))