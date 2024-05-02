// This is just me excerising a few things I've learned without watching a tutorial.


// Declared a function to show what item was picked up.
function pickUp(item) {
    console.log(`You picked up a ${item}`);
    return item;
}

// list of things on the floor
ontheFloor = ["sword", "garbage", "corpse"];

console.log("You see a few things on the floor what do you pick up?");
console.log("You see a " + ontheFloor + ".");

// A function that returns what's on the floor.

function floorItems() {
    return ontheFloor;
}


console.log("The floor has the following items: " + floorItems() + ".");

// Assigning variable to position of the items in the ontheFloor list.
let sword = ontheFloor[0];
let trash = ontheFloor[1];
let corpse = ontheFloor[2];

// Variable to show player's choice in what they picked up.
let playerPickUp = corpse;


// Made list of whats in the players inventory.
playerInventory = ["water bottle"];

// Made a switch statement to base off what the player picked up that is no longer on the floor and now added to the player's inventory.
switch (playerPickUp) {
    case sword:
        pickUp(sword);
        sword = ontheFloor.splice(0, 1);
        console.log(ontheFloor);
        sword = playerInventory.unshift(sword);
        console.log(playerInventory);
        break;
    case trash:
        pickUp(trash);
        sword = ontheFloor.splice(1, 1);
        console.log(ontheFloor);
        trash = playerInventory.unshift(trash);
        console.log(playerInventory);
        break;
    case corpse:
        pickUp(corpse);
        sword = ontheFloor.splice(2, 2);
        console.log(ontheFloor);
        corpse = playerInventory.unshift(corpse);
        console.log(playerInventory);
        break;
    default:
        console.log(`Invalid Entry.`);
}

// Testing the arrow function

const playerName = 'Gary';

const playerOne = playerName => {
    console.log(`Hello ${playerName}`);
    return playerName;
}

playerOne('Gary');


/* Write your code below. Good luck! 🙂 */

const calcAverage = (score1, score2, score3) => {
    const averageScore = (score1 + score2 + score3) / 3;
    return averageScore;
};

const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);

const avgDolphins = scoreDolphins;
const avgKoalas = scoreKoalas;

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins > avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas}).`);
    } else if (avgKoalas > avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins}).`);
    } else {
        console.log("No team wins...");
    }
}

checkWinner(avgDolphins, avgKoalas);
