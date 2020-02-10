/* ****************************************
 ** File:    problem5.js
 ** Project: CMSC 331 Semester Project, Spring 2018
 ** Problem: Problem 5- Matrix Statistics
 **
 ** Author:  Innocent Kironji
 ** Date:    05/15/18
 ** Section: 03
 ** E-mail:  wambugu1@umbc.edu
 **
 **   This problem prints out staticics about a matrix.
 **   More specifically it prints the average for all the rows and columns
 **
 **   Matrix is stored as a two dimensional array
 ********************************************** */
var matrix = []; // To turn into a 2D array just push arrays

// Calculates row statisctics
function rowAvg(row){
    var sum = 0;
    
    // Row array is passed so loops through the row given
    for (var i = 0; i < row.length; i++)
	sum += row[i];

    return (sum / row.length);
}

// Calculates column statistics
function colAvg(mat, col){
    var sum = 0;

    // Loops through the Nth term (defined by col) in each row 
    for (var row = 0; row < mat.length; row++)
	sum += mat[row][col];

    return (sum / mat.length);
}

// Function that handles printing the statistics
function matStat(mat){
    // Loops through the row getting row statistics
    for (var row = 0; row < mat.length; row++)
	console.log("Row " + row.toString() +" has an average of: "+ rowAvg(mat[row]).toString() );

    console.log();
    // Loops through the column getting column statistics
    for (var col = 0; col < mat[0].length; col++)
	console.log("Column "+ col.toString() +" has an average of: "+ colAvg(mat,col).toString() );
}

// Debugging Function
function printMat(mat){
    // Arrays have a toString() function that prints the entire array as a string
   for (var row = 0; row < mat.length; row++){
       console.log(mat[row].toString());
   }
}

// Using readline to get user input
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
    });

// Determines how the user would like to fill the matrix
rl.question("Would you like the program to populate your matrix? ('y' or 'n'): ", (ans) => {
	if (ans == 'y')
	    randFill();

	// Matrix will not be user defined
	else{
	    defaultFill();
	    end();
	    rl.close();
	}
    });

// Function that makes it easy to fill the matrix
function defaultFill(){
    var row1 = [1, 2, 3, 4, 5];
    var row2 = [1, 2, 3, 4, 5];
    var row3 = [1, 2, 3, 4, 5];
    
    matrix.push(row1);
    matrix.push(row2);
    matrix.push(row3);
}

// Function to fill the matrix with random numbers between 1 and 20
function randFill(){
    var row_len = 0;
    var col_len = 0;
    
    // Asks user to define the number of rows in the matrix
    rl.question("How many rows would you like in the matrix: ", (ans) => {
	    row_len = Number(ans);

	    // Asks user to define the number of columns in the matrix
	    rl.question("How many columns would you like in the matrix: ", (ans) => {
		    col_len = Number(ans);
		    rl.close();
		});
	});
    
    // Executes after the user has finished entering desired size for the matrix
    rl.on('pause', () => {
	    // Appends the rows to the matrix
	    for (var r = 0; r < row_len; r++){
		var row = [];

		// Fills the rows with random numbers
		for (var c = 0; c < col_len; c++)
		    row.push( Math.floor(Math.random() * 20) );
		
		matrix.push(row);
	    }
	    end();
	});
}

// Executes after the user has chosen how to fill their matrix
function end(){
    console.log("\nYour matrix:");
    console.log("---------------");
    printMat(matrix);
    console.log("\nNow printing Matrix Statistics.");
    console.log("---------------------------------");
    matStat(matrix);
}