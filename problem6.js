/* ****************************************
 ** File:    problem6.js
 ** Project: CMSC 331 Semester Project, Spring 2018
 ** Problem: Problem 6- Golomb Sequence
 **
 ** Author:  Innocent Kironji
 ** Date:    05/15/18
 ** Section: 03
 ** E-mail:  wambugu1@umbc.edu
 **
 **   This problem uses the golumb sequence to calculate
 **    the golumb number for a user specifed integer
 ********************************************** */
var input = 1;

// Calculates number of times a number repeats on the Golumb Sequence
function G(n){
    // Base Case
    if (n == 1)
	return 1;

    // Recrusive case
    else 
	return 1 + G(n - G( G( n - 1)));
}

// Using readline to get user input
const readline = require('readline');
const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

// Reads in a number to calculate G(N)
rl.question("Enter a number for the Golomb Calculator: ", (ans) => {
        input = Number(ans);
        rl.close();
    });

// Executes after the user's choice is made
rl.on('pause', () => {
	console.time("Calculation took");
	console.log( "G(" + input.toString() + ") = " + G(input).toString() );
	console.timeEnd("Calculation took");
    });