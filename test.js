import test from "node:test";
import assert from "node:assert";

test("example", () => {
  assert.equal(1, 1);
});

test("example", () => {
  assert.notEqual(1, 0, "1 is not equal to 0");
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

test("fetch poke api", async () => {
  const reponse = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  const json = await reponse.json();
  assert.equal(json.name, "ditto");
});

test("throw error sync", async () => {
  assert.throws(() => {
    throw new Error("Wrong value");
  }, /^Error: Wrong value$/);
});

test("throw error async", async () => {
  const callApi = async () => {
    try {
      const reponse = await fetch("https://pokeapi.co/api/v2/pokemoncho/ditto");
      const json = await reponse.json();
      return json;
    } catch {
      throw new Error("Wrong URL");
    }
  };

  assert.rejects(callApi, /^Error: Wrong URL$/);
});
