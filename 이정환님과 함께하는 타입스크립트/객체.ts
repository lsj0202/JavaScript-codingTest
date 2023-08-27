let dog: {
  name: string;
  color: string;
} = {
  name: "돌돌이",
  color: "black",
};

interface userInfo {
  id?: number; // 옵셔널 체인징
  name: string;
}

const user: userInfo = {
  name: "lsj",
};

const { id: userId, name: userName } = user;

console.log(userId, userName);

const auth: {
  readonly apiKey: string;
} = {
  apiKey: "My Api Key",
};

// auth.apiKey = "backend"; ReadOnly Error
