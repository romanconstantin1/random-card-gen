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
window.onload = function() {
  let suitGen = Math.floor(Math.random() * 4);
  let colGen = Math.floor(Math.random() * 2);
  let valGen = Math.floor(Math.random() * 13);
  document.querySelector(".top-left").innerHTML = `${suitList[suitGen]}`;
  document.querySelector(".top-left").style = `color: ${suitCol[colGen]}`;
  document.querySelector(".center-text").innerHTML = `${cardVal[valGen]}`;
  document.querySelector(".bottom-right").innerHTML = `${suitList[suitGen]}`;
  document.querySelector(".bottom-right").style = `color: ${suitCol[colGen]}`;
};
