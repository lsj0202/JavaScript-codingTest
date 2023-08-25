const data = [1, 2, 3, 4, 5];

const minValue = data.reduce((a, b) => Math.min(a, b));
console.log(minValue);

const sum = data.reduce((a, b) => a + b);
console.log(sum);
