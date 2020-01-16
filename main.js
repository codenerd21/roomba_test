/* Roomba XY Coordinate Project

See README.md provided

Goal:  Given an input file with dimensions, X-;Y- coordinates for starting position, X-;Y- coordinates for obstacles, and directions in the form of N,S,E,W; return the Roomba's end location and the number of obstacles encountered, if any.

*/

const fs = require("fs");  //require file module
const rawData = readInputFile(); //read input file
let coords = [];
const parsedData = parseInput(rawData); //parse string from data 
const endCoords = output(parsedData);

function readInputFile(filename = "input.txt") {
  return fs.readFileSync(filename, "utf-8");
}

function parseInput(data) {
  const lines = data.split("\n").filter(line => line.trim()); //convert string to array 
  const colsAndRows = lines[0].split(" "); //parse array of grid dimensions
  coords = lines
    .slice(1, lines.length - 1) //coords only minus starting point & directions
    .map(c => c.split(" ")) //make new array based on each coord
    .map(point => [parseInt(point[0]), parseInt(point[1])]) //remove strings & make #
  const start = coords[0]; //starting coords only
  const dirt = coords //dirt coordinates only
    .slice(1);
  const directions = lines[lines.length - 1].split(""); //directions only
  return {
    columns: parseInt(colsAndRows[0]),
    rows: parseInt(colsAndRows[1]),
    directions: directions,
    points: coords,
    start: start,
    dirt: dirt,
  };
}

let dirtCounter = 0;

function output(parsedData) {
  let endPoint = parsedData.start
  for (let i = 0; i < parsedData.directions.length; i++) { //logic to determine which direction to move
    if (parsedData.directions[i] == 'N') {
      endPoint[1] += 1;
    } else if (parsedData.directions[i] == 'E') {
      endPoint[0] += 1;
    } else if (parsedData.directions[i] == 'S') {
      endPoint[1] -= 1;
    } else {
      endPoint[0] -= 1; //west
    }
    for (let d = 0; d < parsedData.dirt.length; d++) { //validate dirt mound 
      if (endPoint == parsedData.dirt[d]) { //Having trouble w/check elements in array within another array
        dirtCounter += 1;
        parsedData.dirt.splice(d, 1);
      }
    }
  }
  return endPoint.join(" ");
}

console.log(endCoords);
console.log(dirtCounter); //not validating check of dirt correctly















