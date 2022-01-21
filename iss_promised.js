const request = require('request-promise-native');

// Make API call to get users's ip address
// Return promise of request for ip data, returned as JSON String
const fetchMyIP = function() {
  return request('https://api.ipify.org?format=json');
};

// Takes a JSON string as input
// Makes request to API to get geographical coordinates using an ip address
// return promise of request for latitude and longitude
const fetchCoordsByIp = function(body) {
  const ip = JSON.parse(body).ip;
  return request(`https://api.freegeoip.app/json/${ip}?apikey=1599f620-7a56-11ec-be5a-69af916c679f`);
};

const fetchISSFlyOverTimes = function(body) {
  const { latitude, longitude } = JSON.parse(body);
  return request(`https://isss-pass.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`);
};

const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
    .then(fetchCoordsByIp)
    .then(fetchISSFlyOverTimes)
    .then((data) => {
      const { response } = JSON.parse(data);
      return response;
    });
};
module.exports = { nextISSTimesForMyLocation };