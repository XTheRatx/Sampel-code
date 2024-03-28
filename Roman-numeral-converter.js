// Funktionen `convertToRoman` tager et tal som input og returnerer dets romertalsækvivalent som en streng.
function convertToRoman(num) {
  // Initialiserer en tom streng, som vil blive brugt til at opbygge det endelige romertal.
  var roman = "";

  // Definerer et array af arrays, hvor hvert underarray indeholder et romertal (som streng) og dets numeriske værdi.
  // Dette array dækker alle de specielle tilfælde, der er nødvendige for korrekt at omdanne et tal til romertal.
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

  // En for-loop der gennemgår hvert element i `romanNumeralMap`.
  for (var i = 0; i < romanNumeralMap.length; i++) {
    // Udpakker det romertal og den tilsvarende værdi for det nuværende element i mappet.
    var [romanDigit, value] = romanNumeralMap[i];
    // En while-loop der kører, så længe det inputtede tal er større end eller lig med den nuværende numeriske værdi i mappet.
    while (num >= value) {
      // Tilføjer det romertal, der svarer til den nuværende værdi, til den endelige streng.
      roman += romanDigit;
      // Reducerer det inputtede tal med den nuværende værdi for at afspejle den del af tallet, der allerede er blevet konverteret.
      num -= value;
    }
  }

  // Returnerer den endelige streng, der repræsenterer inputtallet som et romertal.
  return roman;
}

// Tester funktionen ved at konvertere tallet 36 til romertal.
console.log(convertToRoman(36)); // skulle returnere "XXXVI"

