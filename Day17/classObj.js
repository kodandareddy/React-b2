class User{
    constructor(name,email){
     this.name=name;
     this.email=email
    }
    courseList=[]

    enroll(courseName){
        this.courseList.push(courseName)

    }
    getCourseList(){
        return this.courseList.length
    }
    login(){
        console.log("your are a user")
    }
}

export default User