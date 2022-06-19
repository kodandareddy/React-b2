export default (state,action)=>{
    console.log(action)
 switch(action.type){
    case 'ADD_TODO':
       return[...state,action.payload]
    case 'Del_TODO':
          return [...state].filter((todoId)=>todoId.id !=action.id)
    default:
    return state
 }



}