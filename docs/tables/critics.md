## Critics

The `critics` table represents movie critics who have created reviews for movies. Each critic has the following fields:

- `critic_id`: (Primary Key) A unique ID for the critic.
- `preferred_name`: (String) The critic's preferred first name.
- `surname`: (String) The critic's last name.
- `organization_name`: (String) The name of the organization the critic works for.

An example record looks like the following:

```json
{
  "critic_id": 1,
  "preferred_name": "Chana",
  "surname": "Gibson",
  "organization_name": "Film Frenzy",
  "created_at": "2021-02-23T20:48:13.315Z",
  "updated_at": "2021-02-23T20:48:13.315Z"
}
```
To create the `created_at` and `updated_at` fields you can use the timestamps method in your migration file (e.g. `table.timestamps(true, true);`). You can read more about timestamps [here](https://knexjs.org/#Schema-timestamps).
