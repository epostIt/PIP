//Write a function called transpose that takes a 2D array of numbers and returns a new 2D array that is the transpose of the input array.
//The transpose of a matrix is a new matrix that has the rows and columns of the original matrix swapped.
//For example, if the input array is[[1, 2], [3, 4], [5, 6]], the output array should be[[1, 3, 5], [2, 4, 6]].

import { transpose } from "./Multidimensional_Transpose";
test("transpose() should accept a 2D array of numbers", () => {
    expect(() => transpose([[1], [2]])).not.toThrow();
})

test("transpose() should swap rows and columns of the original matrix", () => {
  expect(
    transpose([
      [1, 2],
      [3, 4],
      [5, 6],
    ])
  ).toStrictEqual([
    [1, 3, 5],
    [2, 4, 6],
  ]);

});

test("transpose() should be able to handle arrays of multiple sizes", () => {
  expect(
    transpose([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ])
  ).toStrictEqual([
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
  ]);
    
    expect(transpose([[1], [2], [3]])).toStrictEqual([[1, 2, 3]]);
});
