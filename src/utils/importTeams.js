const request = require('request');

//
// Goal: Create a reusable function for getting the top 16 teams
//
// 1. Setup the "importTeams" function in utils/importTeams.js
// 2. Require the function in app.js and call it as shown below
// 3. The importTeams function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass importTeams data

const importTeams = (callback) => {
  const url = `https://api.opendota.com/api/teams`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to Dota services!', undefined);
    } else if (body.error) {
      callback(`Error: ${body.error}`, undefined);
    } else {
      callback(undefined, {
        top16: body.slice(0, 16)
      });
    }
  });
};

module.exports = importTeams;
