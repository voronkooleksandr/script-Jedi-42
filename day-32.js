// "this"" is a problem - http://www.codewars.com/kata/this-is-a-problem

function NameMe(first, last) {
  this.firstName = first;
  this.lastName = last;
}

NameMe.prototype = {
  get name() {
    return this.firstName + " " + this.lastName;
  },
};

// ""this"" is an other problem - https://www.codewars.com/kata/this-is-an-other-problem

function NamedOne(first, last) {
  this.firstName = first;
  this.lastName = last;
}

NamedOne.prototype = {
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
  set fullName(change) {
    let newName = change.split(" ");
    if (newName.length == 2) {
      this.firstName = newName[0];
      this.lastName = newName[1];
    }
  },
};
