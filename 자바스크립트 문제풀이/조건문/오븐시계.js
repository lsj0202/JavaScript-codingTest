let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [a, b] = input[0].split(" ").map(Number);
let c = Number(input[1]);

let totMin = a * 60 + b + c;
let hour = Math.floor(totMin / 60);
let minutes = totMin % 60;

if (hour >= 24) {
  hour %= 24;
}

console.log(hour + " " + minutes);
