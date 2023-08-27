// 타입 별칭
type User = {
  id: number;
  name: string;
  birth: string;
  bio: string;
  location: string;
};

let user = {
  id: 1,
  name: "이상진",
  birth: "20060202",
  bio: "hello",
  location: "부산시",
};

// 한 줄 소감: 맨날 인터페이스만 썼는데 타입별칭도 좋은것같다고 생각한다. 굿~
