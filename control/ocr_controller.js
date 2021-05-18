const fs = require("fs");
const Tesseract = require("tesseract.js");
const img = './nf/teste2.png';

module.exports = {
  async index(request, response, next){
      try {

        const result = await Tesseract.recognize(
          img,
          'por',
          { logger: m => console.log(m) }
        ).then(({ data: { text } }) => {
          console.log(text);
          return text;
        })

        return response.send(result)


      } catch (error) {

          next(error)
      }
  }
}
