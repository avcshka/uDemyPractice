// exercises point 1. minutes to hours and minutes
function getTimeFromMinutes(minutesTotal) {
    if (typeof (minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
        console.log('Ошибка, проверьте данные')
    }

    let hours = Math.ceil(minutesTotal / 60);
    let minutes = minutesTotal % 60;

    let hoursStr = '';

    switch (hours) {
        case 0:
            hoursStr = 'часов';
            break;
        case 1:
            hoursStr = 'час';
            break;
        case 2:
        case 3:
        case 4:
            hoursStr = 'часа';
            break;
        default:
            hoursStr = 'часов';
    }
    console.log(`Это ${hours} ${hoursStr} и ${minutes} минут`)
}

getTimeFromMinutes(240);

// exercises point 2.
function findMaxNumber (a,b,c,d) {
    if (typeof (a) !== 'number' ||
        typeof (b) !== 'number' ||
        typeof (c) !== 'number' ||
        typeof (d) !== 'number') {
        return 0;
    } else {
        return Math.max(a,b,c,d);
    }
}