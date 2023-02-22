import { largestNumberGenerator } from "./Create_Largest_Number";

test("largestNumberGenerator() should take 3 individual numbers and find the largest number that can be made from them", () => {
  expect(largestNumberGenerator([5, 3, 6])).toStrictEqual([6, 5, 3]);
});
