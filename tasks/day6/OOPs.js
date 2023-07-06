//Q1 https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md


class movie{
    constructor(title,studio,rating){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
        if(this.rating===undefined)
        {this.rating="PG"}
    }
    display (){
        console.log(`${this.title},${this.studio},${this.rating}`)
    }
   movieobject(){
    return ({title:this.title,
        studio:this.studio,
        rating:this.rating})

   }
   getgetPG(arr)
   {
    let data=arr.filter(film=>film.rating=="PG")
     console.log(data.map(b=>b.title))
   }
}
   let Movie1=new movie("Baashha","AVM")
   Movie1.display()
  let Movie2=new movie("Singam","Gemini","PG")
  let Movie3=new movie("Hey Ram","Motion picture","PG")
  let Movie4=new movie("Singam 2","AVM","PG")
  let film=new movie("Casino Royale","Eon Productions","PG13")
 film.display()
  let arr=[]
   arr.push(Movie1.movieobject())
   arr.push(Movie2.movieobject())
   arr.push(Movie3.movieobject())
   arr.push(Movie4.movieobject())
   console.log(arr)


  // 3. Write a “person” class to hold all the details.

  class person{
    constructor(Name,Age,DOB,Email,Address,City,State,Qualification){
        this.Name=Name;
        this.Age=Age;
        this.DOB=DOB;
        this.Email=Email;
        this.Address=Address;
        this.City=City;
        this.State=State;
        this.Qualification=Qualification;
    }
    details(){
        console.log(`
        Name:${this.Name}
        Age:${this.Age}
        DOB:${this.DOB}
        Email:${this.Email}
        Address:${this.Address}
        City:${this.City}
        State:${this.City}
        Qualification:${this.Qualification} `)
    }
  }

  let person1=new person("felix","25","13/06/1998","fellix@gmail.com","22 seran nager,tiruppur","palladam","Tamilnadu","M.Com")
  person1.details();


 //4) write a class to calculate uber price.

 class uberPrice{
    constructor(distance){
        this.distance=distance;
    }
    calculatePrice(){
        return(this.distance)*32;
    }
 }

 let uber=new uberPrice(12.5);
 console.log(uber.calculatePrice());