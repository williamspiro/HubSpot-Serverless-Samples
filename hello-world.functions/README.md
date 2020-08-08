# Hello, World! (GET)

A simple function that returns JSON, and `console.log`s "Hello, World!". This function is designed to get you up and running with your function as quick as possible, showing how to return data from your function, and log data as part of the function execution.

## Hitting the endpoint

The endpoint is executed with the GET request method:

```
GET /_hcms/api/hello-world
```

In vanilla JavaScript, this might look like:

```
fetch('/_hcms/api/hello-world')
.then(response => response.json())
.then(data => {
    console.log(data)
})
.catch(error => console.error(error))
```

## Configuration

This function relies on no configuration :)

## Example use cases:

- Say Hello!
