function decrypt(code) {
  const reverseMorseCode = {
    ".-": "A",
    "-...": "B",
    "-.-.": "C",
    "-..": "D",
    ".": "E",
    "..-.": "F",
    "--.": "G",
    "....": "H",
    "..": "I",
    ".---": "J",
    "-.-": "K",
    ".-..": "L",
    "--": "M",
    "-.": "N",
    "---": "O",
    ".--.": "P",
    "--.-": "Q",
    ".-.": "R",
    "...": "S",
    "-": "T",
    "..-": "U",
    "...-": "V",
    ".--": "W",
    "-..-": "X",
    "-.--": "Y",
    "--..": "Z",
    "-----": "0",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    ".-.-.-": ".",
    "--..--": ",",
    "..--..": "?",
    ".----.": "'",
    "-.-.--": "!",
    "-..-.": "/",
    "-.--.": "(",
    "-.--.-": ")",
    ".-...": "&",
    "---...": ":",
    "-.-.-.": ";",
    "-...-": "=",
    ".-.-.": "+",
    "-....-": "-",
    "..--.-": "_",
    ".-..-.": '"',
    "...-..-": "$",
    ".--.-.": "@",
    "/": " ", // Include space character
  };

  let decryptedText = "";
  const codeWords = code.split("  "); // Split by double spaces to separate words
  for (let word of codeWords) {
    const wordChars = word.split(" "); // Split by single spaces to separate characters
    for (let char of wordChars) {
      decryptedText += reverseMorseCode[char] || char;
    }
    decryptedText += " "; // Add space between words
  }
  return decryptedText.trim();
}

function decryptAndDisplay() {
  const code = document.getElementById("code").value;
  const decryptedText = decrypt(code);
  document.getElementById("decryptedText").innerText = decryptedText;
}
