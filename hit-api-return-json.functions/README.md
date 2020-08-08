# Hit API and Return JSON (GET)

A simple function that hits the Star Wars API, and returns the JSON response from the external API.

## Hitting the endpoint

The endpoint is executed with the GET request method:

```
GET /_hcms/api/hit-api-return-json
```

In vanilla JavaScript, this might look like:

```
fetch('/_hcms/api/hit-api-return-json')
.then(response => response.json())
.then(data => {
    console.log(data)
})
.catch(error => console.error(error))
```

## Configuration

This function relies on no configuration :). If you wish to hit an authenticated API, you will need to create a [secret](https://developers.hubspot.com/docs/cms/features/serverless-functions#secrets), which is added to the functions scope in the `serverless.json` file, and accessed in your function JavaScript like `process.env.API_KEY`

## Example use cases:

- Make a requst to an external API, and return the data in your endpoint's response
