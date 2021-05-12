const fs = require("fs");
// var pdfReader = require("pdfreader");

// let rows = {};
// var text = "";


// new pdfReader.PdfReader().parseFileItems('nf/BLOJAF 172927.pdf', (err, item) => {
//   if(item !== undefined){
//     item.text && fs.appendFileSync('meuarquivo2.txt', item.text)
//   }
// });

fs.readFile('nf/nfBRUNO.pdf', 'base64' , (err, data) => {
  if (err) {
    console.log(err)
    return
  }
  // const initial = parseInt(data.indexOf('DANFE')) + 5;
  // console.log(data.substr(initial, 54))
  // console.log(data)
  let buff = new Buffer(data, 'base64');
  let text = buff.toString('ascii');

  console.log('"' + data + '" converted from Base64 to ASCII is "' + text + '"');
})

