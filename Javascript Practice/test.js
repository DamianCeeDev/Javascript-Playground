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
