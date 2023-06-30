let obj1={name:"person1",age:5};
let obj2={age:5,name:"person1"};

let flag=true;
for(let i in obj1){
    if(obj1[i]!==obj2[i]){
        flag=fales;
        break;
    }
} 
flag?console.log("equal"):console.log("not equal");