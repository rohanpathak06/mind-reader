const symbolsDiv = document.getElementById("symbols");
const result = document.getElementById("result");

const emojis = ["★", "☀", "☂", "☁", "☯", "☮", "✈", "♞", "♫", "⚡"];
let magicSymbol = emojis[Math.floor(Math.random() * emojis.length)];

function generateSymbols() {
  symbolsDiv.innerHTML = "";
  for (let i = 0; i < 100; i++) {
    let symbol = (i % 9 === 0) ? magicSymbol : emojis[Math.floor(Math.random() * emojis.length)];
    const div = document.createElement("div");
    div.className = "symbol";
    div.textContent = `${i} : ${symbol}`;
    symbolsDiv.appendChild(div);
  }
}

function reveal() {
  result.textContent = `✨ Your symbol is: ${magicSymbol}`;
}

generateSymbols();
