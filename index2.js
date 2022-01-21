const { nextISSTimesForMyLocation } = require('./iss_promised');

nextISSTimesForMyLocation()
  .then((passTimes) => {
    passTimes.forEach((t) => {
      console.log(`Next pass at ${Date(t.risetime)} for ${t.duration} seconds!`);
    });
  })
  .catch((error) => {
    console.log("it didn't work: ", error.message);
  });