import { searchArray } from "./Search_Array";

test("searchArray() should determine if an object exists in an array", () => {
  let userToFind = { name: "Charlie", age: 42, city: "Boston" };
  expect(searchArray(userToFind)).toBe(true);
});
