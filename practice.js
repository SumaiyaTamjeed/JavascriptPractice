// Declare your variable here
var myGlobal=10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal=5;
}

// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
//function
function timesFive(number){
return number*5;
}
console.log( timesFive(3));
//array

// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]);
// ourArray now equals ["Stimpson", "J", "cat", ["happy", "joy"]]


// Example
var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop();
// removedFromOurArray now equals 3, and ourArray now equals [1,2]

// Example
var ourArray = ["Stimpson", "J", ["cat"]];
removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].


// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy");
// ourArray now equals ["Happy", "J", "cat"]

/*In Computer Science a queue is an abstract Data Structure where items are kept in order.
New items can be added at the back of the queue and old items are taken off from the front of the queue.

Write a function nextInLine which takes an array (arr) and a number (item) as arguments.
 Add the number to the end of the array, then remove the first element of array. The nextInLine
  function should then return the element that was removed.*/
  function nextInLine(arr, item) {

  arr.push(item);
  var removed=arr.shift();

  return removed;
}


var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));

//if statment
function ourTrueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, it's true";
  }
  return "No, it's false";
}

function trueOrFalse(wasThatTrue) {

   if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";

}

// Change this value to test
trueOrFalse(false);

//

function testStrict(val) {
  if (val===7) {
    return "Equal";
  }
  return "Not Equal";
}
// Change this value to test
console.log(testStrict(10));
console.log(testStrict(7));
console.log(testStrict('7'));


/*Write chained if/else if statements to fulfill the following conditions:

num < 5 - return "Tiny"
num < 10 - return "Small"
num < 15 - return "Medium"
num < 20 - return "Large"
num >= 20 - return "Huge"

Run tests (ctrl + enter)
*/

function testSize(num) {

  if (num<5)
    return "Tiny";
  else if (num<10)
    return "Small";
  else if (num<15)
    return "Medium";
  else if (num<20)
    return "Large";
  else if (num>=20)
    return "Huge";

  return "Change Me";

}

// Change this value to test
console.log(testSize(7));
console.log(testSize(17));
console.log(testSize(3));
console.log(testSize(11));
console.log(testSize(50));
