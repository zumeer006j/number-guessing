#! /usr/bin/env node
import inquirer from "inquirer";
//1) computer will generate a random done
//2) user input for guessing number done
//3) compare user input with computer generated number and show result done
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "userGuessednumber",
        message: "please guess a number between 1-6: ",
    },
]);
console.log(answer);
if (answer.userGuessedNumber === randomNumber) {
    console.log("congtratulation you guessed right number.");
}
else {
    console.log("you guessed wrong number");
}
