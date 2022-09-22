// exercises N1. Объем и Площадь поверхности куба

function calculateVolumeAndArea (a) {
    if(typeof (a) !== 'number' || a < 0 || !Number.isInteger(a)){
        return('При вычислении произошла ошибка');
    }
    let volume = a * a * a;
    let area = 6 * (a * a);
    return (`Объем куба: ${volume}, площадь всей поверхности: ${area}`);
}

calculateVolumeAndArea(5);

// exercises N1. Номер купе

function getCoupeNumber (seatNumber) {
    if(typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)){
        return "Ошибка. Проверьте правильность введенного номера места";
    }
    if (seatNumber < 1 || seatNumber > 36) {
        return "Таких мест в вагоне не существует";
    }
    return Math.ceil(seatNumber / 4);
}

getCoupeNumber(2);
