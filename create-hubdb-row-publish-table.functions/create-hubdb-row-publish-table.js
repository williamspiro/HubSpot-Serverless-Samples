// Require axios to make API requests in the function
const axios = require("axios");

exports.main = ({ body }, sendResponse) => {
  // Format API URLs
  // Requires HubDB table with name donations. Columns: name (text), amount (number)
  const API_HUBDB_BASE =
    "https://api.hubspot.com/cms/v3/hubdb/tables/donations";
  const UPDATE_TABLE_API_URI =
    API_HUBDB_BASE + "/rows?hapikey=" + process.env.API_KEY;
  const PUBLISH_TABLE_API_URI =
    API_HUBDB_BASE + "/draft/push-live?hapikey=" + process.env.API_KEY;

  // Build HubDB table row to create with data submitted to function in POST request
  let name = body.name;
  let amount = body.amount;
  let requestBody = {
    values: {
      name: name,
      amount: amount
    }
  };

  // Create HubDB table row
  axios
    .post(UPDATE_TABLE_API_URI, requestBody)
    .then(function(response) {
      // Log success response of the HubDB table create row API call
      console.log("HubDB table updated");
      console.log(response.data);
      console.log(response.status);

      // Publish HubDB Table
      axios
        .post(PUBLISH_TABLE_API_URI, {
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(function(response) {
          // Log success response of the publish HubDB table API call
          console.log("HubDB table publish worked");
          console.log(response.statusText);
          console.log(response.status);
        })
        .catch(function(error) {
          // Log failure response of the publish HubDB table API call
          console.log("HubDB table publish failed");
          console.log(error.response.data);
          console.log(error.response.status);
        });

      // Send success response that the dontaion was received
      sendResponse({
        statusCode: 200,
        body: {
          message: "Donation recieved"
        }
      });
    })
    .catch(function(error) {
      // Log failure response of the HubDB table create row API call
      console.log("Failed to update HubDB table");
      console.log(error.response.data);
      console.log(error.response.status);

      // Send failure response that the dontaion was received
      sendResponse({
        statusCode: 500,
        body: {
          message: "error"
        }
      });
    });
};
