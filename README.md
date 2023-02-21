# POST Requests

## SWBAT

- [ ] Use a form submission to make a POST request and Create data
- [ ] Understand the request object passed to fetch
- [ ] Render new Data on the DOM with optimistic rendering

### NOTE: Using JSON Server

- To start the JSON server, run `json-server --watch db.json --routes routes.json`

### Deliverables

1. Create a POST request when the form to create a new character is submitted

2. Create a POST request when the comment form is submitted and render new comment optimistically

## POST (Create)

Posts send data to the server. The information is usually sent from a FORM, creating a resource in the database. A POST is typically for creating new data instead of updating data, like PUT or PATCH.

A POST requires an additional argument, a request/config object.

```
// Method: The HTTP method used in this request. Fetch requests are GET by default. Though they can take a request object, it's not necessary. Other requests, such as POST, require the method to identify what type of request it is.

// Headers: An object that contains additional information for the request. The Content-Type indicates the original media type of the data.

// Body: The data from the request. Before the request can be sent the data must be converted to JSON.
fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body:JSON.stringify(formData)
})
```

### Resources

- [Dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)
