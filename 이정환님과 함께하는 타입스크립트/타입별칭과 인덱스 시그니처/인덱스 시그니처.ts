// 인덱스 시그니처

type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  Japan: "jp",
  UnitedKingdom: "uk",
};

type NumberCodes = {
  [key: string]: number;
}; // 규칙 위반시 에러

let numberCodes: NumberCodes = {
  one: 1,
  two: 2,
  three: 3,
};
