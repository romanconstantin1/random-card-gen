/* eslint-disable */
import "bootstrap";
import "./style.css";

const suitList = ["♦", "♥", "♠", "♣"];
const suitCol = ["black", "red"];
const cardVal = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

window.onload = () => {
  document
    .querySelector(".refresher")
    .addEventListener("click", () => cardGenerator());

  cardGenerator();
};

let cardGenerator = () => {
  let suitGen = Math.floor(Math.random() * 4);
  let colGen = Math.floor(Math.random() * 2);
  let valGen = Math.floor(Math.random() * 13);
  let cardWidth = document.querySelector(".width");
  let cardHeight = document.querySelector(".height");

  document.querySelector(".top-left").innerHTML = `${suitList[suitGen]}`;
  document.querySelector(".top-left").style = `color: ${suitCol[colGen]}`;
  document.querySelector(".center-text").innerHTML = `${cardVal[valGen]}`;
  document.querySelector(".bottom-right").innerHTML = `${suitList[suitGen]}`;
  document.querySelector(".bottom-right").style = `color: ${suitCol[colGen]}`;

  cardWidth.addEventListener("change", function() {
    let inputNum = document.querySelector(".width").value;
    if (inputNum < 200) {
      alert("Minimum width of 200px please!");
    } else {
      document
        .querySelector(".card-face")
        .style.setProperty("width", `${inputNum}px`);
    }
  });

  cardHeight.addEventListener("change", function() {
    let inputNum = document.querySelector(".height").value;
    if (inputNum < 300) {
      alert("Minimum height of 300px please!");
    } else {
      document
        .querySelector(".card-face")
        .style.setProperty("height", `${inputNum}px`);
    }
  });
};
