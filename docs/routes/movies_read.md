## Read one movie

This route will return a single movie by ID.

There are four different cases to consider:

- `GET /movies/:movieId`
- `GET /movies/:movieId` (incorrect ID)
- `GET /movies/:movieId/theaters`
- `GET /movies/:movieId/reviews`

### GET /movies/:movieId

Create a route that responds to the following request:

```
GET /movies/:movieId
```

The response from the server should look like the following.

```json
{
  "data": {
    "id": 1,
    "title": "Spirited Away",
    "runtime_in_minutes": 125,
    "rating": "PG",
    "description": "Chihiro...",
    "image_url": "https://imdb-api.com/..."
  }
}
```

### GET /movies/:movieId (incorrect ID)

If the given ID does not match an existing movie, a response like the following should be returned:

```json
{
  "error": "Movie cannot be found."
}
```

The response _must_ have `404` as the status code.

### GET /movies/:movieId/theaters

Update your route so that it responds to the following request:

```
GET /movies/:movieId/theaters
```

This route should return all the `theaters` where the movie is playing. This means you will need to check
the `movies_theaters` table.

The response from the server for a request to `/movies/1/theaters` should look like the following.

```json
{
  "data": [
    {
      "theater_id": 2,
      "name": "Hollywood Theatre",
      "address_line_1": "4122 NE Sandy Blvd.",
      "address_line_2": "",
      "city": "Portland",
      "state": "OR",
      "zip": "97212",
      "created_at": "2021-02-23T20:48:13.342Z",
      "updated_at": "2021-02-23T20:48:13.342Z",
      "is_showing": true,
      "movie_id": 1
    }
    // ...
  ]
}
```

### GET /movies/:movieId/reviews

Update your route so that it responds to the following request:

```
GET /movies/:movieId/reviews
```

This route should return all the `reviews` for the movie, including all the `critic` details added to a `critic` key of the review.

The response from the server for a request to `/movies/1/reviews` should look like the following.

```json
{
  "data": [
    {
      "review_id": 1,
      "content": "Lorem markdownum ...",
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
    // ...
  ]
}
```
