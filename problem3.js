/* ****************************************
 ** File:    problem3.js
 ** Project: CMSC 331 Semester Project, Spring 2018
 ** Problem: Problem 3- Sorting Words
 **
 ** Author:  Innocent Kironji
 ** Date:    05/15/18
 ** Section: 03
 ** E-mail:  wambugu1@umbc.edu
 **
 **   This problem's main feature is the SortByValue() function
 **   This function takes in an array and sorts it's elements by
 **     unicode value (javascript uses unicode instead of ascii) 
 ********************************************** */
var sortedArr = [];
var defaultArr = ["ruby", "java", "javascript", "lua", "android"];
var answer = "";

// Main function, handles sort
function SortByValue(array){

    // sort() is a function of the array object
    array.sort(function(a, b) { 
	    var sumA = 0;
	    var sumB = 0;

	    // Sums the unicode for element 'a'
	    for (var i = 0; i < a.length; i++)
		sumA += a.charCodeAt(i);
	    
	    // Sums the unicode for element 'b'
	    for (var i = 0; i < b.length; i++)
		sumB += b.charCodeAt(i);

	    return sumA >= sumB;
	});
}

// Function used to populate the default array
function populate(){
    rl.question("Enter a string to add to the array ('#' to exit): ", (ans) => {

	    // Recursive case, adds elements to array
	    if (ans !== '#'){
		sortedArr.push(ans);
		populate();
	    }

	    // Base case, user chooses to stop adding elements 
	    else{
		rl.close();
		return ans;
	    }
	});
}

// Using readline to get user input
const readline = require('readline');
const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

// Reads in a string to add to an array
rl.question("Enter a string to add to the array ('#' to exit): ", (ans) => {

	// Adds to the array
	if (ans !== '#'){
	    // push() dynamically grows any array
	    sortedArr.push(ans);
	    answer = populate();
	}

	// User chooses to immediately exit
	else{
	    sortedArr = defaultArr;
	    rl.close();
	}
    });

// Executes after the user has finished entering strings
rl.on('pause', () => {
	console.log("\n Unsorted array: " + sortedArr.toString());
	SortByValue(sortedArr);
	console.log("\n   Sorted array: " + sortedArr.toString());
    });
