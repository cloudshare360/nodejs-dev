const fs = require("fs");
const path = require("path");

// Get the path to input.txt in the same directory
console.log('__dirname', __dirname);
const filePath = path.join(__dirname, "input.txt");

// Read the file
const data = fs.readFileSync(filePath);

console.log(data.toString());

let i = 1;
while (i <= 5) {
  console.log("The number is " + i);
  i++;
}