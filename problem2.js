/* ****************************************
 ** File:    problem2.js
 ** Project: CMSC 331 Semester Project, Spring 2018
 ** Problem: Problem 2- Travel Time
 **
 ** Author:  Innocent Kironji
 ** Date:    05/15/18
 ** Section: 03
 ** E-mail:  wambugu1@umbc.edu
 **
 **   This problem allows the user to pick a vehicle to travel in and randomly
 **    calculates how long it would take to travel 1000mph and the fastest speed traveled
 ********************************************** */
const C_PROMPT = "Pick a vehicle. \n1. Bicycle \n2. Car \n3. Jet Plane \nChoose 1-3: ";
const MSG1 = "The number of hours it took to travel 1000 miles was ";
const MSG2 = "The maximum speed was ";
const MAX_MILES = 1000;
var Vehicle = Object.freeze( {"BIKE":1, "CAR":2, "JET":3} );

// Variables to calculate travel statistics
var choice = 0;
var max_speed = 0;
var hours_traveled = 0;

// Function to calculate speed and time traveled
function calc_travel(MAX, MIN){
    var curr_speed = 0;
    var miles_traveled = 0;
    
    // You continue to travel until you reach 1000 mph
    while (miles_traveled < MAX_MILES){

	// Random() function returns a decimal number between 0 and 1 (exclusive)    
	curr_speed = Math.floor(Math.random() * (MAX - MIN) ) + MIN;

	miles_traveled += curr_speed;
	hours_traveled++;	

	// Updating the maximum speed traveled
	if (curr_speed > max_speed){
	    max_speed = curr_speed;
	}
    }
}

// Functions to determine maximum and minimum speeds to travel
// Choosen based on vehicle user choose to travel with
function calc_bike(){
    console.log("In a Bicycle:");
    const MAX = 15;
    const MIN = 5;
    calc_travel(MAX, MIN); 
}
function calc_car(){
    console.log("In a Car:");
    const MAX = 70;
    const MIN = 20;
    calc_travel(MAX, MIN);
}
function calc_plane(){
    console.log("In a Jet Plane:");
    const MAX = 600;
    const MIN = 400;
    calc_travel(MAX, MIN);
}


// Using readline to get user input
const readline = require('readline');
const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });


// Reads in the filename
rl.question(C_PROMPT, (ans) => {
        choice = Number(ans);  
	rl.close();

    });

// Executes after the user's choice is made
rl.on('pause', () => {
	console.log(`You choose the input: ${choice}`);

	switch (choice){
	case Vehicle.BIKE:
	    calc_bike();
	    break;
	case Vehicle.CAR:
	    calc_car();
	    break;
	case Vehicle.JET:
	    calc_plane();
	    break;
	default:
	    console.log("Invalid Input. Program Exiting");
	}

	console.log(MSG1 + hours_traveled.toString() + " hours.");
	console.log(MSG2 + max_speed.toString() + " mph.");
    });
