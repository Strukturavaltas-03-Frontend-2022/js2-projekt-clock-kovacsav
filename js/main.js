"use stict";

let aktualDate = new Date();

const clockParagraph = document.querySelector(".time");

const setTwoCharacters = (number) => {
  if (number < 10) {
    return `0${number}`;
  }
  return number;
};

const setTime = () => {
  aktualDate = new Date();
  clockParagraph.textContent = `${setTwoCharacters(
    aktualDate.getHours()
  )}:${setTwoCharacters(aktualDate.getMinutes())}:${setTwoCharacters(
    aktualDate.getSeconds()
  )}`;
};

const timer = setInterval(setTime, 1000);
