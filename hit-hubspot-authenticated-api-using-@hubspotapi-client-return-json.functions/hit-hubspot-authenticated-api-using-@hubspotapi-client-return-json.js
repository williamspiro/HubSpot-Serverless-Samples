// Require the @hubspot/api-client lib to make API calls to HubSpot APIs easily
// https://www.npmjs.com/package/@hubspot/api-client
const hubspot = require("@hubspot/api-client");
const hubspotClient = new hubspot.Client({ apiKey: process.env.API_KEY });

exports.main = (context, sendResponse) => {
  // Use the @hubspot/api-client to make a request to GET all contacts
  hubspotClient.crm.contacts
    .getAll()
    .then(results => {
      // Handle success

      // The console.log statement will appear in the terminal when you run the hs logs CMS CLI command
      // For full documentation, see: developers.hubspot.com/docs/cms/developer-reference/local-development-cms-cli#logs
      console.log(results);

      // sendResponse is what you will send back to services hitting your serverless function
      // Return the JSON response of the request to GET all contacts, as well as other JSON
      sendResponse({
        body: {
          someJson: "This is my custom API endpoint!",
          allContacts: results
        },
        statusCode: 200
      });
    })
    .catch(err => {
      // Handle error
      console.error(err);
      sendResponse({ body: err, statusCode: 500 });
    });
};
