const uncompress = (str) => {
    let numbers = '1234567890';

    let result = '';

    let i = 0;
    let j = 0;

    while (j < str.length) {
        if (numbers.includes(str[j])) {
            j++;
        } else {
            const num = parseInt(str.slice(i, j))
            for (let count = 0; count < num; count++) {
                result += str[j];
            }
            j++;
            i = j;
        }
    }

    return result



}

console.log(uncompress('2i3j14c'))