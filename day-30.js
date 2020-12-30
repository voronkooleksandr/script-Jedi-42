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

function Cylon(model) {
  this.model = model;
}
Cylon.prototype.attack = function () {
  return "Destroy all humans!";
};

function HumanSkin(model) {
  this.model = model;
}
HumanSkin.prototype = Cylon.prototype;
HumanSkin.prototype.infiltrate = function () {
  return "Infiltrate the colonies";
};

// Simple Web Framework #1: Create a basic router https://www.codewars.com/kata/588a00ad70720f2cd9000005/train/javascript

