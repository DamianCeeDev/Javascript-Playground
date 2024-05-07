sword = {
    type: 'katana',
    length: 32,
    damage: 123,
    durability: 100,
}

console.log(sword.type);


for (let i = sword.durability; i >= 0; i--) {
    sword.durability--;

    if (sword.durability === 0) {
        console.log("You swing the sword at a wall.")
        console.log(`Sword broke!`)
        break;
    } else {
        console.log("You swing the sword at a wall.")
        console.log(`Sword Durability: ${sword.durability}`);
    }

}

swords_list = {
    katana:
    {
        length: 25,
        damage: 300,
        durability: 150
    },
    bastard_sword:
    {
        length: 20,
        damage: 500,
        durability: 300
    }
}

console.log(swords_list);

characterPlayer = {
    name: "BooBooBam",
    age: 123,
    class: "warrior",
    race: "Ogre",
}

console.log(characterPlayer);

characterPlayer.location = "Atlantis";

console.log(characterPlayer);

characterPlayer.favoriteSaying = prompt("What is your character's favorite saying??");

console.log(characterPlayer);

// Jonas Assignment below for Function Methods

const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    },

}

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    },
}

console.log(mark.calcBMI());
console.log(john.calcBMI());

if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI(${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`);
    console.log(`${john.fullName} wins!`)
} else {
    console.log(`${mark.fullName}'s BMI(${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`);
    console.log(`${mark.fullName} wins!`)
}
