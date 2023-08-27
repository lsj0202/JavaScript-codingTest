// enum type

enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}

enum Lang {
  KOREAN = "ko",
  ENGLISH = "en",
}

const { KOREAN: ko, ENGLISH: en } = Lang;
const { ADMIN: admin, USER: user, GUEST: guest } = Role; // enum 멤버를 할당

const user1 = {
  name: "이상진",
  role: admin, // Role.ADMIN 대신 admin 사용
  lang: ko,
};

const user2 = {
  name: "삼상진",
  role: user, // Role.USER 대신 user 사용
  lang: en,
};

const user3 = {
  name: "사상진",
  role: guest, // Role.GUEST 대신 guest 사용
  lang: en,
};

// 한 줄 소감: 역할을 분리할때 쉽게 분리 할 수 있는 것 같아서 좋았어용
