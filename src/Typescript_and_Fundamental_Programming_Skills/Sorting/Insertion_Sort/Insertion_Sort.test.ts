// Implement insertion sort

import { sort } from "./Insertion_Sort";
test("sort() should use insertion sort to sort a small array", () => {
    // expect(sort([2, 9, 5, 4, 8, 1, 6])).toEqual([1, 2, 4, 5, 6, 8, 9]);
    expect(sort([3,2,1])).toEqual([1,2,3])
});

// test("sort() should use insertion sort to sort a large array", () => {
//     expect(sort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3])).toEqual([
//       1, 1, 2, 3, 3, 4, 5, 5, 6, 9,
//     ]);
// })

// test("sort() should use insertion sort to sort an array of negative numbers", () => {
//     expect(sort([10, -5, 8, 0, 7, 2, -3])).toEqual([-5, -3, 0, 2, 7, 8, 10]);
// })
