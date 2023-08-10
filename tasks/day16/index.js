let count=10;
const time=document.getElementById("display");
time.innerHTML= count--;
setTimeout(()=>{
    time.innerHTML=count--;
    setTimeout(()=>{
        time.innerHTML=count--;
        setTimeout(()=>{
            time.innerHTML=count--;
            setTimeout(()=>{
                time.innerHTML=count--;
                setTimeout(()=>{
                    time.innerHTML=count--;
                    setTimeout(()=>{
                        time.innerHTML=count--;
                        setTimeout(()=>{
                            time.innerHTML=count--;
                            setTimeout(()=>{
                                time.innerHTML=count--;
                                setTimeout(()=>{
                                    time.innerHTML=count--;
                                    setTimeout(()=>{
                                        time.innerHTML='';
                                        document.getElementById('content').style.display = 'block';
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)