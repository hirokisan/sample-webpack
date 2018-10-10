const Jimp = require('jimp');

Jimp.read('./src/img/icon.png', function (err, image) {
  if (err) throw err;
  image.resize(256, 256)            // resize
    .write("./src/img/tmp/big-icon.png"); // save
});
