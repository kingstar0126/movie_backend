## Theaters

The `theaters` table represents movie theaters. Each theater has the following fields:

- `theater_id`: (Primary Key) A unique ID for the theater.
- `name`: (String) The name of the theater.
- `address_line_1`: (String) The first line of the address of the theater.
- `address_line_2`: (String) The second line of the address of the theater.
- `city`: (String) The city in which the theater is located.
- `state`: (String) The state in which the theater is located.
- `zip`: (String) The zip in which the theater is located.

An example record looks like the following:

```json
{
  "theater_id": 1,
  "name": "Hollywood Theatre",
  "address_line_1": "4122 NE Sandy Blvd.",
  "address_line_2": "",
  "city": "Portland",
  "state": "OR",
  "zip": "97212",
  "created_at": "2021-02-23T20:48:13.315Z",
  "updated_at": "2021-02-23T20:48:13.315Z"
}
```
To create the `created_at` and `updated_at` fields you can use the timestamps method in your migration file (e.g. `table.timestamps(true, true);`). You can read more about timestamps [here](https://knexjs.org/#Schema-timestamps).
