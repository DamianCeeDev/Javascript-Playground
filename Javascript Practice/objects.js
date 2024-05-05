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