module.exports = function toReadable(number) {
  if (number === 0) return "zero";

  if (number <= 19) {
    return numberMap[number];
  }
   
  if (number <= 99) {
    const lastNumber = toReadable(number % 10);
    const lastNuberStr = lastNumber === "zero" ? "" : lastNumber;
    return `${numberMap[`${Math.floor(number / 10)}0`]} ${lastNuberStr}`.trim()
  }
   
  if (number <= 999) {
    const lastNumber = toReadable(number % 100);
    const lastNuberStr = lastNumber === "zero" ? "" : lastNumber;
    return `${numberMap[Math.floor(number / 100)]} hundred ${lastNuberStr}`.trim();
  } 
 }

const numberMap = {
  0: "",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
  30: "thirty",
  40: "forty",
  50: "fifty",
  60: "sixty",
  70: "seventy",
  80: "eighty",
  90: "ninety",
  100: "hundred"
}
