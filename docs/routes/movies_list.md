## Get all movies

This route will return a list of all movies. Different query parameters will allow for limiting the data that is returned.

There are two different cases to consider:

- `GET /movies`
- `GET /movies?is_showing=true`

### GET /movies

Create a route that responds to the following request:

```
GET /movies
```

The response from the server should look like the following:

```json
{
  "data": [
    {
      "id": 1,
      "title": "Spirited Away",
      "runtime_in_minutes": 125,
      "rating": "PG",
      "description": "Chihiro ...",
      "image_url": "https://imdb-api.com/..."
    }
    // ...
  ]
}
```

### GET /movies?is_showing=true

Update your route so that it responds to the following request:

```
GET /movies?is_showing=true
```

In the event where `is_showing=true` is provided, the route should return _only those movies where the movie is currently showing in theaters._ This means you will need to check the `movies_theaters` table.

The response from the server should look identical to the response above _except_ that it may exclude some records.
