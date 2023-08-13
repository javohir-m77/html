'use strict';

  
const numberOfSeries = +prompt("Nechta serial ko'rdingiz?    ")

if (numberOfSeries === null) {
    for ( numberOfSeries; i === 9; ){
        numberOfSeries = +prompt("Katak bo'shku bratim");

    }
}

if(numberOfSeries < 5) {
    console.log("Kam serial ko'ribsiz")
}else if( numberOfSeries>=5 && numberOfSeries<=10) {
    console.log("Siz klassik tamoshabin ekansiz")
}else {
    console.log("Siz serialchi zvezda ekansiz");
}


let seriesDB = {
    count: numberOfSeries,
    series : {},
    actors : {},
    genres : [],
    private : false,

}


for (let i = 0; i < 2 ; i++){
    const  questFilm = prompt("Oxirgi serialingiz:");

    const questRate = prompt("Film uchun bahoyingiz:");

    if( questFilm != null && questRate != null && questFilm != "" && questRate != ""){
        seriesDB.series[questFilm] = questRate;
        console.log("done");
    }else {
        console.log("error");
        i--;
    }
    
}





console.log(seriesDB.series)
