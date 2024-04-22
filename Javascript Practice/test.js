// Most of this is just refreshing my memory on what I've learned about in Javascript in the past and reminding myself how to do certain things...

// Playing with primitive variables assigning firstName to "Damian" and printing it to the console.
let firstName = "Damian";

console.log(firstName);

// Making a list to test a non-primitive datatype and printing it to a console.
const namesofPeople = ['Paul', 'Danny', 'Roger', 'Bob', 'Person Thing'];

console.log(namesofPeople);

// Testing a for loop to print 1-5.
for (i = 0; i <= 5; i++) {
    console.log(i);
}

// Adding Dale to the list of namesofPeople and then printing the whole list with Dale included.

namesofPeople.push('Dale');

console.log(namesofPeople);

// Using the forEach function to go down the list of names in namesofPeople being printed to the console.
namesofPeople.forEach(function (namesofPeople) {
    console.log(namesofPeople);
})

// Made a function to sayHello with a name parameter. Then calling the function.
function sayHello(name) {
    console.log("Hello " + name + ".");
}

sayHello("Damian");

// Made an object called otherMonsters even though it was originally monsters until I made a new one with more than one monster. 

// This one has three keys and three values and I just call the object itself and then go more specifically to see if the monster is still alive or not using a boolean datatype. 

let otherMonsters = {
    name: "hairy monster",
    powers: "Very hairy",
    alive: true
};

console.log(otherMonsters);
console.log(otherMonsters.alive);

// here I test out changing the value of hairyMonster's powers which is being really smelling and then print the object to the console to verify the value changed.

otherMonsters.powers = "being really smelly";
console.log(otherMonsters);

// This is an exercise I was doing from Jonas's Udemy course that I've in my Udemy account.

// I had to guess which of these variables will never change and so I assigned const to those that will never change and let to the ones that will change. 

const country = "USA";
const continent = "North America";
let population = 333033000;
const isIsland = true;
const language = "English";

// Here I output the value of which variable

console.log(country);
console.log(continent);
console.log(population);
console.log(isIsland);
console.log(language);

// Here I output the value of the type of each data type. 

console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);
console.log(typeof isIsland);
console.log(typeof language);

//I'm instructed to halve the population of the country and log it to the console.

let halfofcountry = population / 2;
console.log(halfofcountry);

// I'm instructed here to add one more to the population and log the value of the new variable created when I add one more to the population. 

let increasedPopulation = population + 1;
console.log(increasedPopulation);

// I'm instructed here to make a variable description and use string concatenation with different variable types and log it to the console.

const description = `${country} is in ${continent} and it has a population of ${population} people that speak ${language}.`;

console.log(description);

// I'm instructed that I compare the population of Finland to the USA and output to the console which one has a higher population.

let finland = 6000000;

if (population > finland) {
    console.log(country + " has a higher population than Finland.");
} else {
    console.log(country + " doesn't have a higher population than Finland.")
}

// Here we practice the different between some data conversions. The first 6 lines are the lines of code given to me as they were and the second set shows how I needed to convert some strings to numbers to get a different mathematical output. 

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

// This is all my own doing. I was thinking about doing a text adventure but I began thinking about stats of enemies.

// I made an object within an object of three monsters with three keys and values. 

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

// I used a control flow to see which monster attacks harder to test and make sure I'm using the keys and values the right way from within the objects I created.

if (monsters.monster1.attack > monsters.monster2.attack) {
    console.log(`${monsters.monster1.name} attacks harder than ${monsters.monster2.name}`);
} else {
    console.log(`${monsters.monster2.name} attacks harder than ${monsters.monster1.name}`);
}

// After testing it I made the variables a little easier by assigning them to simpler variable names from the objects.

let monster1Attack = monsters.monster1.attack;
let monster2Attack = monsters.monster2.attack;
let monster1Life = monsters.monster1.life;
let monster2Life = monsters.monster2.life;
const monster1 = monsters.monster1.name;
const monster2 = monsters.monster2.name;

// Used more control flow to test the simpler variable names from the objects keys and values. 

if (monster1Attack > monster2Life) {
    console.log(`${monster2} is dead`);
} else {
    console.log(`${monster1} didn't hit as hard and failed to kill ${monster2}.`)
}

// I know I can do this better but here I started thinking about RPG stats and how I would go about using random numbers to determine critical hit chances and how hard someone would hit if they critical chance was above 50%.

let randomNum = Math.floor(Math.random() * 10) + 1;
console.log(randomNum);

// Here I assigned hitChance to be anywhere from 0-50%

let hitChance = Math.random() * .50;
console.log(hitChance);

// I assigned agility to 15

let agility = 15;

// I used control flow so that if agility was above 10 it would add an extra 5% chance of getting a critical chance to sum up to 50% chance or more depending on what the random number generator equaled as a hitChance. 

if (agility > 10) {
    hitChance = hitChance + 0.05;
    console.log(hitChance);
    console.log(`The bonus hit higher.`);
} else {
    console.log(hitChance);
    console.log(`Hit chance doesn't get bonus`);
}

// This control flow determines whether the hitChance is equal to or above 50% where the monster would get a damage bonus. 

// Again I know there's a better way of doing this, but I was checking to see if what I was trying to do was outputting the correct information to make sure the syntax was correct. 

let damageBonus = monster2Attack + 5;

if (hitChance >= .50) {
    let damageBonus = monster2Attack + 5;
    monster1Life = monster1Life - damageBonus;
    console.log(`Critical Hit! ${monster1} has ${monster1Life} hitpoints left!`);
} else {
    monster1Life = monster1Life - monster2Attack;
    console.log(`No Critical Hit! but ${monster1} gets hit for ${monster2Attack} and has ${monster1Life} hitpoints left.`);
}

// Working on an simple inventory system for a text adventure game in Javascript

// userInventory Empty for now.

let userInventory = {

}

let floorOnFirstScene = {
    item1: {
        name: "sword",
        attackDamage: 15,
    }
}

console.log("You see a sword on the floor");

let userDecision = prompt("Do you pick up the sword?");

if (userDecision === 'Yes') {
    userInventory = floorOnFirstScene.item1;
    console.log("You now have the sword!")
    console.log(userInventory);
} else {
    console.log("Either you said no or type something else. Either way, good luck you have no sword.")
}





