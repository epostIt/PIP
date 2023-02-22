//Write a function called findMax that takes a 2D array of numbers and returns the maximum value in the array. 
//For example, if the input array is[[1, 2, 3], [4, 5, 6], [7, 8, 9]], the output should be 9.
import {findMax} from './Multidimensional_Largest_Element'
test('findMax() should accept a 2D array of numbers', () => {
    expect(() => findMax([[1],[2]])).not.toThrow();
})

test("findMax() should return the maximum value in a simple multidimensional array", () => {
  expect(findMax([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toBe(9);
});
test('findMax should return the maximum value in a complex multidimensional array', () => {
    expect(findMax([[1, 5, 3], [14, 2, 9, 23]])).toBe(23)
    expect(findMax([[11, 2, 3], [1, 2, 9, 2], [4, 5, 1]])).toBe(11)
    expect(findMax([[11, 2, 3], [1, 2, 9, 2], [4, 5, 99]])).toBe(99)
    expect(findMax([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toBe(9)
})