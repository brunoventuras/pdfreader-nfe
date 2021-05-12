const fs = require("fs");
const Tesseract = require("tesseract.js");

Tesseract.recognize(
  'nf/teste2.png',
  'por',
  { logger: m => console.log(m) }
).then(({ data: { text } }) => {
  console.log(text);
})
