// void -> 공허(아무것도 없음을 의미)
// never -> 불가능을 의미

const func1 = (): string => {
  return "hello";
};

const func2 = (): void => {
  // 반환값이 없다
  console.log("hello");
};

const func3 = (): never => {
  // 반환을 할 수 가 없으면 네버
  while (true) {}
};

const fun4 = (): never => {
  throw new Error();
};

let a: never; // 그 어떠한 값도 저장 할 수 없다
a = 1;
a = {};
a = "";
a = undefined;
a = null;

// 한 줄평: void, never는 사용 용도가 뚜렷하여 좋았습니다 굿이에요~ 굿~~
