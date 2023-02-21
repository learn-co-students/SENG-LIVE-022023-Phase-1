# PATCH & DELETE requests

## SWBAT

- [ ] Implement Update a resource with a Patch request
- [ ] Update the DOM pessimistically
- [ ] Delete a resource with a Delete request

### NOTE: Using JSON Server

- For today's exercise, to start the JSON server, run `json-server --watch db.json --routes routes.json`

### Deliverables

1. Make a PATCH request after the like button has been clicked to persist the updated number of likes.

2. Make a DELETE request after the delete button on a character card is clicked.

## Patch

Patch updates/modifies a resource.

```

// The url in a patch requires an id to identify the resource being updated.
// The HTTP method is 'PATCH'
// The body can take the full resource or one property of the resource.

fetch(url/:id, {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json'
    },
    body:JSON.stringify({prop:value})
})
```

## Delete

Delete removes a resource from the server. Unlike Post and Patch it doesn't require headers or a body, though some backend frameworks may require a header.

```
// Delete does require the method and the id of the resource being deleted.
fetch(url/:id, {
    method: 'DELETE',
})

```

### Resources

- [HTTP Verbs / JavaScript’s Fetch API](https://medium.com/@9cv9official/what-are-get-post-put-patch-delete-a-walkthrough-with-javascripts-fetch-api-17be31755d28)
