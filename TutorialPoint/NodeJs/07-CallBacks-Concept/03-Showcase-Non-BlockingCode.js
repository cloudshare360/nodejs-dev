var fs = require("fs");
const path = require("path");
// Get the path to input.txt in the same directory
console.log('__dirname', __dirname);
const filePath = path.join(__dirname, "input.txt");


fs.readFile(filePath, function (err, data) {
   if (err) return console.error(err);
   console.log(data.toString());
});

let i = 1;
while (i <=5) {
  console.log("The number is " + i);
  i++;
}