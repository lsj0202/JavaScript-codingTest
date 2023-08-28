let fs = require("fs");
let input = fs.readFileSync("text.txt").toString().split("\n");

let data = input.map((el) => Number(el));
let max = Math.max(...data);

console.log(max);
console.log(data.indexOf(max) + 1);

// 한 줄평: 자바스크립트 코테언어로 나쁘지 않을지도??
