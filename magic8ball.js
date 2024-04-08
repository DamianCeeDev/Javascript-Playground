/* This is a CodeAcademy assignment wherr we can to program an Magic 8 Ball simulator */

// Made userName variable 
let userName = "Bob";

// Created ternary expression create variable where if the username has a variable value to print "Hello, ${userName}`" otherwise just print Hello.

let message = userName ? `Hello, ${userName}` : `Hello`;
console.log(message);

// Made a variable where I assigned a question to the variable userQuestion. 

let userQuestion = "Am I going to be rich?";

//The user question is printed as if it was asked through the perspective of the user. 
console.log(`${userName}: ` + userQuestion);

// Made a randomNumber variale to generate a random number from 0-7
let randomNumber = Math.floor(Math.random() * 8);

//Made a variable called eightBall with an empty string value.

let eightBall = "";

//Made a switch statement which prints out a message dependant on the random number variable.

switch (randomNumber) {
    case 0:
        console.log("It is certain")
        break;
    case 1:
        console.log("It is decidedly so")
        break;
    case 2:
        console.log("Reply hazy try again")
        break;
    case 3:
        console.log("Cannot predict now")
        break;
    case 4:
        console.log("Do not count on it")
        break;
    case 5:
        console.log("My sources say no")
        break;
    case 6:
        console.log("Outlook not so good")
        break;
    case 7:
        console.log("Signs point to yes")
        break;

}



