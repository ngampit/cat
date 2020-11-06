// asyncBreeds.js
const fs = require('fs');
const { callbackify } = require('util');

const breedDetailsFromFile = function(breed, functionToRunWhenThingsAreDone) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    if (!error) functionToRunWhenThingsAreDone(data,null);
    else functionToRunWhenThingsAreDone(null,error);
  });
  // ISSUE: Attempting to return data out here will also not work.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined.
};

// // we try to get the return value
// const bombay = breedDetailsFromFile('Bombay');
// console.log('Return Value: ', bombay); // => will NOT print out details, instead we will see undefined!


const printOutCatBreed = (breed,error) => {
    console.log('Return Value: ',breed)
    console.log('error',error)
}

breedDetailsFromFile('Bombay',printOutCatBreed)

module.exports = breedDetailsFromFile;
