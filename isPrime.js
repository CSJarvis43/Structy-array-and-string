const isPrime = (x) => {
    if (n < 2) return false

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false
        }
    }

    return true
}