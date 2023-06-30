let resume=[
    {firstname:"felix",
     lastname:"raja",
     age:25,
     contact:{
         mobilenum:"66595548",
         email:"felixvictorraj@gmail.com",
         address:{
             street:"127 A saran street",
             city:"palladam",
             district:"tiruppur",
             state:"Tamilnadu",
             pin_code:641664,
             country:"india"
         }
         
     },education:[{graguation:{
         degree:"b.com",
         major:"commerce",
        institution:"st.josephs college",
        passing_percentage:"52%",
        passout_year:"2018"
     },higher_secondary_education:{
          institution:"st.josephs school",
        passing_percentage:"79%",
        passout_year:"2015"
     },secondary_education:{
         institution:"st.josephs school",
        passing_percentage:"67%",
        passout_year:"2013"
     }
     }],work_experience:{
         position:"merchandiser",
         company:"ramraj cotton",
         location:"tiruppur"
     }
    
    }];
       //for loop

     for(let i=0;i<resume.length;i++){
         console.log(resume[i].contact.address);
     }

    /*  output
    {
        street: '127 A saran street',
        city: 'palladam',
        district: 'tiruppur',
        state: 'Tamilnadu',
        pin_code: 641664,
        country: 'india'
     }
     */
    
     //for in loop

     for(let e in resume){
        console.log(resume[e].work_experience)
    }
    /*
    output 
     {
       position: 'merchandiser',
       company: 'ramraj cotton',
       location: 'tiruppur'
     }

    */

   
       // forEach loop
     resume.forEach(function idendifery(g){
         console.log(g.education)
     })

      // for of loop

     for(let s of resume){
        console.log(s.education)
    }