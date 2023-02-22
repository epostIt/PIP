import { findLongestString } from "./Find_Longest_String";
test("findLongestString() should return the longest string in the array", () => {
  const stringArray = ["apple", "banana", "kiwi", "grapefruit"];
  expect(findLongestString(stringArray)).toBe("grapefruit");
});
