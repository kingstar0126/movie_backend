## Update review

This route will allow you to partially or fully update a review. If the ID is incorrect, a `404` will be returned.

### UPDATE /reviews/:reviewId

Create a route that responds to the following request:

```
PUT /reviews/:reviewId
```

A body like the following should be passed along with the request:

```json
{
  "score": 3,
  "content": "New content..."
}
```

The response should include the entire review record with the newly patched content, and the critic information set to the `critic` property.

```json
{
  "data": {
    "review_id": 1,
    "content": "New content...",
    "score": 3,
    "created_at": "2021-02-23T20:48:13.315Z",
    "updated_at": "2021-02-23T20:48:13.315Z",
    "critic_id": 1,
    "movie_id": 1,
    "critic": {
      "critic_id": 1,
      "preferred_name": "Chana",
      "surname": "Gibson",
      "organization_name": "Film Frenzy",
      "created_at": "2021-02-23T20:48:13.308Z",
      "updated_at": "2021-02-23T20:48:13.308Z"
    }
  }
}
```

### UPDATE /reviews/:reviewId (incorrect ID)

If the given ID does not match an existing review, a response like the following should be returned:

```json
{
  "error": "Review cannot be found."
}
```

The response _must_ have `404` as the status code response.
