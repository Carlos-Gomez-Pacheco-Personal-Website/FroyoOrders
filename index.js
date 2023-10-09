// Prompt the user for a list of integers separated by commas.
const userInputString = prompt(
  "Please enter your Froyo flavors, we have Vanilla, Strawberry and coffee for now. Use the example and replace with your selection:",
  (placeholder = " Vanilla - Vanilla - Vanilla - Strawberry - Coffee - Coffee")
);

// Split the string of numbers into an array of strings.
const flavors = userInputString.split("-");

let flavorCount = {};
for (let i = 0; i < flavors.length; i++) {
  let flavor = flavors[i].trim();
  if (flavorCount[flavor]) {
    flavorCount[flavor]++;
  } else {
    flavorCount[flavor] = 1;
  }
}

console.log(`You have given ${getLength(flavors)} orders.`);
console.log(`This is your final order is = ${flavors}`);
console.table(flavors);
// === EDIT THE CODE BELOW ===
// Complete the functions below to make the program work!

/**
 * @param {string[]} flavors an array of integers
 * @returns {string} the length of the array
 */
function getLength(flavors) {
  return flavors.length;
}
