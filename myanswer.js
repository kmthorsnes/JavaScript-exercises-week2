/* Javascript Exercises #1 */

// 1)
var MyArray = [1, 2, 3];

/// 2)
MyArray[1];

// 3)

/// Answer:
//    123/12 == Number
//    "Things in quotes!" == String
//    undefined = undefined

// 4)
var a = 99;
var b = 99;

if (a === b){
  //returns true
  console.log(true);
}

// This one was inspired by Oscar. Thanks mate!

/* 5) Consider these two arrays: myArray = ['Thomas', 'Amber', 'Raoul'] and emptyArray = [].
Use a for loop to add our names to emptyArray. (Hint: n needs to be the length of the array.
Google a helper method for finding the length of an array in Javascript. Is it the same as Ruby?) */

myArray = ['Thomas', 'Amber', 'Raoul'];
emptyArray = [];

for (var i = 0; i < myArray.length; i++) {
  emptyArray.push(myArray[i]);
}
// Thank you for your explaining on this one, David
// Answer: Length is the same as in Ruby

// Javascript Exercises #2

// 1) Write a function that returns your first name. Call it.
var firstName = 'Kalle';
console.log(firstName);
// This one was inspired by Oscar.

/* 2) Write a new function that takes your name as an input. The function should return your first name, plus your last name, as one string. (Hint: strings can be combined with a +) */

function name(firstName, lastname){
  var full_name = firstName + ' ' + lastname;
  return full_name;
}

name('Kalle', 'Thorsnes');
// This one was also inspired by Oscar.

// Javascript Exercise #3*/
// What is this? Does it have an equivalent in Ruby?*/
// Answer: 'self' ?


/* Convert the above Person class to an ES2015 version using the new class syntax*/

/*
function Person(first, last) {
    // create "constructor"
    this.first = first;
    // public variables -- reference current object
    this.last = last;

    var privateFn = function(first, last){
    // private function
    }

    this.setName = function(first, last){
        // public function
        this.first = first;
        this.last = last;
    }

}

Person.prototype.fullName = function() {
    // extend prototype
    return this.first + ' ' + this.last;
    // even at runtime!
}

var bob = new Person("Thomas", "Ochman");
    // "new" creates an object
bob.fullName();
    // "Thomas Ochman"

    /*
