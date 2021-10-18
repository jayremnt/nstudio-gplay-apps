const gplayHandler = require('google-play-scraper');
const fs = require('fs');

gplayHandler.developer({devId: 'NorthStudio'}).then(data => {
  data = JSON.stringify(data);
  console.log(data);
  fs.writeFile('nstudio.json', data, (e) => {
    if (e) {
      console.log(e);
    }
    console.log("saved");
  });
});

