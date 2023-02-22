import { rollDie } from "./Roll_Die";
describe("Write a program that rolls a pair of die until a double is rolled using a do-while loop. Keep track of previous rolls with an array", () => {
  test("rollDie() should use a do-while loop", () => {
    // there is not a test I can write for this, please implement this prompt using a do-while loop
  });
  test("rollDie should keep track of rolls in an array", () => {
    let rolls = rollDie();
    expect(Array.isArray(rolls)).toBe(true);
  });
  test("rollDie() should roll a dice until a double is rolled", () => {
    let rolls = rollDie();
    let lastElement = rolls[rolls.length - 1];
    let secondToLastElement = rolls[rolls.length - 2];
    expect(lastElement).toEqual(secondToLastElement);
  });

  test("rollDie() should only roll numbers between 1 and 6", () => {
    let rolls = rollDie();
    expect(rolls.every((roll: number) => roll >= 1 && roll <= 6)).toBe(true);

    //repeat test to make sure it wasn't chance that we didn't get a number outside of 1-6
    rolls = rollDie();
    expect(rolls.every((roll: number) => roll >= 1 && roll <= 6)).toBe(true);
  });
});
