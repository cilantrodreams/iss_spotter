const request = require('request');
const {
  fetchMyIP,
  fetchCoordsByIp,
  fetchISSFlyOverTimes,
  nextISSTimesForMyLocation } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log('It worked! Returned IP:', ip);
// });

// fetchCoordsByIp('75.157.109.252', (error, data) => {
// console.log(error);
// console.log(data);
// });

// fetchISSFlyOverTimes({ latitude: '49.27670', longitude: '-123.13000' }, (error, data) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log('It worked! Returned :', data);
// });


nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  // loop through array of formatted times and print out the details
  passTimes.forEach((t) => {
    console.log(`Next pass at ${Date(t.risetime)} for ${t.duration} seconds!`);
  });

});