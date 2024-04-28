const bill = 275;

/* Write your code below. Good luck! 🙂 */

const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

const totalValue = bill + tip;

console.log(`The bill was ${bill}, the tip was ${tip} and the total value was ${totalValue}`);

