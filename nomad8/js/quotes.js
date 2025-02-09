const quotes = [{
    quote: "나에게 친절하지 않은 것을 냉정히 끊어내고 내 곁을 떠난것에 애써 매달리지 말 것.",
    author: "나를 사랑하는 방법"
  },
  {
    quote: "서로 바라보고 있으면 세상엔 우리 둘 만 있는것 같아, 오랫도이안 네가 행복해 주었으면 좋겠다 .",
    author: "타인을 사랑하는 방법"
  },
  {
    quote: "나는 너를 좋아해. 네가 누니을 휘며 웃을 때마다 걱정이나 고민들은 마치 아무것도 아닌 일처럼 되어버려.",
    author: "너를 사랑하는 방법"
  },
  {
    quote: "Never compare myself to other people. It's comparing my behind the scenes to their highlight reel.",
    author: "나를 사랑하는 방법"
  },
  {
    quote: "Stay here, now. I will not think too far forward or back.",
    author: "나를 사랑하는 방법"
  },
  {
    quote: "It's okay to not be fine.",
    author: "나를 사랑하는 방법"
  },
  {
    quote: "흐놀다.",
    author: "무엇인가를 몹시 그리면서 동경하다."
  },
  {
    quote: "사랑옵다.",
    author: "생김새나 행동이 사랑을 느낄정도로 귀엽다."
  },
  {
    quote: "굄.",
    author: "유난히 귀엽게 여겨 사랑함. / 남의 사랑을 받을 만한 특성"
  },
  {
    quote: "또바기.",
    author: "언제나 한결같이 꼭 그렇게."
  }
];

const quote = document.querySelector("#quote span:first-child") ;
const author = document.querySelector("#quote span:last-child") ;

// console.log(quote);
// console.log(author);

let todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;