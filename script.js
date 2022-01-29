"use strict";
let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

// if(numberOfFilms.str.length === 0){
//      numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
// }
// else if (numberOfFilms.str.length >50){
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
// }
// else{

// }

// for (let i = 0; i < 2; i++) {
//     let a = prompt('Один из просмоттренных фильмов?', ''),
//         b = prompt('на сколько оцените его?', '');
//     if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         i--;
//         console.log('er');
//     }

// }
let num = 0;
while(num < 2){
    num++;
     let a = prompt('Один из просмоттренных фильмов?', ''),
        b = prompt('на сколько оцените его?', '');
    if (a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        num--;
        console.log('er');
    }

}
// do{
//     num++;
//     let a = prompt('Один из просмоттренных фильмов?', ''),
//        b = prompt('на сколько оцените его?', '');
// }
// while(num < 2);




if (personalMovieDB.count < 10){
    console.log("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка");
}



console.log(personalMovieDB);