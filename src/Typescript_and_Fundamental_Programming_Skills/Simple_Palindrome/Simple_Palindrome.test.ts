import { simplePalindrome } from "./Simple_Palindrome";

test("simplePalidrome should be able to detect a numerical palidrome out of a 3 digit number", () => {
  expect(simplePalindrome(121)).toEqual(true);
  expect(simplePalindrome(122)).toEqual(false);
});

test("simplePalidrome should be able to detect an alphabetical palindrome out of a 3 letter word", () => {
  expect(simplePalindrome('aba')).toEqual(true);
  expect(simplePalindrome('abc')).toEqual(false);
});