let firstName = "Damian";

console.log(firstName);

const namesofPeople = ['Paul', 'Danny', 'Roger', 'Bob', 'Person Thing'];

console.log(namesofPeople);

for (i = 0; i <= 5; i++) {
    console.log(i);
}

namesofPeople.push('Dale');

console.log(namesofPeople);

namesofPeople.forEach(function (namesofPeople) {
    console.log(namesofPeople);
})



function sayHello(name) {
    console.log("Hello " + name + ".");
}

sayHello("Damian");


let monsters = {
    name: "hairy monster",
    powers: "Very hairy",
    alive: true
};

console.log(monsters);
console.log(monsters.alive);

monsters.powers = "being really smell";
console.log(monsters);

const country = "USA";
const continent = "North America";
let population = 333033000;
const isIsland = true;
const language = "English";

console.log(country);
console.log(continent);
console.log(population);
console.log(isIsland);
console.log(language);

console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);
console.log(typeof isIsland);
console.log(typeof language);

let halfofcountry = population / 2;
console.log(halfofcountry);

let increasedPopulation = population + 1;
console.log(increasedPopulation);

const description = `${country} is in ${continent} and it has a population of ${population} people that speak ${language}.`;

console.log(description);

let finland = 6000000;

if (population > finland) {
    console.log(country + " has a higher population than Finland.");
} else {
    console.log(country + " doesn't have a higher population than Finland.")
}

console.log("No Conversion");
console.log('9' - '5'); // -> ?
console.log('19' - '13' + '17'); // -> ?
console.log('19' - '13' + 17); // -> ?
console.log('123' < 57); // -> ?
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> ?

console.log("Conversion");
console.log(Number('9') - Number('5')); // -> ?
console.log(Number('19') - Number('13') + Number('17')); // -> ?
console.log(Number('19') - Number('13') + 17); // -> ?
console.log(Number('123') < 57); // -> ?
console.log(5 + 6 + Number('4') + 9 - 4 - 2); // -> ?

