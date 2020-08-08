exports.main = (context, sendResponse) => {
  // your code called when the function is executed

  // console.log statements will appear in the terminal when you run the hs logs CMS CLI command to view function logs
  // For full documentation, see: developers.hubspot.com/docs/cms/developer-reference/local-development-cms-cli#logs
  console.log("Hello, World!");

  // sendResponse is what you will send back to services hitting your serverless function
  sendResponse({
    body: {
      response: "Hello, World!"
    },
    statusCode: 200
  });
};
