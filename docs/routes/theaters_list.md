## Get all theaters

This route will return a list of all theaters. Different query parameters will allow for additional information to be included in the data that is returned.

There is one case to consider:

- `GET /theaters`

### GET /theaters

Create a route that responds to the following request:

```
GET /theaters
```

This route should return all the `theaters` and, the movies playing at each theatre added to the `movies` key. This means you will need to check the `movies_theaters` table.

The response from the server should look like the following.

```json
{
  "data": [
    {
      "theater_id": 1,
      "name": "Regal City Center",
      "address_line_1": "801 C St.",
      "address_line_2": "",
      "city": "Vancouver",
      "state": "WA",
      "zip": "98660",
      "created_at": "2021-02-23T20:48:13.335Z",
      "updated_at": "2021-02-23T20:48:13.335Z",
      "movies": [
        {
          "movie_id": 1,
          "title": "Spirited Away",
          "runtime_in_minutes": 125,
          "rating": "PG",
          "description": "Chihiro...",
          "image_url": "https://imdb-api.com...",
          "created_at": "2021-02-23T20:48:13.342Z",
          "updated_at": "2021-02-23T20:48:13.342Z",
          "is_showing": false,
          "theater_id": 1
        }
        // ...
      ]
    }
    // ...
  ]
}
```

> **Hint** The `mapProperties` function that you created earlier is similar to the `.map()` method of an array. It must return the same number of elements (aka properties) as it is given.

Using `mapProperties` with the following configuration will result in the movie related fields being mapped to a `movies` array:

```js
const mapProperties = require("../utils/map-properties");

const data = [
  {
    theater_id: 1,
    name: "Regal City Center",
    movie_id: 1,
    title: "Spirited Away",
    rating: "PG",
  },
  {
    theater_id: 1,
    name: "Regal City Center",
    movie_id: 2,
    title: "Interstellar",
    rating: "PG-13",
  },
];

const addMovies = mapProperties({
  movie_id: "movies[0].movie_id",
  title: "movies[0].title",
  rating: "movies[0].rating",
});
```

However, since the index of movies is hard codes to `movies[0]`, each record just overwrites the movie at index 0.

What you want is to _collapse_ or _reduce_ the theatre data and _map_ the movies to an array property on the theatre.

With an array, if you want to get back fewer elements than the source array, you must use the `.reduce()` method; `.map()` will always return exactly the same number of elements as the source array.

All of this is to help you understand that you will not be able to use the `mapProperties` function to "map" the movie properties to match the required format for the `/theatres` route.

Implementing this type of reducer is beyond the scope of this module, so this project contains a reducer that is already implemented for you, it is named `reduceProperties`, and all you need to do is configure and use it.

The following section demonstrates how to use the `reduceProperties` function.

## `reduceProperties` function

The `reduceProperties` function is located in `src/utils/reduce-properties.js`.

The `reduceProperties` function accepts two parameters, a `uniqueField`, and `configuration`.

- The uniqueField parameter is the name of the field that contains the unique identifier for each row in the result set. In this case you will use `"theater_id"` for this parameter.
- The configuration parameter is an object where the key specifies the original property name, and the value is an _array_ that specifies the path to the new property name.

Assume you have the following array data:

```js
const data = [
  {
    theater_id: 1,
    name: "Regal City Center",
    movie_id: 1,
    title: "Spirited Away",
    rating: "PG",
  },
  {
    theater_id: 1,
    name: "Regal City Center",
    movie_id: 2,
    title: "Interstellar",
    rating: "PG-13",
  },
];
```

Then you would use the following configuration to _reduce_ the array to one theatre element with a "movies" property:

```json
{
  "movie_id": ["movies", null, "movie_id"],
  "title": ["movies", null, "title"],
  "rating": ["movies", null, "rating"]
}
```

In the above configuration, the values specify the "path" of the property. However, it must be an _array_ where each element in the array represents a part of the path to the new property.
Unlike `mapProperties`, `reduceProperties` will dynamically calculate the array index of an array property by replacing any `null` value with the next index.
So, the above configuration will replace null with `movies.length` during the mapping process, thus inserting a new movie rather than overwriting the existing one.

Review the following example:

```js
const reduceProperties = require("../utils/reduce-properties");

const data = [
  {
    theater_id: 1,
    name: "Regal City Center",
    movie_id: 1,
    title: "Spirited Away",
    rating: "PG",
  },
  {
    theater_id: 1,
    name: "Regal City Center",
    movie_id: 2,
    title: "Interstellar",
    rating: "PG-13",
  },
];

const reduceMovies = reduceProperties("theater_id", {
  movie_id: ["movies", null, "movie_id"],
  title: ["movies", null, "title"],
  rating: ["movies", null, "rating"],
});

console.log(JSON.stringify(reduceMovies(data), null, 4));
```

Will print out the following:

```json
[
  {
    "theater_id": 1,
    "name": "Regal City Center",
    "movies": [
      {
        "movie_id": 1,
        "title": "Spirited Away",
        "rating": "PG"
      },
      {
        "movie_id": 2,
        "title": "Interstellar",
        "rating": "PG-13"
      }
    ]
  }
]
```

You are not required to have a `null` value in the configuration value array. You can use `reduceProperties` to map any property values you like:

For example, the following code:

```js
const reduceTheaterAndMovies = reduceProperties("theater_id", {
  theater_id: ["theater", "theater_id"],
  name: ["theater", "name"],
  movie_id: ["movies", null, "movie_id"],
  title: ["movies", null, "title"],
  rating: ["movies", null, "rating"],
});

console.log(JSON.stringify(reduceTheaterAndMovies(data), null, 4));
```

Will print out the following:

```json
[
  {
    "theater": {
      "theater_id": 1,
      "name": "Regal City Center"
    },
    "movies": [
      {
        "movie_id": 1,
        "title": "Spirited Away",
        "rating": "PG"
      },
      {
        "movie_id": 2,
        "title": "Interstellar",
        "rating": "PG-13"
      }
    ]
  }
]
```
