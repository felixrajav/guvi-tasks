// anonymous function & IIFE

// 1. Print odd numbers in an array
    //  a.anonymous function

    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];

    numbers.forEach(function(number) {
      if (number % 2 !== 0) {
        console.log(number);
      }
    });
    // Output: 1 3 5 7 9

     // b. IIFE function

     (function(){
      for(let i=0;i<=10;i++){
         if(i % 2 !== 0){
            console.log(i)
         }
      }

     }) ();
       // Output: 1 3 5 7 9

// 2. Convert all the strings to title caps in a string array
    //  a.anonymous function
       
      let str=function(){
         let a= "i learn javascript";
         let b= a.toUpperCase();
         console.log(b)
      }; str()
        // Output: "I LEARN JAVASCRIPT"

    // // b. IIFE function
    // (function title(){
    //   let a= "i learn javascript";
    //   let b= a.toUpperCase();
    //   console.log([b])
    // })();
        // Output:"I LEARN JAVASCRIPT"

// 3. Sum of all numbers in an array
    //  a.anonymous function 
    let numberarr=[1,5,6,8,11,8];
    let sumOf=function(arr){
        let total=0;
        for(let i=0;i<arr.length;i++){
           total+=arr[i]; 
        }
        return total;
    }(numberarr)
    
    console.log(sumOf)
    // Output: 39   

   // b. IIFE function

   let sum=(function sum(arr){
    let total=0;
    for(let i=0;i<arr.length;i++){
       total+=arr[i]; 
    }
    return total;
    })([1,5,6,8,11,8])
    console.log(sum)
    // Output: 39  
        
// 4. Return all the prime numbers in an array

    //  a.anonymous function 
      
    let primeNumber = function (l,r){
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

   // b. IIFE function
   
   (function (l,r){
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
   })(10,50);
    // output :[ 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47 ]

// 5. Return all the palindromes in an array
    //  a.anonymous function 
       
    let a=["level", "racecar", "hello", "madam"];
    let getPalindromes = function(arr) {
      let result = arr.filter(function(str) {
        let reversedStr = str.split("").reverse().join("");
        return str === reversedStr;
      });
      return result;
    };
    console.log(getPalindromes(a));
    // Output:[ 'level', 'racecar', 'madam' ]

    // b. IIFE function
    let palindromes = (function(arr) {
      return arr.filter(function(str) {
        const reversedStr = str.split("").reverse().join("");
        return str === reversedStr;
      });
    })(["MOM", "DAD", "hello", "madam"]);
    
    console.log(palindromes);
    // Output: [ 'MOM', 'DAD', 'madam' ]

// Return median of two sorted arrays of the same size.
   //  a.anonymous function 
   var findMedianSortedArrays = function(nums1, nums2) {
    const merged = [...nums1, ...nums2];
    merged.sort((a, b) => a - b);
  
    const length = merged.length;
    const middle = Math.floor(length / 2);
  
    if (length % 2 === 0) {
      return (merged[middle - 1] + merged[middle]) / 2;
    } else {
      return merged[middle];
    }
   };
    // b. IIFE function
    var nums1 = [1, 3, 5];
    var nums2 = [2, 4, 6];
  
    var median = findMedianSortedArrays(nums1, nums2);
    console.log(median); // Output: 3.5 


    var median = (function(nums1, nums2) {
      const merged = [...nums1, ...nums2];
      merged.sort((a, b) => a - b);
    
      const length = merged.length;
      const middle = Math.floor(length / 2);
    
      if (length % 2 === 0) {
        return (merged[middle - 1] + merged[middle]) / 2;
      } else {
        return merged[middle];
      }
    })([1, 3, 5, 7], [2, 4, 6, 8]);
    
    console.log(median); // Output: 4.5

// Remove duplicates from an array
   //  a.anonymous function 
   let  arr = [1, 2, 3, 4, 5, 1, 2, 3];


   let remove = function(arr) {
     return arr.filter(function(value, index, self) {
       return self.indexOf(value) === index;
     });
   };
   let  result = remove(arr);
   console.log(result);
   // Output: [ 1, 2, 3, 4, 5 ]

  //  b. IIFE function
  let duplicates = (function(arr) {
    return arr.filter(function(value, index, self) {
      return self.indexOf(value) === index;
    });
  })([1, 2, 3, 4, 5, 1, 2, 3, 6]);
  
  console.log(duplicates);
  // Output:
  // [ 1, 2, 3, 4, 5, 6 ]

// Rotate an array by k times
  // a.anonymous function
  let array = [1, 2, 3, 4, 5];
  let  rotate = function(array, k) {
    let len = array.length;
    let rotations = k % len;
    return array.slice(rotations, len).concat(array.slice(0, rotations));
  };
  
  let rotatedarr = rotate(arr, 2);
  console.log(rotatedarr);    
  //   Output:
  // [ 3, 4, 5, 1, 2 ]

  // IIFE function
  let  rotates = (function(arr, k) {
    let len = arr.length;
    let rotations = k % len;
    return arr.slice(rotations, len).concat(arr.slice(0, rotations));
  })([1, 2, 3, 4, 5], 2)
  
  console.log(rotates);
  //   Output:
  // [ 3, 4, 5, 1, 2 ]

// 