// SantaClausable Interface http://www.codewars.com/kata/santaclausable-interface

function isSantaClausable(santa) {
  const identificationofSanta = [
    "sayHoHoHo",
    "distributeGifts",
    "goDownTheChimney",
  ];
  return identificationofSanta.every(
    (item) => typeof santa[item] === "function"
  );
}

// Cylon Evolution http://www.codewars.com/kata/cylon-evolution

