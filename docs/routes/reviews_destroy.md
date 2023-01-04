## Destroy review

This route will delete a review by ID. If the ID is incorrect, a `404` will be returned.

### DELETE /reviews/:reviewId

Create a route that responds to the following request:

```
DELETE /reviews/:reviewId
```

The server should respond with `204 No Content`.

### DELETE /reviews/:reviewId (incorrect ID)

If the given ID does not match an existing review, a response like the following should be returned:

```json
{
  "error": "Review cannot be found."
}
```

The response _must_ have `404` as the status code response.
