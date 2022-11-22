const n = 'sdsds';

function factorial (n) {
    if (typeof(n) !== "number" || !Number.isInteger(n)) {
        return `Выведено: ${n} = ${typeof(n)}`;
    }

    if (n >= 1) {
        return n * factorial(n - 1);
    } else {
        return 1;
    }
}

console.log(factorial(n));