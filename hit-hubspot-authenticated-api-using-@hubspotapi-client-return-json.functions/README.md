# Hit HubSpot Authenticated API using @hubspot/api-client and Return JSON (GET)

A function that hits the authenticated HubSpot GET all contacts API using the [@hubspot/api-client](https://www.npmjs.com/package/@hubspot/api-client), and returns the JSON response from the external API.

## Hitting the endpoint

The endpoint is executed with the GET request method:

```
GET /_hcms/api/hit-hubspot-authenticated-api-using-@hubspotapi-client-return-json
```

In vanilla JavaScript, this might look like:

```
fetch('/_hcms/api/hit-hubspot-authenticated-api-using-@hubspotapi-client-return-json')
.then(response => response.json())
.then(data => {
    console.log(data)
})
.catch(error => console.error(error))
```

## Configuration

This function requires creating a [secret](https://developers.hubspot.com/docs/cms/features/serverless-functions#secrets) named `API_KEY`, which is added to the functions scope in the `serverless.json` file, and accessed in your function JavaScript like `process.env.API_KEY`

## Example use cases:

- Make a requst to a HubSpot authenticated API, and return the data in your endpoint's response
