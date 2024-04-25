let sumScoreDolphins = 96 + 108 + 89;
let sumScoreKoalas = 88 + 91 + 110;

let averageDolphinScore = sumScoreDolphins / 3;
let averageScoreKoalas = sumScoreKoalas / 3;

let scoreDolphins = averageDolphinScore;
let scoreKoalas = averageScoreKoalas;

console.log(scoreDolphins);
console.log(scoreKoalas);

if (scoreDolphins > scoreKoalas) {
    console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins) {
    console.log("Koalas win the trophy");
} else {
    console.log("Both win the trophy");
}



