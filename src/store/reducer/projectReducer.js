const initstate={
    projects:[]
}
let  i = 0;
let posts = localStorage.getItem('posts');
posts = JSON.parse(posts)
if(posts)
{
    initstate.projects = posts
}
const projectReducer = (state=initstate,action) => {
    let newState = {...state}
    switch(action.type)
    {
        case 'CREATE_PROJECT':
           
            i=i+1
            action.project.id=i
            let projectss = [...state.projects,action.project];
            newState.projects = projectss
            localStorage.removeItem('posts');
            localStorage.setItem('posts',JSON.stringify(newState.projects))
            break;
        case 'REMOVE_PROJECT':
          
            if(newState.projects){
                newState.projects = newState.projects.filter(project=>{
                return action.id != project.id
            })
            localStorage.removeItem('posts');
            localStorage.setItem('posts',JSON.stringify(newState.projects))
            }
            break;
            
    }
    return newState
    
}
export default projectReducer