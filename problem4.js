/* ****************************************
 ** File:    problem4.js
 ** Project: CMSC 331 Semester Project, Spring 2018
 ** Problem: Problem 4- Randome Number Generator
 **
 ** Author:  Innocent Kironji
 ** Date:    05/15/18
 ** Section: 03
 ** E-mail:  wambugu1@umbc.edu
 **
 **   This problem generates random numbers (between 0 and 1) once a second. After the user
 **    presses any key statictics about the generated numbers. Some keys do not work and those
 **    keys have been listed in the opening promopt
 ********************************************** */
var rand_nums = [];
var avg = 0;
var total_nums = 0;
var num = 0;

// Function that generates the random numbers and gets stats
function genRand(){
    num = Math.random();
    rand_nums.push(num);
    avg += num;
    total_nums++;
    setTimeout(genRand, 1000);
}

// Sets readline to accept user input
const readline = require('readline');

// Input being checked is any key press
readline.emitKeypressEvents(process.stdin);

// Wihout this keys would be interpreted as commands and not inputs
process.stdin.setRawMode(true);
process.stdin.on('keypress', (str, key) => {

	// Printed to help with debugging
	avg /= total_nums;
	console.log("You generated the numbers: \n" + rand_nums.toString());
	console.log("\n The following are statistics based on those numbers");
	console.log("-----------------------------------------------------");

	// Actual statistics needed
	console.log("After " + total_nums.toString() + " seconds...");
	console.log("Random numbers generated: " + total_nums.toString());
	console.log("The average of these numbers is: " + avg.toString());
	process.exit();
    });

// Describing keys that do not work
console.log("Do not use commands keys like:");
console.log("\t\'control\', \'fn\', \'shift\', \'caps lock\', \'alt/option\', or \'command\'");
console.log("Command keys that do work are:\n\t \'F1\'-\'F12\', \'enter/return\', \'delete\' and \'tab\'");
console.log("\nPress any key... ");

// Because of how javascript events work this is run first and 
//  control will only leave when a ket is pressed
// Upon which the code will end execution
genRand();
