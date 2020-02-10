/* ****************************************
 ** File:    problem1.js
 ** Project: CMSC 331 Semester Project, Spring 2018
 ** Problem: Problem 1- Unique Words
 **
 ** Author:  Innocent Kironji
 ** Date:    05/15/18
 ** Section: 03
 ** E-mail:  wambugu1@umbc.edu
 **
 **   This problem counts unique words in a text file. The number counted is user specified
 ************************************** */
var num2count = 0;
var filename = "";
var unique = [];

// Using readline to get user input
const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
    });

// Reads in the filename
rl.question('What is the name of the file you are using? ', (file) => {
	filename = file;
	console.log(`You input the filename: ${filename}`);

	// Reads in 'N' (the number of unique words)
	rl.question('How many unique words would you like read? ', (num) => {		
		num2count = Number(num);
		rl.close();
	    });
    });

// After filename is recieved, file is read
rl.on('pause', () => {
	const fs = require('fs');

	// Opens the file for reading
	fs.open(filename, 'r', (err, fd) => {
		if (err) 
		    printError(err);
		
		// Used to read through the file line-by-line
		var lineReader = require('readline').createInterface({
			input: require('fs').createReadStream(filename)
		    });
	    
		// Reads until a newline
		lineReader.on('line', function (line) {
			var words_array = line.split(" ");
			words_array.forEach(checkUnique);
		    });
		
		// Executed after file is finished being read
		lineReader.on('pause', () => {
			console.log("Found the following "+ num2count.toString() +" unique words:");
			console.log( unique.slice(0, num2count).toString() );
		    });
	    });
    });

// Function to check if a word is unique
function checkUnique(word){

    // Function does not run if correct number of unique words has been found
    if (unique.length >= num2count)
	return;

    // Checks if newline was accidentally read as a word
    if( Number(word) == 0)
	return;

    // Loops through vector where unique words are stored
    for (var i = 0; i < unique.length; i++){
	
	// Word is not unique because duplicate appears
	if( unique[i].toLowerCase() == word.toLowerCase() )
	    return;

	// Validates that a word with punctuation does not qualify as unique
	else if( checkPunctuation( i, word.toLowerCase() ) )
	    return;
    }

    // Word is truly unique, no repeats
    unique.push(word);
    return;
}

// Function that outputs an error message for incorrect files
function printError(err){
    if (err.code === 'ENOENT') {
	console.error(filename + ' does not exist');
	return;
    }
    throw err;
}

// Checking if the word is truley unique (punctuation does not make unique)
function checkPunctuation(pos, word){
    
	if( (unique[pos].toLowerCase() + ',') == word)
	    return true;

	else if( (unique[pos].toLowerCase() + '.') == word)
	    return true;

	else if( (unique[pos].toLowerCase() + '?') == word)
	    return true;

	else if( (unique[pos].toLowerCase() + '!') == word)
	    return true;

	else if( (unique[pos].toLowerCase() + ';') == word)
	    return true;

	else if( (unique[pos].toLowerCase() + ':') == word)
	    return true;

	else if( ('\"'+ unique[pos].toLowerCase() + '\"') == word)
	    return true;

	else if( ('\''+ unique[pos].toLowerCase() + '\'') == word)
	    return true;

	else if( ('\('+ unique[pos].toLowerCase() + '\)') == word)
	    return true;

	// Not a duplicate even with punctuation
	else
	    return false;
}