const fs = require("fs");
const Tesseract = require("tesseract.js");

const { createCanvas, loadImage } = require('canvas')
const canvas = createCanvas(780, 1280)
const ctx = canvas.getContext('2d')

// Write "Awesome!"
// ctx.font = '30px Impact'
// ctx.rotate(0.1)
// ctx.fillText('Awesome!', 50, 100)

// Draw line under text
// var text = ctx.measureText('Awesome!')
// ctx.strokeStyle = 'rgba(10,150,0,0.5)'
// ctx.strokeRect(10, 10, 100, 100);
ctx.beginPath()
// ctx.lineTo(50, 102)
// ctx.arc(0, 0, 160, 0, Math.PI * 2, true)
// ctx.rect(600,300,520,45)
ctx.rect(50,50,1280,780)
ctx.clip()
// ctx.lineTo(50 + text.width, 102)
ctx.stroke()
// ctx.scale(1.6,1.5)
// ctx.scale(2.5,2)

module.exports = {
  async index(request, response, next){
      try {

        const myimg = await loadImage(`./Upload/${request.file.filename}`).then((image) => {
          ctx.drawImage(image, 0, 0, 720, 1280)
          return canvas.toDataURL();
        }).catch(err => {
          console.log('Ops!', err)
        })
        let base64Image = myimg.split(';base64,').pop();
        fs.writeFile('./Upload/image.png', base64Image, {encoding: 'base64'}, function(err) {
          console.log('File created');
        });

        const result = await Tesseract.recognize(
          // `./Upload/${request.file.filename}`,
          './Upload/image.png',
          'por',
          // { logger: m => console.log(m) }
        ).then(({ data: { text } }) => {
          console.log(text);
          return text;
        })

        return response.json({
          "resultado":result,
          "img":myimg
        })


      } catch (error) {

          next(error)
      }
  }
}
