#TRAY.IO TECHNICAL CHALLENGE

##ROBOTIC HOOVER THRU X | Y COORDS

###SUBMITTED BY:  BRAXTON TOOMER

####DATE:  01/15/2020

_____________

#GOAL:

The goal was to create a program that navigates an imaginary robot through a grid of coordinates.  The program was designed to take in an input file that provided the following information:

1. x y grid dimensions ex: 5 5 or 5 x 5 grid
2. x y coordinates for starting position
3. x y coordinates for obstacles/dirt (zero or many)
4. directional inputs for N S E W ex: NSEWESSN

#EXAMPLE INPUT FILE:

5 5 (Dimensions)

1 2 (Start)

1 0 (Dirt)

2 2 (Dirt)

2 3 (Dirt)

NNESEESWNWW (Directions)

#EXPECTED RESULT:

If the program was successful, the expected output after taking in the input file, was to provide the end point location in the grid after following the directions from the starting point provided.  Additionally, the program should have counted the number of dirt obstacles the robot encountered, if any, without counting the same obstacle more than once.

EXAMPLE OUTPUT:

1 3 (X Y coord of endpoint)

1 (# of dirt obstacles encountered)

#Link to Initial Challenge:

[This is the link to the initial technical challenge test.](https://gist.github.com/alirussell/2d200d21f117f8d570667daa7acdbae5#https://gist.github.com/alirussell/2d200d21f117f8d570667daa7acdbae5)


#INSTRUCTIONS:

An Example Input File was provided for testing purposes.

Please provide an input file in the format addressed above and save it as input.txt in the same directory as the program.  

In terminal, type:  node main.js to run the program.


#PROGRAMS UTILIZED:

1. Node.js/Javascript
3. MacDown
4. Lots of Stack Overflow :)
5. Coffee

#EVALUATION:

I tried to tackle this from several different approaches and found that I probably complicated matters for myself.  My initial thought was to create a grid using nested for loops.  I had difficulty figuring out how to assign x y coordinates to a multi-dimensional array of values and to get those coordinates to match up.

A central theme on my mind was to try not to over complicate the process since I was advised that prior submissions were done in under 2 hours.  That unforunately was not the case for me.  

Ultimately, I was able to parse the data into more manageable units and use conditional statements to navigate the robot through the imaginary grid and correctly return the end point.  

I was unable to get the program to count the number of dirt obstacles encountered.  In my mind, the best method to tackle this was to loop the coordinates after adjustment for each direction through the array of dirt obstacles to see if there was an equivalent match, and if so, to splice it from the array to prevent duplication.  

Although, I was unable to get that part to work (at this moment), I hope my work meets the organization, readability, and quality expected.   I appreciate the challenge and will continue to work to solve this.

Thank you again for this rewarding experience.  



