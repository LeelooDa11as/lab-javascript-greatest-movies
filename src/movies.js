const movies = require('../src/data');

//import { movies } from ".data.js";

// Iteration 1: All directors? - Get the array of all directors.

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

  if (moviesArray == "")
    return (null);
  const allDirectors = moviesArray.map(movie => movie.director);
  return(allDirectors);
}

//console.log(getAllDirectors(movies));

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {

  if (moviesArray == [])
    return (null);
  const dramaSpielberg = moviesArray.filter (movie => movie.director == 'Steven Spielberg' && movie.genre.includes("Drama"));
  return (dramaSpielberg);
}
//console.log(howManyMovies(movies));

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

  if (moviesArray == "")
    return (null);
  const totalScore = moviesArray.reduce(function(accumulator, currentValue){
    if(currentValue.score != "")
      return accumulator + currentValue.score;
  }, 0);
  return ((totalScore / moviesArray.length).toFixed(2));
}
//console.log (scoresAverage(movies));

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

  if (moviesArray == [])
    return (null);
  const allDrama = moviesArray.filter(movie => movie.genre.includes("Drama"));

  const totalScore = allDrama.reduce(function(accumulator, currentValue){
    return accumulator + currentValue.score;
  }, 0);

  return (totalScore / allDrama.length).toFixed(2);

}
//console.log(dramaMoviesScore(movies));

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  if (moviesArray == "")
    return (null);
  const newArray = structuredClone(moviesArray);

  newArray.sort(function(a, b) {
    if (a.year < b.year) return -1
    if (a.year < b.year) return 1
    if (a.year == b.year){
      if (a.title < b.title) return -1
      if (a.title < b.title) return 1 
    }

  },0);

  return (newArray);
}

//console.log(orderByYear(movies));


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  if (moviesArray == [])
    return (null);
  const newArray = [];
  for(let i = 0; i < moviesArray.length; i++){
    newArray.push(moviesArray[i].title);
  };
  
  newArray.sort(function(a, b){
    if(a < b) return -1;
    if(a > b) return 1;
    if (a == b) return 0;
  });

  return (newArray.slice(0, 20));
}

//console.log(orderAlphabetically(movies));

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  if (moviesArray == "")
    return (null);
  
  const newArray = structuredClone(moviesArray);

  for (let i = 0; i < newArray.length; i++){
    let duration = newArray[i].duration;
    let [h, min=0] = duration.split(" ");
    if (h.slice(-1) != 'h'){
      min = h;
      h = '0';  
    }
    h = parseFloat(h);
    min = parseFloat(min);
    newArray[i].duration = (h * 60 + min).toString() + 'min';
  }
  return (newArray);
}

//console.log(turnHoursToMinutes(movies));

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}

