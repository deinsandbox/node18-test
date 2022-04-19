import test from "node:test";
import assert from "node:assert";
import fetch from "node:fetch";

test("example", () => {
  assert.equal(1, 1);
});

test("example", () => {
  assert.equal(1, 0, "1 is not equal to 0");
});

test("example", () => {
  assert.deepEqual({ a: 1 }, { a: 1 }, "Objects are not equal");
});

test("asyn test example", async () => {
  const number = await Promise.resolve(3);
  assert.equal(number, 3, "number is not equal to 3");
});

test("try Array.findLast", () => {
  const numbers = [2, 4, 6, 8];
  const lastEven = numbers.findLast((n) => n % 2 === 0);
  assert.equal(lastEven, 8, "last even number is not 8");
});

test("try Array.findLastIndex", () => {
  const numbers = [2, 4, 6, 8];
  const lastEvenIndex = numbers.findLastIndex((n) => n % 2 === 0);
  assert.equal(lastEvenIndex, 3, "last even index is not 3");
});

test("fetch", () => {
  const reponse = fetch()
});
