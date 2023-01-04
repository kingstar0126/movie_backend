const request = require("supertest");

const app = require("../../src/app");
const db = require("../../src/db/connection");

describe("Review Routes", () => {
  beforeAll(() => {
    return db.migrate
      .forceFreeMigrationsLock()
      .then(() => db.migrate.rollback(null, true))
      .then(() => db.migrate.latest());
  });

  beforeEach(() => {
    return db.seed.run();
  });

  afterAll(async () => {
    return await db.migrate.rollback(null, true).then(() => db.destroy());
  });

  describe("PUT /reviews/:reviewId", () => {
    test("should return a 404 if the ID given does not match any ID in the database", async () => {
      const response = await request(app).put("/reviews/999999999", {});

      expect(response.body.error).toMatch(/cannot be found/i);
      expect(response.statusCode).toBe(404);
    });

    test("updates an existing review, returning the updated review including the critic info", async () => {
      const data = { content: "Content" };
      const previous = await db("reviews").first();

      const response = await request(app)
        .put(`/reviews/${previous.review_id}`)
        .send({ data });

      expect(response.body.error).toBeUndefined();
      expect(response.body.data).toEqual(
        expect.objectContaining({
          ...previous,
          content: "Content",
          created_at: expect.any(String),
          updated_at: expect.any(String),
          critic: expect.objectContaining({
            preferred_name: expect.any(String),
            surname: expect.any(String),
            organization_name: expect.any(String),
          }),
        })
      );

      const updatedReview = await db("reviews")
        .where({ review_id: previous.review_id })
        .first();

      expect(updatedReview.content).toBe("Content");
    });
  });

  describe("DELETE /reviews/:reviewId", () => {
    test("should return a 404 if the ID given does not match any ID in the database", async () => {
      const response = await request(app).delete("/reviews/9999", {});
      expect(response.body.error).toBeDefined();
      expect(response.statusCode).toBe(404);
    });

    test("should delete the review record when given an existing review_id", async () => {
      const previous = await db("reviews").first();

      const response = await request(app).delete(
        `/reviews/${previous.review_id}`
      );

      expect(response.body.error).toBeUndefined();
      expect(response.statusCode).toBe(204);

      const deletedReview = await db("reviews")
        .where({
          review_id: previous.review_id,
        })
        .first();

      expect(deletedReview).toBeUndefined();
    });
  });
});
