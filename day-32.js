// "this"" is a problem - http://www.codewars.com/kata/this-is-a-problem

function NameMe(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.name = this.firstName + " " + this.lastName;
}

// ""this"" is an other problem - https://www.codewars.com/kata/this-is-an-other-problem
