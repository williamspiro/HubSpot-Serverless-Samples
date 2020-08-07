// Require axios library to make API requests
const axios = require("axios");

// This function is executed when a request is made to the endpoint associated with this file in the serverless.json file
exports.main = (context, sendResponse) => {
  // Use axios to make a GET request to the Star Wars API https://swapi.dev/
  axios
    .get("https://swapi.dev/api/people/1/")
    // Create secrets for authenticated APIs, and access them like: process.env.API_KEY
    // Scope the API_KEY secret to your function in serverless.json
    // https://developers.hubspot.com/docs/cms/features/serverless-functions#secrets

    .then(function(response) {
      // Handle success

      // The console.log statement will appear in the terminal when you run the hs logs CMS CLI command
      // For full documentation, see: developers.hubspot.com/docs/cms/developer-reference/local-development-cms-cli#logs
      console.log("Data received from the search API:", response.data);

      // sendResponse is what you will send back to services hitting your serverless function
      sendResponse({ body: { response: response.data } });
    })
    .catch(function(error) {
      // Handle error
      sendResponse({ body: { error: error } });
    });
};
