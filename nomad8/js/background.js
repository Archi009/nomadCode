const images = [
  "interaken.jpg",
  "la-sagrada-familia.jpg",
  "park-guel.jpg"
];
const chosenImg = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImg}`;

document.body.appendChild(bgImage);