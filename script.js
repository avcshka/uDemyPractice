let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели?', '')

        while (personalMovieDB.count === '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просматренных фильмов?', ''),
                b = prompt('На сколько оцените его?', '');

            if (a != null && b != null && a !== '' && b !== '' && a.length !== 50) {
                console.log('Сработало условие a && b НЕ - done')
                personalMovieDB.movies[a] = b;
            } else {
                console.log('error')
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов")
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель")
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман")
        } else {
            console.log("error")
        }
    },
    showMyDB: function showMyDB(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        personalMovieDB.privat
            ? personalMovieDB.privat = false
            : personalMovieDB.privat = true
    },
    writeYourGenres: function () {
        // мой вариант
        // if (genres === null || genres === undefined) {
        //     personalMovieDB.genres = [];
        // } else {
        //     for (let i = 1; i <= 3; i++) {
        //         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
        //     }
        //     genres.forEach((gen, key) => {
        //         console.log(`Любимый жанр ${key + 1} - это ${gen}`)
        //     });
        // }

        // второй вариант
        // for (let i = 1; i <= 3; i++) {
        //     let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
        //
        //     if (genre === '' || genre === null) {
        //         console.log('Вы ввели некорректные данные или не ввели их вообще');
        //         i--;
        //     } else {
        //         personalMovieDB.genres[i - 1] = genre;
        //     }
        // }
        // personalMovieDB.genres.forEach ((item, i) => {
        //     console.log(`Любимый жанр ${i + 1} - это ${item}`)
        // })

        // третий вариант
        for (let i = 1; i < 2; i++) {
            let genres = prompt(`Введите ваши любимые жанры через запятую`, '').toLowerCase();

            if (genres === null || genres === '') {
                console.log('Вы ввели некорректные данные или не ввели их вообще');
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }
            personalMovieDB.genres.forEach((item, i) => {
                console.log(`Любимый жанр ${i + 1} - это ${item}`)
            })
        }
    },
};