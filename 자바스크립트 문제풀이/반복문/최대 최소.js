let fs = require("fs");
let input = fs.readFileSync("text.txt").toString().split("\n");

let n = Number(input[0]);
let data = input[1].split(" ").map((el) => Number(el));

let MinNum = data.reduce((a, b) => Math.min(a, b));
let MaxNum = data.reduce((a, b) => Math.max(a, b));

console.log(MinNum, MaxNum);

// 한 줄평: 사랑해요 리듀스!
