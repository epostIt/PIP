import { complexPalindrome } from "./Complex_Palindrome";


test("complexPalidrome should be able to detect a palindrome out of any number", () => {
  expect(complexPalindrome(1221)).toEqual(true);
  expect(complexPalindrome(1222)).toEqual(false);
  expect(complexPalindrome(1)).toEqual(false);
  expect(complexPalindrome(12344321)).toEqual(true);
});

test("complexPalidrome should be able to detect an alphabetical palindrome of any length", () => {
    expect(complexPalindrome("mom")).toEqual(true);
    expect(complexPalindrome("pop")).toEqual(true);
    expect(complexPalindrome("rotor")).toEqual(true);
    expect(complexPalindrome("hannah")).toEqual(true);
})