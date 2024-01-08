let characters = document.getElementById("passwordNumCh");
let symbols = document.getElementById("symbols");
let cLetters = document.getElementById("cLetters");
let btn = document.getElementById("btn");
let pass = document.getElementById("result");
let passwordGenerated;

class Password {
  constructor() {
    this.lsymbols = false;
    this.lcLetters = false;
    this.lcharacters = false;
  }
  create(ch, symbols = false, cLetters = false) {
    this.lsymbols = symbols;
    this.lcLetters = cLetters;
    this.lcharacters = ch;

    const mayus = [
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
      "Ñ",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "X",
      "Y",
      "Z",
    ];
    const minus = [
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
      "ñ",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "x",
      "y",
      "z",
    ];
    const nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    const chars = [
      "*",
      "+",
      "-",
      "/",
      "@",
      "_",
      "?",
      "!",
      "[",
      "{",
      "(",
      ")",
      "}",
      "]",
      ",",
      ";",
      ".",
      ">",
      "<",
      "~",
      "°",
      "^",
      "&",
      "$",
      "#",
      '"',
    ];
    let characters = [];
    let passCharacters = [];

    if (!symbols && !cLetters) {
      characters.push(...minus, ...nums);
    } else if (symbols && !cLetters) {
      characters.push(...minus, ...nums, ...chars);
    } else if (!symbols && cLetters) {
      characters.push(...mayus, ...minus, ...nums);
    } else {
      characters.push(...mayus, ...minus, ...nums, ...chars);
    }

    for (let i = 0; i < ch; i++) {
      let random_character =
        characters[Math.floor(Math.random() * characters.length)];
      passCharacters.push(random_character);
    }

    const password = passCharacters.join("");
    this.#show(password);
  }
  #show(password) {
    pass.innerText = password;
    passwordGenerated = password;
    console.log(password);
  }
}

const init = () => {
  console.log("Inició");
  let password = new Password();
  password.create(characters.value, symbols.checked, cLetters.checked);
  swal(
    "Ready!",
    `Your password: ${passwordGenerated} has been created`,
    "success"
  );
};

async function copy() {
  let txt = pass.innerText;

  try {
    await navigator.clipboard.writeText(txt);
    swal("Ready!", `Your password has been copied to clipboard!`, "success");
  } catch (error) {
    swal("Error!", `Could not copy to clipboard 😢`, "error");
  }
}

btn.addEventListener("click", init);
pass.addEventListener("click", copy);
