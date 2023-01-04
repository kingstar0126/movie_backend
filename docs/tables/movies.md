## Movies

The `movies` table represents movies stored in the application database. Each movie has the following fields:

- `movie_id`: (Primary Key) A unique ID for the movie.
- `title`: (String) The title of the movie.
- `runtime_in_minutes`: (Integer) The length of the movie in minutes.
- `rating`: (String) The rating given to the movie.
- `description`: (Text) A shortened description of the movie.
- `image_url`: (String) A URL to the movie's poster.

An example record looks like the following:

```json
{
  "movie_id": 1,
  "title": "Spirited Away",
  "runtime_in_minutes": 125,
  "rating": "PG",
  "description": "Chihiro and her parents are moving to a small Japanese town in the countryside, much to Chihiro's dismay. On the way to their new home, Chihiro's father makes a wrong turn and drives down a lonely one-lane road which dead-ends in front of a tunnel. Her parents decide to stop the car and explore the area. They go through the tunnel and find an abandoned amusement park on the other side, with its own little town...",
  "image_url": "https://imdb-api.com/images/original/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_Ratio0.6791_AL_.jpg",
  "created_at": "2021-02-23T20:48:13.315Z",
  "updated_at": "2021-02-23T20:48:13.315Z"
}
```
To create the `created_at` and `updated_at` fields you can use the timestamps method in your migration file (e.g. `table.timestamps(true, true);`). You can read more about timestamps [here](https://knexjs.org/#Schema-timestamps).
