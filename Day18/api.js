fetch('https://api.chucknorris.io/jokes/random').then((res)=>{
  return res.json()
})
// https://www.geeksforgeeks.org/javascript-promises/