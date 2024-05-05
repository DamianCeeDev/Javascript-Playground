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

