let isGroupWord = (word) => {
  let visited = new Set();
  for (let i = 0; i < word.length; i++) {
    if (visited.has(word[i])) {
      return false;
    }
    visited.add(word[i]);
    while (word[i] === word[i + 1]) {
      i++;
    }
  }
  return true;
};

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let num = Number(input[0]);
let count = 0;

for (let i = 1; i <= num; i++) {
  if (isGroupWord(input[i])) {
    count++;
  }
}

console.log(count);

// 한 줄평: 와.. 진짜 이거 푸는데 1시간 30분 걸렸음.. 점점 빡세진다..
