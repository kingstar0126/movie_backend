## Movies-Theaters

The `movies_theaters` table is a join table that connects movies with theaters. It represents which movies are being shown in which theaters. It also includes a key that represents whether or not a movie is currently showing at the theater, or if it has in the past.

- `movie_id`: (Foreign Key) A reference ID to a particular movie.
- `theater_id`: (Foreign Key) A reference ID to a particular theater.
- `is_showing`: (Boolean) A representation of whether or not the movie is currently showing in the referenced theater.

An example record looks like the following:

```json
{
  "movie_id": 1,
  "theater_id": 3,
  "is_showing": false
}
```
