const bill = 275;

/* Write your code below. Good luck! 🙂 */

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

const totalValue = bill + tip;

console.log(`The bill was ${bill}, the tip was ${tip} and the total value was ${totalValue}`);

// Test Comment 

// Below is an improved version using arrays as well.

/* Write your code below. Good luck! 🙂 */

/* function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        let tip = bill * .15;
        return tip;
    } else {
        let tip = bill * .20;
        return tip;
    }

} */

function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        let tip = bill * .15;
        return tip;
    } else {
        let tip = bill * .20;
        return tip;
    }

}
console.log(calcTip(100));

const bills = [125, 255, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

