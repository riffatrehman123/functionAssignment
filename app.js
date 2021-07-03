//  1.Write a function that displays current date & time in your
// browser

// function time() {
//     var today = new Date()
// }
// document.write(new Date);

//  2. Write a function that takes first & last name and then it
// greets the user using his full name.

// function name(){
//     var firstName = prompt("Enter first name:")
//     var lastName = prompt("Enter last name:")
//     alert(firstName + " " + lastName)
// }
// name()

// 3. Write a function that adds two numbers (input by user)
// and returns the sum of two numbers.

// function sum(){
//     var firstNum = +prompt("Enter first num:")
//     var lastNum = +prompt("Enter last num:")
//     alert(firstNum+lastNum)
// }
// sum()

// 4. Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.

// function desiredOperation(num1,num2,operator){
//     var result = (num1, operator, num2)
//     console.log(result)
// }

// var num1 = +prompt("Enter number 1:")
// var num2 = +prompt("Enter number 2:")
// var op = prompt("Enter operator:")
// desiredOperation(num1,num2,op)

// 5. Write a function that squares its argument.

// function square(val){
//     console.log(val*val)
// }
// square(4)

// 6. Write a function that computes factorial of a number.

// function factorial(n){
//     let answer = 1;
//     if (n == 0 || n == 1){
//       return answer;
//     }else{
//       for(var i = n; i >= 1; i--){
//         answer = answer * i;
//       }
//       return answer;
//     }  
//   }
//   let n = 4;
//   answer = factorial(n)
//   console.log("The factorial of " + n + " is " + answer);

// 7. Write a function that take start and end number as inputs
// & display counting in your browser.

// var inp1 = prompt()
// var inp2 = prompt()
// function countingNum(){
//     for(var i = inp1;i <= inp2; i++){
//         document.write(i)
//     }
// }
// countingNum()

// 8. Write a nested function that computes hypotenuse of a right angle triangle. 
// Hypotenuse2 = Base2 + Perpendicular2 Take base and perpendicular as inputs. 
// Outer function : calculateHypotenuse() Inner function: calculateSquare()

// function calculateHypotenuse(val1, val2){
//     let h = (((val1 * val1) + (val2 * val2))**(1/2));
//     return h;
// }

// let val1 = 6;
// let val2 = 7;
 
// document.write(calculateHypotenuse(val1, val2).toFixed());

// 9. Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables

// function area(width,height){
//     var area = width * height
//     console.log(area)
// }
// area(8,6)

// 10. Write a JavaScript function that checks whether a passed
// string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as
// forward, e.g., madam.

// function checkPalindrome(str) {
//     const len = string.length;
//     for (let i = 0; i < len / 2; i++) {
//         if (string[i] !== string[len - 1 - i]) {
//             return 'It is not a palindrome';
//         }
//     }
//     return 'It is a palindrome';
// }
// const string = prompt('Enter a string: ');
// const value = checkPalindrome(string);
// console.log(value);
    
// 11. Write a JavaScript function that accepts a string as a
// parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

// function customFunction(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// console.log(customFunction("the quick brown fox"));

// 12. Write a JavaScript function that accepts a string as a
// parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];
//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// console.log(find_longest_word('Web Development Tutorial'));

// 13. Write a JavaScript function that accepts two arguments, a
// string and a letter and the function will count the number of 
// occurrences of the specified letter within the string.
// Sample arguments : 'JSResourceS.com', 'o'

// function count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// console.log(count('JSResourceS.com', 'o'));

// 14. Create 2 functions that calculate properties of a circle, using
// the definitions here.
// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".

// function calcCircumfrence(radius) {
//     var y = (Math.PI * radius) * 2;
//   console.log("The circumfrence is " + y + ".");
//   }
//   function calcArea(radius) {
//     var x = (Math.PI * radius) * radius;
//   console.log("The area is " + x + ".");
//   }
  
//   calcCircumfrence(30);
//   calcArea(10);




