const someString = 'This is some strange string';

function reverse(str) {
    let result = '';
    if (typeof(str) === 'string') {
        for (let i = str.length - 1; i >= 0; i--) {
            result += str[i];
        }
    } else {
        result = 'Ошибка'
    }
    return result;
}

console.log(reverse(someString))

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = '';
    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты: \n';
        arr.forEach((curr) => {
            if (curr !== missingCurr) {
                str += `${curr}\n`;
            }
        })

    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === missingCurr) {
    //         continue;
    //     }
    //     str += `${arr[i]}\n`;
    // }

    return str;
}

console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CYN'));