const gplayHandler = require('google-play-scraper');
const fs = require('fs');

gplayHandler.developer({devId: 'NorthStudio'}).then(data => {
  let json = JSON.stringify({
    data: JSON.stringify(data)
  });
  fs.writeFile('nstudio.json', json, (e) => {
    if (e) {
      console.log(e);
    }
    console.log("saved");
  });
});

