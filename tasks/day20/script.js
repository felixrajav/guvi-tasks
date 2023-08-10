async function thirukural(){
     let number=document.getElementById('Kural').value;
     let api= await fetch(`https://api-thirukkural.vercel.app/api?num=${number}`);
    let data=await api.json();
    console.log(data)
   
    let content=document.querySelector('container-fluid');
    
    content.innerHTML=`
    <div class="section"><h2> ${datas.sect_tam}-${datas.chapgrp_tam}</h2></div>
    <div class="section"><h4>அதிகாரம்:${datas.chap_tam}🍁</h4></div><br>
    <div class="section"><h4> குறள்:</h4></div>
    <div class="section"><h5>${datas.line1}</h5></div>
    <div class="section"><h5>${datas.line2}</h5></div><br>
    <div class="section"><h4>பொருள்:</h4></div>
    <div class="section"><h5>${datas.tam_exp}<h5></div><br><hr>

    <div class="eng"><h2>${datas.sect_eng}-${datas.chapgrp_eng}</h2></div><br>
    <div class="eng"><h4>Chapter:${datas.chap_eng}🍁<h4></div><br>
    <div class="eng"><h4>Kural:</h4></div>
    <div class="eng"> <h5>${datas.eng}</h5></div><br>
    <div class="eng"><h4>Explanation:</h4></div>
    <div class="eng"><h5>${datas.eng_exp}</h5></div><br><hr>
   
    
    `
}
thirukural();

let button=document.querySelector(".btn");
button.addEventListener("click",thirukural);