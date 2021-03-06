
var fs = require('fs');

async function getInstagramPhotos(colCount){

  var ig = await require('instagram-scraping');
  let row = [];
  let photorows = [];
  let results = await ig.scrapeTag('tijuana');
    let allphotos = results.medias;
    let cols = Math.ceil(allphotos.length / colCount);
    for(let i = 1; i < allphotos.length + 1; i++){
      console.log(i, 'yo')
      row.push(allphotos[i - 1])
      if( (i % cols) == 0){
        photorows = [row, ...photorows];
        row = [];
      }
    }
    if( row.length > 0){
      photorows = [row, ...photorows];
    }
    console.log(photorows[0][0])
   return photorows;
}
async function saveToFile(){
  let photoData = await getInstagramPhotos(3);

  fs.writeFile('src/scrapedData.json', JSON.stringify(photoData), function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
}

saveToFile();
