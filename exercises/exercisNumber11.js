const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str = 'Семья состоит из: ';

    if (arr.length > 0) {
        for (let key in arr) {
            str += `${arr[key]} `
        }
    } else {
        str = 'Семья пуста';
    }
    return str;
}

console.log(showFamily(family));


const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach((city) => {
        console.log(`${city.toLowerCase()}\n`);
    });
}

standardizeStrings(favoriteCities)