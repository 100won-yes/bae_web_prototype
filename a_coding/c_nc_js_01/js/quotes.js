const quotes = [
  {
  quote: "나는 당신이 할 수 없는 일을 할 수 있고, 당신은 내가 할 수 없는 일을 할 수 있다. 따라서 우리는 함께 큰일을 할 수 있다.",
  author: "마더 테레사",
  },
  {
  quote: "사람들을 따라하지 말고 당신만의 길을 찾아라.",
  author: "피터 드러커",
  },
  {
  quote: "지혜는 듣는 데서 오고, 후회는 말하는 데서 온다.",
  author: "영국 격언",
  },
  {
  quote: "지피지기면 백전백승",
  author: "손자병법",
  },
  {
  quote: "모두가 같은 생각을 한다는 것은, 아무도 생각하고 있지 않다는 뜻이다.",
  author: "윌터 리프먼",
  },
  {
  quote: "사랑은 두 사람이 마주 쳐다보는 것이 아니라 함께 같은 방향을 바라보는 것이다.",
  author: "생텍쥐페리",
  },
  {
  quote: "나를 죽이지 못하는 고통은 나를 더 강하게 만든다.",
  author: "프리드리히 니체",
  },
  {
  quote: "스스로 행복하다고 생각하지 않는 사람은 행복하지 않다.",
  author: "퍼블릴리어스 사이러스",
  },
  {
  quote: "진인사대천명 (盡人事待天命)",
  author: "한자성어",
  },
  {
  quote: "나는 천재가 아니다. 다만 호기심이 많을 뿐이다.",
  author: "아인슈타인",
  }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQoute = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQoute.quote;
author.innerText = todaysQoute.author;