'use strict';

const username = prompt("Username kiriting");   
const numberOfSeries = prompt("Nechta serial ko'rdingiz?    ")

let seriesDB = {
    count: numberOfSeries,
    series : {},
    actors : {},
    genres : [],
    private : false,

}
const  questFilm = prompt("Oxirgi serialingiz:");
const questRate = prompt("Film uchun bahoyingiz:");

seriesDB.series[questFilm] = questRate;


console.log(seriesDB.series)
