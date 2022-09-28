const compress = (str) => {
    let result = '';

    let i = 0;
    let j = 0;

    while (j <= str.length) {
        if (str[i] === str[j]) {
            j++;
        } else {
            const count = j - i
            if(count === 1) {
                result += str[i];
                i = j;
            } else {
                result += count + str[i];
                i = j;
            }
        }
    }

    return result;
}

let string = 'aaaaaabbbssscccce'

console.log(compress(string))