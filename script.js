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