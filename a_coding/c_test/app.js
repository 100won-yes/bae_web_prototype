
// array.find()

const emails = [
  "aaa@gmail.com",
  "bbb@naver.com",
  "ccc@yahoo.com",
  "ddd@hotmail.com",
  "eee@daum.com"
];

const daumFind = emails.find(mail => mail.includes("@daum.com"));
// array.find()는 ()안에서 true인 것 중에 첫번째 것을 호출한다.

console.log(daumFind); // eee@daum.com

// @ ============================================================================

