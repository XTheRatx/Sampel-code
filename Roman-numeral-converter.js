function convertToRoman(num) {
  var roman = "";

  var romanNumeralMap = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1]
  ];

  for (var i = 0; i < romanNumeralMap.length; i++) {
    var [romanDigit, value] = romanNumeralMap[i];
    while (num >= value) {
      roman += romanDigit;
      num -= value;
    }
  }

  return roman;
}

// Test the function
console.log(convertToRoman(36)); // should return "XXXVI"
