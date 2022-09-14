// ДЗ после 27 урока

function sayHello(name) {
    return `Hello, ${name}`
}

console.log(sayHello('Артем'))

function returnNeighboringNumbers(num) {
    return [num - 1, num, num + 1]
}

console.log(returnNeighboringNumbers(5));

function getMathResult(num, repeat) {
    if (typeof(repeat) != 'number' || repeat <= 0) {
        return num;
    }

    let result = '';

    for (let i = 1; i <= repeat; i++) {
        if (i == repeat) {
            result += `${num * i}`;
        } else {
            result += `${num * i}---`;
        }
        console.log(result);
    }
    return result;
}

console.log(getMathResult(5, 3));