// Create an application with following roles:
// admin  - gets full access
// subadmin - gets access to create/delete courses
// testprep - gets access to create/delete tests
// user - gets access to consume content
var role='testprep'


switch(role){
   case 'admin':
       console.log("gets full access")
       break;
   case 'subadmin':
       console.log("gets access to create/delete coursess")
       break;
   case 'testprep':
      console.log("gets access to create/delete tests")
       break;
    case 'user':
        console.log("gets access to consume content")
        break;
    default:
        console.log("you are a trail user")

}

