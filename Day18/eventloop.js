const one=()=>{
    return "one"
}

const two= ()=>{
   return new Promise((resolve,reject)=>{
        setTimeout(()=>{
             reject("two")
            },3000)
    })
    
}


const three=()=>{
    return "three"
}



const main=async()=>{
    let a= one()
    console.log(a)
    try {
    let b=await two()
    console.log(b)
    } catch (error) {
        console.log(error,"+++++")
    }
    
    let c=three()
    console.log(c)
}

main()