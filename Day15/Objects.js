var User=function(fname,lname){
   this.firstName=fname
   this.lastName=lname
//    this.getFirstName=function(){
//        return `${this.firstName}`
//    }
}

User.prototype.getFirstName=function(){
    console.log(`${this.firstName}`)
}
let user= User("satti","rama")
let user1=new User("satti1","rama")

if(user.hasOwnProperty("firstName")){
    user.getFirstName()
}


// console.log(user.getFirstName())
// console.log(user1.getFirstName())