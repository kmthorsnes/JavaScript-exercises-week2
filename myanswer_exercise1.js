/* Javascript Exercises #1 */

/* 1) Create an array and add three numbers to it.*/
var MyArray = [1, 2, 3];

/* 2) Use your array to return the second number. */
MyArray[1];

/* 3) What data type is 123/12? "Things in quotes!"? undefined? */
//    123/12 == Number
//    "Things in quotes!" == String
//    undefined = undefined

/* 4) Write an if statement that returns true. */
if (0 < 1) {
    thisisthetruth = "true";
}



/* 5) Consider these two arrays: myArray = ['Thomas', 'Amber', 'Raoul'] and emptyArray = [].
Use a for loop to add our names to emptyArray. (Hint: n needs to be the length of the array.
Google a helper method for finding the length of an array in Javascript. Is it the same as Ruby?) */



myArray = ['Thomas', 'Amber', 'Raoul'];
emptyArray = [];

/* Thank you for your explaining on this one, David */

for (var i = 0; i < myArray.length; i++) {
  emptyArray.push(myArray[i]);
} c
