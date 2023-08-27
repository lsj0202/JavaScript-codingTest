// any
// 치트키

const anyOne: any = 10;
const anyTitle: any = "hello";

let anyVar: any;
anyVar = true;
anyVar = {};
anyVar = () => {};

anyVar.toUpperCase(); // run time error
anyVar.toFixed(); // run time error
let num = anyVar;

// 한 줄평: 애니타입 쓰지맙시다 징짜로..

// unknown
let unknownVar: unknown;
unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

num = unknownVar; // 허용 x

// 한 줄평: 언노운타입도 쓰지맙시다..
