let counter= document.querySelector('.counter')
let count=0
setInterval(()=> {
    if(count<1000){
        count=count+1
        counter.innerHTML =count
    }
   
}, 1000);