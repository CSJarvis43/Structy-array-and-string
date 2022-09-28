function anagrams(str1, str2) {
    if (str1.length !== str2.length) return false

    let fq1 = {}
    let fq2 = {}

    for (let char of str1) {
        fq1[char] = (fq1[char] || 0) + 1
    }

    for (let char of str2) {
        fq2[char] = (fq2[char] || 0) + 1
    }
    
    for (let key in fq1) {
        if (fq1[key] !== fq2[key]) {
            return false
        }
    }

    return true
}


console.log(anagrams('monkeyswrite', 'newyorktimes'))