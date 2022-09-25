const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let generateBtn = document.querySelector(".generate-btn");
let password1 = document.querySelector(".gen-password1");
let password2 = document.querySelector(".gen-password2");
let randomLetter1 = characters[Math.floor(Math.random() * characters.length)];
let randomLetter2 = characters[Math.floor(Math.random() * characters.length)];
let randomLetter3 = characters[Math.floor(Math.random() * characters.length)];
let randomLetter4 = characters[Math.floor(Math.random() * characters.length)];
let randomLetter5 = characters[Math.floor(Math.random() * characters.length)];
let randomLetter6 = characters[Math.floor(Math.random() * characters.length)];
let randomLetter7 = characters[Math.floor(Math.random() * characters.length)];
let randomLetter8 = characters[Math.floor(Math.random() * characters.length)];
let randomLetter9 = characters[Math.floor(Math.random() * characters.length)];
let randomLetter10 = characters[Math.floor(Math.random() * characters.length)];
let randomLetter11 = characters[Math.floor(Math.random() * characters.length)];
let randomLetter12 = characters[Math.floor(Math.random() * characters.length)];
let randomLetter13 = characters[Math.floor(Math.random() * characters.length)];
let randomLetter14 = characters[Math.floor(Math.random() * characters.length)];
let randomLetter15 = characters[Math.floor(Math.random() * characters.length)];
let randomLetter16 = characters[Math.floor(Math.random() * characters.length)];

generateBtn.addEventListener("click", getRandomPassword);

function symbolFilter(){
    for(let i = 0; i < characters.length; i++){
        if ()
    }
}

function getRandomPassword() {
  for (let i = 0; i < characters.length; i++) {
    password1.textContent =
      randomLetter1 +
      randomLetter2 +
      randomLetter3 +
      randomLetter4 +
      randomLetter5 +
      randomLetter6 +
      randomLetter7 +
      randomLetter8;

      password2.textContent =
      randomLetter9 +
      randomLetter10 +
      randomLetter11 +
      randomLetter12 +
      randomLetter13 +
      randomLetter14 +
      randomLetter15 +
      randomLetter16;
      console.log("clicked")
  }
  }

