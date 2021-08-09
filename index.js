/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/
const sum =  function (a, b) {
    if (a === b){
     return  (a + b )*3  
    } else {
     return a + b
    }
}
console.log(sum(4,4))
/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/

const fifty = function (a, b) {
    if (a === 50 || b === 50 & a+b === 50){
        return true
    }
    else{
        return false
    }
}
console.log(fifty(50,6))

/*
3)Create a function to remove a character at the specified position of a given string and return the new string.
*/

const remChar = function (string, index){
    return string.slice(index)
}
console.log(remChar("string", 2))
/*
4)Create a function to find the largest of three given integers.
*/

const theLargest = function(a, b, c){
    if ( a > b && a > c ){
         return a
    }
    else if ( b > a && b > c ){
         return b
    }
    else {
        return c
}
}
console.log(theLargest(23, 54, 1))
/*
5)Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/
const isInTheRange = function(a, b){
    if (a>40 && a<60 && b>40 && b<60){
        return "the number is in range of 40-60"
    }
    else if (a>70 && a<100 && b>70 && b<100)
        return "the number is in range of70-100"
    else
        return "The number is not in the range"
}
console.log(isInTheRange(34, 9))
/*
6) 
Create a function to create a new string of specified copies (positive number) of a given string.
*/

/*
7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/
const isLosAngeles = function(string) {
    
    if (string.includes("Los") || string.includes("New") ){
        return string
    }
    else return "boring City"
}
console.log(isLosAngeles("Bologna"))
/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/

const sumOfThree = function (array) {
    let sum = 0; 
    for (let i = 0; i < array. length; i++) { 
        sum += array[i]; 
    } 
    return sum
}
console.log(sumOfThree([1, 2, 1]))
/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/
const thereAreOneOrThree = function (array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === 1 || array[i] === 3) {
            return true;
        }
    }
    return false;
}
console.log(thereAreOneOrThree([2,3]))

/*
10) Create a function to test whether an array of integers of length 2 does not contain 1 or a 3
*/
const thereArentOneOrThree = function (array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === !1 || array[i] === !3) {
            return true;
        }
    }
    return false;
}
console.log(thereArentOneOrThree([2,3]))

/*
11)Create a function to find the longest string from a given array of strings.

*/
const longestString = function (str1, str2) {
if (str1.length > str2.length){
    return  "First string is longest"
} if (str1.length < str2.length) {
    return  "Second string is longest"
}
}
console.log(longestString("first string", "second string"))

/*12)Create a function to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.
*/
const whatTypeOfAngle = function (angle) {
if (angle> 0 && angle<90){
    return "acute angle" }
    if (angle === 90 ){
        return "right angle" }
   if (angle > 90 && angle <180) {
       return "btuse angle"}
       if (angle === 180){
           return "straight anngle"
       }
       if (angle > 180) {
           return "this angle is bigger than 180°"
       }
}
console.log(whatTypeOfAngle(45))

/*13)Create a function to find the index of the greatest element of a given array of integers
*/
const greatestInThisArray = function (array) {
    let largest = []
    for (i = 0; i <= largest; i++){
        if (array[i] > largest) {
            largest = array[i];
        }
    }
    return largest
}
console.log(greatestInThisArray([2, 4, 5, 7, 54]))

/*14)Create a function to get the largest even number from an array of integers.*/
const greatestEvenInThisArray = function (array) {
    let largest = []
    for (i = 0; i <= largest; i++){
     
        if (array[i]% 2 == 0 && array[i] > largest) {
            largest = array[i];
        }
    }
    return largest
}
console.log(greatestEvenInThisArray([2, 4, 5, 7, 54.5, 54.7]))

/*16) Create a function to check from two given integers, whether one is positive and another one is negative.*/
const positiveOrNegative = function (a, b) {
  
        if (a>0 && b>0) {return "Both numbers are positive"}
        if (a<0 && b<0) {return "Both numbers are negative"}  
        if (a>0 && b<0) {return "First number is positive, the second is negative"} 
        if (a<0 && b>0) {return "First number is negative, the second is positive"}
      
    
    return result 
}
console.log(positiveOrNegative(-1, 3))

/*18) Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.*/
const anotherStrangeSum = function (a,b) {
 if ((a + b)> 50 && (a + b)<80 ) {
     return 65 
 } else {
     return 80
 }
}
console.log(anotherStrangeSum(53, 2))
/*19) Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".*/

const convertNumberInAString =  (num) => {
    let str = "";
    if (num % 3 === 0) str += "Diego";
    if (num % 5 === 0) str += "Riccardo";
    if (num % 7 === 0) str += "Stefano";
  
    return str;
  };
  console.log(convertNumberInAString(28))
/*20) Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC*/
const getAcronim = (str) =>
  str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .join("");

    console.log(getAcronim("Gran Bretagna"))