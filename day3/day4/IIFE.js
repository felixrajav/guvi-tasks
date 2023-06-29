// anonymous function & IIFE

// 1. Print odd numbers in an array
    //  a.anonymous function

   //  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];

   //  numbers.forEach(function(number) {
   //    if (number % 2 !== 0) {
   //      console.log(number);
   //    }
   //  });
    // Output: 1 3 5 7 9

     // b. IIFE function

   //   (function(){
   //    for(let i=0;i<=10;i++){
   //       if(i % 2 !== 0){
   //          console.log(i)
   //       }
   //    }

   //   }) ();

// 2. Convert all the strings to title caps in a string array
    //  a.anonymous function
       
      // let str=function(){
      //    let a= "i learn javascript";
      //    let b= a.toUpperCase();
      //    console.log(b)
      // }; str()

    // b. IIFE function
      (function upperCase(){
         let a= "i am felix";
         let b= a.toUpperCase();
         console.log(b)
      })();

    
 
        
