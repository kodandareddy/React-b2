function displayName(){
    let data="Ram"
    function returnData(){
        return data
    }
    return returnData
}

let name=displayName()()
console.log(name)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures