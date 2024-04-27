const day = 'Monday';

switch (day) {
    case 'Sunday':
        console.log("Day off. Chillin");
        break;
    case 'Monday':
        console.log('Morning Shift');
        break;
    case 'Tuesday':
        console.log('Day off');
        break;
    case 'Wednesday':
        console.log('Evening Shift');
        break;
    case 'Thursday':
        console.log('Evening Shift');
        break;
    case 'Friday':
        console.log('Morning Shift');
        break;
    case 'Saturday':
        console.log('Morning Shift');
        break;
    default:
        console.log('Invalid day');
}


console.log("You wake up with no memory and you see a few paths ahead of you which one do you take?");

console.log("Type '1' to Enter the Cave.");
console.log("Type '2' to Cross the Treacherous Bridge:");
console.log("Type '3' to Follow the Enchanted Path");
console.log("Type '4' to Descend into the Abandoned Mine")
console.log("Type '5' to You Scale the Towering Mountain")

const choice = '1';

switch (choice) {
    case '1':
        console.log("You explore the Mysterious Cave");
        break;
    case '2':
        console.log("You Cross the Treacherous Bridge.");
        break;
    case '3':
        console.log("You Follow the Enchanted Path");
        break;
    case '4':
        console.log("You Descend into the Abandoned Mine");
        break;
    case '5':
        console.log("You Scale the Towering Mountain");
        break;
    default:
        console.log("Unknown Choice");
        break;
}
