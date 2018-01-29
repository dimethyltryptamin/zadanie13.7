var fs = require('fs');
var sciezka = '.';

fs.readdir(sciezka, function(err, pliki){
    fs.writeFile('pliki.txt', pliki, (err) => {
  if (err) throw err;
  console.log('Zapisano');
});
});