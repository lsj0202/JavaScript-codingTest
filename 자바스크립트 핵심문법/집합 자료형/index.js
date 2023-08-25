let mySet = new Set();

mySet.add(3);
mySet.add(5);
mySet.add(3);
mySet.add(7);

mySet.delete(5);

console.log(`size: ${mySet.size}`); // 중복 제거

for (let item of mySet) console.log(item);

// 소수점 아래 반올림
let x = 123.456;

console.log(x.toFixed(2));
