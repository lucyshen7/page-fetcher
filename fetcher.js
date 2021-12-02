const url = process.argv[2];
const path = process.argv[3];
const fs = require('fs');
const request = require('request');

request(url, (error, response, body) => {
  if (!error) {
    const size = body.length;
    fs.writeFile(path, body, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      printResult(size, path); // file written successfully
    });
  } else {
    console.log('error:', error); // print the error if one occurred
  }
});

const printResult = (size, path) => {
  console.log(`Downloaded and saved ${size} bytes to ${path}`);
};