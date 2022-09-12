let numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', ''); // мы же работаем с числами!

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let  a = prompt('Один из последних просматренных фильмов?', ''),
     b = prompt('На сколько оцените его?', ''),
     c = prompt('Один из последних просматренных фильмов?', ''),
     d= prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

// Построение пирадмика из здездочек
//
//     const lines = 5;
//     let result = '';
//
//     for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j <= lines - i; j++) {
//     result += ' ';
// }
//     for (let j = 0; j < i * 2 + 1; j++) {
//     result += "*";
// }
//     result += '\n';
// }
//     console.log(result);

