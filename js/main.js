"use stict";

let aktualDate = new Date();

const clockParagraph = document.querySelector(".time");

const setTwoCharacters = (string) => {
  console.log(typeof string);
  if (string < 10) {
    return `0${string}`;
  }
  return string;
};

clockParagraph.textContent = `${setTwoCharacters(
  aktualDate.getHours()
)}:${setTwoCharacters(aktualDate.getMinutes())}:${setTwoCharacters(
  aktualDate.getSeconds()
)}`;
