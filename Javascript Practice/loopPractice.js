const whoisthisGuy = {
    name: "Damian",
    age: 41,
    born: `Miami`
}

for (const key in whoisthisGuy) {
    console.log(whoisthisGuy[key]);
}

const listofHobbies = [`music`, `3dart`, `baseball`, `candy eating`, `random stuff`];

for (let haha in listofHobbies) {
    console.log(listofHobbies[haha]);
}

const listofRandomThings = [`thing 1`, `thing 2`, `thing 3`, `thing 4`, `thing 5`, `thing 6`];

for (let i = 0; i < listofRandomThings.length; i++) {
    console.log(listofRandomThings[i]);
}

for (let i = listofRandomThings.length - 1; i >= 0; i--) {
    console.log(listofRandomThings[i]);
}

for (let chapter = 1; chapter <= 12; chapter++) {
    console.log(`--------------------- Chapter ${chapter} --------------------- `);
    for (let page = 1; page <= 10; page++) {
        console.log(`****            Page ${page}              ****`);
        for (let sentence = 0; sentence <= 10; sentence++) {
            console.log(`This is sentence #${sentence}`)
        }
    }

}

