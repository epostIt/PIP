//Find the largest element in an array using a for each loop

import { findLargestElement } from "./Find_Largest_Element";
test("findLargestElement() should return the largest element in the array", () => {
  let testArray = [55, 63, -1, 12, 37];
  expect(findLargestElement(testArray)).toBe(63);
});

test("findLargestElement() should use a foreach loop", () => {
  let testArray = [55, 63, -1, 12, 37];
  const spy = jest.spyOn(testArray, "forEach");
  expect(spy).toHaveBeenCalled();
});