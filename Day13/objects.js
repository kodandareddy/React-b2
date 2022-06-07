// let user={
//     firstName:"kOdanda",
//     lastName:'satti',
//     role:"admin",
//     loginCount:32,
//     isGoogleLogin:true,
//     courseCount:[]
// }
// // let data='loginCount'
// // // console.log(user.isGoogleLogin)
// //         //  or
// // console.log(user[data])
// // user['firstName']="shyam"
// // console.log(user)

// // Object.keys(user).forEach((data)=>{
// // console.log(user[data])
// // })


// for(let u in user){
//  console.log(user[u])
// }

let user={
    firstName:"kOdanda",
    lastName:'satti',
    role:"admin",
    loginCount:32,
    isGoogleLogin:true,
    courseList:[],
    buyCourse:function(courseName){
         this.courseList.push(courseName)
    },
    getCourseCount:function(){
        return `${this.firstName} is enrolled in total ${this.courseList.length} courses`
    }
}

 user.buyCourse("ReactJs")
 user.buyCourse("VueJs")
console.log(user.getCourseCount())