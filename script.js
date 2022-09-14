let numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', ''); // мы же работаем с числами!

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просматренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a !== '' && b !== '' && a.length !== 50) {
        console.log('done')
        personalMovieDB.movies[a] = b;
    } else {
        console.log('error')
        i--;
    }
}

if (personalMovieDB.count < 10){
    console.log("Просмотрено довольно мало фильмов")
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log("Вы классический зритель")
} else if (personalMovieDB.count >= 30){
    console.log("Вы киноман")
} else {
    console.log("error")
}

console.log(personalMovieDB);
