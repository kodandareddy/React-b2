
let user={
    name:"Ram",
    firstName:"satti",
    courseCount:3,
    getDetails:function(){
      return `${this.firstName} has these many Courses ${this.courseCount}`
    }
}

let user1={
    name:"shyam",
    firstName:"sundar",
    courseCount:3,
    getDetails:function(){
        return `${this.firstName} has these many Courses ${this.courseCount}`
      }
   
}
let sum=user.getDetails()
console.log(sum)