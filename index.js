#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(10000 + Math.random() * 90000);
let myBalance = 0;
let answere = await inquirer.prompt([
    {
        name: "students",
        type: "input",
        message: "Enter student name:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non-empty value!";
        }
    },
    {
        name: "courses",
        type: "list",
        message: "Please select the course to enrolled:",
        choices: ["MS. Office", "HTML", "CSS", "TypeScript", "Python"]
    }
]);
const tuitionFee = {
    "MS. Office": 2000,
    "HTML": 2500,
    "CSS": 3000,
    "TypeScript": 4000,
    "Python": 5000
};
console.log(`\nTuition Fee: ${tuitionFee[answere.courses]}/-\n`);
console.log(`Balance: ${myBalance}\n`);
let paymentType = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "Select payment method:",
        choices: ["Bank Transfer", "EasyPaisa", "JazzCash"]
    },
    {
        name: "amount",
        type: "input",
        message: "Transfer Money",
        validate: function (value) {
            if (value.trim !== "") {
                return true;
            }
            return "Pleae enter a non-empty value!";
        }
    }
]);
console.log(`\nYou have selected payment method "${paymentType.payment}"`);
const tuitionFee2 = tuitionFee[answere.courses];
const paymentAmount = parseFloat(paymentType.amount);
if (tuitionFee2 === paymentAmount) {
    console.log(`Congratulations, You have successfully enrolled in ${answere.courses}!\n`);
    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "What would you like to do next ?",
            choices: ["View Status", "Exit"]
        }
    ]);
    if (ans.select === "View Status") {
        console.log("\n*******Status********\n");
        console.log(`Student Name: ${answere.students}`);
        console.log(`Student ID: ${randomNumber}`);
        console.log(`Course: ${answere.courses}`);
        console.log(`Tuition Fee Paid: ${paymentAmount}`);
        console.log(`Balance: ${myBalance += paymentAmount}`);
    }
    else {
        console.log("Exiting Student Management System");
    }
}
else {
    console.log("Invalid amount due to course!\n");
}
;
