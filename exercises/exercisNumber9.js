function fib(num) {
    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return "";
    }

    let result = '';
    let firstNumber = 0;
    let secondNumber = 1;

    for (let i = 0; i < num; i++) {
        if (i + 1 === num) {
            result += `${firstNumber}`;
            // Без пробела в конце
        } else {
            result += `${firstNumber} `;
        }

        let thirdNumber = firstNumber + secondNumber;
        firstNumber = secondNumber;
        secondNumber = thirdNumber;
    }
    console.log(result);
    // Мой вариант
    // if (typeof (num) !== 'number' || num < 0 || !Number.isInteger(num)) {
    //     console.log('empty');
    // }
    //
    // let firstNumber = '';
    // let secondNumber = '';
    // let thirdNumber = '';
    //
    // for (let i = 0; i < num; i++) {
    //     for (let j = 0; j <= i; j + i){
    //         firstNumber += secondNumber;
    //     }
    //     for (let j = 1; j <= i; j + i){
    //         secondNumber = firstNumber;
    //     }
    //     thirdNumber = firstNumber + secondNumber
    //     console.log(`${thirdNumber} `);
    // }
}



// fib(7) => ''0 1 1 2 3 5 8"

fib(4)