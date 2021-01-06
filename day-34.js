//Adam and Eve - https://www.codewars.com/kata/basic-subclasses-adam-and-eve/

class God{
  static create(){
    const Adam = new Man();
    const Eve = new Woman();
    return [Adam, Eve];
  }
}

class Human {};
class Man extends Human {};
class Woman extends Human {};

//Labrador - https://www.codewars.com/kata/56ff9b53140fcca90b000530/

class Dogs {
  constructor(name, age, gender, species, size, master, loyal) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.species = species;
    this.legs = 4;
    this.size = size;
    this.master = master;
    this.loyal = loyal;
  }
}

class Labrador extends Dogs {
  constructor(name, age, gender, master) {
    super(name, age, gender, "Labrador", "Large", master, true);
  }
}

//Classy Classes - https://www.codewars.com/kata/55a144eff5124e546400005a
