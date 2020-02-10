
CMSC 331- Semester Project |
     	  	   	   |
Name: Innocent Kironji	   |
Section: 02    		   |
	 		   |
===========================


How to run Node.js programs on GL
--------------------------------
Node.js files cannot run immediately after extracting the linux binaries and placing them in your directory. You also need to have the "node" file present
in your current directory. The "node" file is contained within the extracted Node.js linux binaries. It is inside the directory "bin". An example of it's
path would be "node-v8.10.0-linux-x64/bin/" in order to enter the bin directory. This is where the "node" file is. You can either copy this file to the
directory you will be running the node.js files on or you can refer to it's full path (to the node file located in the bin or the node.js linux binaries)
In order to run node.js. Whenever you want to run a node.js file or enter into the interpreter you must call the "node" file. In order to do this without
a copy of the file in your current directory you can use a command similar to "~/node-v8.10.0-linux-x64/bin/node" (this command assumes that the linux
binaries for node.js are in your current directory). So to run a node.js program you might use the command " ~/node-v8.10.0-linux-x64/bin/node (FILENAME).js".
Modify this command in order to refer to the full path of node from whatever directory you are in. You can also modify your path. By modifying your 
path you can call node normally (normal command is just "node (FILENAME).js" or "node" for the interpreter) in order to run node.js. 
Further details on this below

How to modify a path (to run Node.js):
-------------------------------------
You can modify a path in GL by using the 'set path' command. The syntax for 'set path' is "set path = ($path /(ADDRESS)/)" where ADDRESS is the address
you are setting your path to. To set the path to the node file to run node.js your address would go to the location of node in the bin of the linux
binary for node.js. So the command would look like this: "set path = ($path /afs/umbc.edu/users/(#)/(#)/(####)/home/node-v8.10.0-linux-x64/bin/" where
the '#' represents the path to your home directory. The previous command assumes the linux binary for node.js is in your home directory. If it is not
in your home directory then the address would look more like "/afs/umbc.edu/users/(#)/(#)/(####)/home/(INNER DIRECTORIES)/node-v8.10.0-linux-x64/bin/"
where 'INNER DIRECTORIES' are the names of the directories that contain the node.js binary (the full path is needed from the home directory for this
to work). If you do not want to run the 'set path' command every time you boot up GL then you can copy the command into your ".cshrc" file in your
home directory on GL. Once copied to this file the 'set path' command will run automatically when you login to GL. Remember to use the full path (from 
/afs/umbc.edu/) in the 'set path' command. Now Node.js will be able to run from any of your directories.

__________________________________________

How to install Node.js to GL
----------------------------
First you will nee to have downloaded the tar.xz files containing the Linux binaries for Node.js into one of your GL directories.
You can do this by either typing the command "wget https://nodejs.org/dist/v8.10.0/node-v8.10.0-linux-x64.tar.xz" or downloading the files manualy from
"https://nodejs.org/en/download/". Further instructions on how to setup this manual downloading will be below. Once the file is in the directory you can
extract it using the command "tar -xvf node-v8.10.0-linux-x64.tar.xz". If by chance your version of Node.js is different then use the command
"tar -xvf (FILENAME)" where 'FILENAME' is the name of the compressed node.js file that you are extracting. Alternatively if you downloaded the node.js
tar.xz manually it is possible to extract it on your home computer and then copy the extracted file to your GL directory. By doing this you do not need to
use the extraction command in GL. Now node.js's binary files have been sucessfully added to your directory. You should now be able to run node.js files.

Downloading from the node.js website:
-------------------------------------
The specific download from the page I listed that you would need in GL is under the tabe for "Linux Binaries (x86/x64) and GL
would use the "64-bit" version. So just click on "64-bit" under Linux Binaries and the download will begin. Next you should copy the file into one of
your GL directories. If you are on a windows computer (or are running a windows VMware) then you can use WinSCP (this program can be downloaded from this
website: "https://winscp.net/eng/download.php") to transfer your file. Otherwise you can use any other SFTP (FileZilla is a good SFTP available on both Mac and Linux)
 or if you are on a mac or linux computer you could use the terminal and the "scp" command in order to copy the file. 

__________________________________________

Compilation/ Interpretation Instructions
----------------------------------------

Using the Node.js Interpreter:
------------------------------
To run the Node.js intepreter all you have to do is call the "node" command. If this does not work then check the sections above on "How to install Node.js to GL",
"How to run Node.js programs on GL" amd "How to modify a path (to run Node.js)" these explain in detail how to set a path to the 'node' file so that the "node" 
command works properly. You can use this interpreter like any other interpreter. It can run any number of Node.js commands. To exit the interpreter you can use the
command ".exit" or you can press "control-C" twice. This will also allow you to exit the interpreter.

Using the Node.js compiler:
---------------------------
To compile a Node.js file just use the command "node (FILENAME).js" where '(FILENAME)' is the name of your file. If there are no errors your code should just run.
If there are errors the compiler will output those errors to the screen. 

__________________________________________

Other Instructions
------------------
-> The commands to compile and to run a Node.js file are the same, It is simply using the "node" command with the file you are using. 

-> Many of the programs I have written for the problems both prompt the user and also have variables for hard-coding in order to have several options to use for both testing and for grading purposes. I will explain some of these later in this readme (problem 6 is the only one I do not talk about in its own section simply because it is so simple--the user input is just an integer that has a default value of 1 but the user will always be prompted to give an integer so that number is simply overwritten).
- Problems 2 and 4 are the only ones where I do not accomodate for both hard-coded and user input variables; these two problems rely soley on user input and problem 2 will output an error message (not an exception or compilination/ runtime error, the program will simply exit and give a message)

-> Inside the "misc" folder there is a copy of the tar.xz file needed to install Node.js. You can use this instead of going to the website or using the linux command I provided to install the proper Node.js files. I only used the standard library so no other external files should be needed to run the programs I have written for the six problems

[Problem 5]
-----------
Matricies are best manipulated as 2D arrays in Node.js so that is the container I am using for the matrix manipulation. Additionally because 
arrays can be dynamically grown and variables are dynamically typed (type is determined by what the variable holds because, like java, everything is an object)
in Node.js, the matrix is intitially declared as a 1D array. To make it two dimensional simply push other 1D arrays into the matrix.
So for the matStat function pass the matrix as a 2D array.

-> Additionally the program prompts the user if they would like to fill the array with default values or randomly fill the matrix (the array is filled with random numbers and the matrix is sized based on what the user specifies). The matrix is printed before any other operations are done in order for the user to verify the contents. For grading purposes this random fill method can be used or the values for the default matrix can be changed in the function "defaultFill()". To change defailtFill() simply create arrays to represent the rows and the use matrix.push(##) where "##" is the variable name of the array (or the actual array). "matrix" is the name of the 2D array that the matrix is stored in. I use the length function for arrays to determine the size of the array so there are no formal variables holding the matrix dimension.

[Problem 1]
-----------
p1.txt is the file I used when testing Problem 1. However this is not the file required for the problem. Your text can go in any file because the program I wrote asks the user for the filename rather than hardcoding the filename into the .js file.

[Problem 3]
-----------
There is a hard-coded array for the default elements to sort. For grading this array's values can easily be changed. Additionally the program prompts the user if they would like to create their own array and populates an array with user inputed values until the provided exit string is given. Either can be used for grading. The array is printed (unchanged after the appending is completed) before any other information so that the user can verify the correct information was input.
