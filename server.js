const fs = require("fs");
// var pdfReader = require("pdfreader");

// let rows = {};
// var text = "";


// new pdfReader.PdfReader().parseFileItems('BLOJAF 172927.pdf', (err, item) => {
//   if(item !== undefined){
//     item.text && fs.appendFileSync('meuarquivo2.txt', item.text)
//   }  
// });

fs.readFile('meuarquivo2.txt', 'utf8' , (err, data) => {
  if (err) {
    console.log(err)
    return
  }
  const initial = parseInt(data.indexOf('DANFE')) + 5;
  console.log(data.substr(initial, 54))
})