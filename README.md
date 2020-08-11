# HubSpot-Serverless-Samples

HubSpot serverless function samples. To utilize a function, upload the entire `.functions` folder, and read the `README.md` for details on configuration.

1. **[Hello, World! (GET)](https://github.com/williamspiro/HubSpot-Serverless-Samples/tree/master/hello-world.functions)** - A simple endpoint that returns "Hello, World!".

2. **[Hit API and Return JSON (GET)](https://github.com/williamspiro/HubSpot-Serverless-Samples/tree/master/hit-api-return-json.functions)** - An endpoint that hits an external API, and returns the JSON response.

3. **[Hit HubSpot Authenticated API using @hubspot/api-client and Return JSON (GET)](https://github.com/williamspiro/HubSpot-Serverless-Samples/tree/master/hit-hubspot-authenticated-api-using-@hubspotapi-client-return-json.functions)** - An endpoint that hits the authenticated HubSpot GET all contacts API using the [@hubspot/api-client](https://www.npmjs.com/package/@hubspot/api-client), and returns the JSON response from the external API.

4. **[Create HubDB Table Row and Publish Table (POST)](https://github.com/williamspiro/HubSpot-Serverless-Samples/tree/master/create-hubdb-row-publish-table.functions)** - An endpoint that accepts request body JSON through a POST request, that creates a HubDB table row based on the submitted data, and published the table.
