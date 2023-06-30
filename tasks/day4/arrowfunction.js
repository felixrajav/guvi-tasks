// 1. Print odd numbers in an array

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let OddNumbers = (arr) => {
  arr.forEach((num) => {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
};
OddNumbers(arr);
//out put=>  1 3 5 7 9

// 2. Convert all the strings to title caps in a string array

let title=()=>{
    let a= "i learn javascript";
    let b= a.toUpperCase();
    console.log([b]);
}; title();


//out put =>  [ 'I LEARN JAVASCRIPT' ]   

// 3. Sum of all numbers in an array

const sumArray = (array) => array.reduce((sum, num) => sum + num, 0);

const numbers = [1, 2, 3, 4, 5];
const totalSum = sumArray(numbers);
console.log(totalSum); 
// Output: 15

// 4. Return all the prime numbers in an array

let primeNumber =  (l,r)=>{
    let arr = [];
    for (i=l;i<r;i++)
    {
        arr.push(i)
    }
   arr = arr.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
   }
   return true;
   })
    console.log(arr);
   }
    primeNumber(1,100);
    // Output:
    // [ 1, 2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]

// 5. Return all the palindromes in an array
let a=["level", "racecar", "hello", "madam"];
let getPalindromes = (arr)=> {
    let result = arr.filter(function(str) {
      let reversedStr = str.split("").reverse().join("");
      return str === reversedStr;
    });
    return result;
  };
  console.log(getPalindromes(a));

  // Output:
  // [ 'level', 'racecar', 'madam' ]