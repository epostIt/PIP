import { sum } from "./Sum_Array";
test("sum() sums all the elements in an array", () => {
  expect(sum([1, 2, 3])).toBe(6);
});
