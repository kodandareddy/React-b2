class User{
    constructor(name,email){
     this.name=name;
     this.email=email
    }
    #courseList=[]
    getDetails(){
        return `${this.name} and email ${this.email}`
    }
    enroll(courseName){
        this.#courseList.push(courseName)

    }
    getCourseList(){
        return this.#courseList.length
    }
    login(){
        console.log("your are a user")
    }
}


class SubAdmin extends User{
    constructor(name,email){
     super(name,email)
    }
    login(){
        console.log("your are a sub admin")
    }
}
let sub1=new SubAdmin("ramu","ramu@gamil.com")
let user=new User("shyam","shyam@gmail.com")
console.log(sub1,user)
sub1.login()//method overriding
user.login()
// export default User