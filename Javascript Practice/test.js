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


let otherMonsters = {
    name: "hairy monster",
    powers: "Very hairy",
    alive: true
};

console.log(otherMonsters);
console.log(otherMonsters.alive);

otherMonsters.powers = "being really smell";
console.log(otherMonsters);

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

const monsters = {
    monster1: {
        name: "big monster",
        life: 500,
        attack: 23
    },
    monster2: {
        name: "small monster",
        life: 300,
        attack: 15
    },
    monster3: {
        name: "medium monster",
        life: 400,
        attack: 18
    }
};


if (monsters.monster1.attack > monsters.monster2.attack) {
    console.log(`${monsters.monster1.name} attacks harder than ${monsters.monster2.name}`);
} else {
    console.log(`${monsters.monster2.name} attacks harder than ${monsters.monster1.name}`);
}

let monster1Attack = monsters.monster1.attack;
let monster2Attack = monsters.monster2.attack;
let monster1Life = monsters.monster1.life;
let monster2Life = monsters.monster2.life;
const monster1 = monsters.monster1.name;
const monster2 = monsters.monster2.name;

if (monster1Attack > monster2Life) {
    console.log(`${monster2} is dead`);
} else {
    console.log(`${monster1} didn't hit as hard and failed to kill ${monster2}.`)
}


