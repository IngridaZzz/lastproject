"use strict";

let games = [{
  img: "https://kiloo-ceb9.kxcdn.com/uploads/game/1230/1574864108-Princess-Snow-Wedding-small.jpg",
  name: "Barbie Dress Up"
  }, {
    img: "https://kiloo-ceb9.kxcdn.com/uploads/game/1229/1574862982-Princess-Winter-Fashion-amall.jpg",
    name: "Snow Barbies"
  }, {
    img: "https://kiloo-ceb9.kxcdn.com/uploads/game/850/1561406270-b5b511b0c00149e3aac0ecf0b895ef75-512x384.jpeg",
    name: "Worm Royale"
  },
  {
    img: "https://kiloo-ceb9.kxcdn.com/uploads/game/1231/1575028937-2048-legend-small.jpg",
    name: "2048"
  }
];

console.log(games);
appendGames(games);

// Appending objects to the DOM
function appendGames(games) {
  for (let game of games) {
    console.log(game);
    document.querySelector("#grid-games").innerHTML +=
      "<article>" +
      "<img src='" + game.img + "'>" +
      "<h3>" + game.name + "</h3>" +
      "</article>";
  }

  for (let game of games) {
    console.log(game);
    document.querySelector("#grid-games1").innerHTML +=
      "<article>" +
      "<img src='" + game.img + "'>" +
      "<h3>" + game.name + "</h3>" +
      "</article>";
  }

  for (let game of games) {
    console.log(game);
    document.querySelector("#grid-games2").innerHTML +=
      "<article>" +
      "<img src='" + game.img + "'>" +
      "<h3>" + game.name + "</h3>" +
      "</article>";
  }
}
