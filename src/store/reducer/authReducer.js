const initstate = {
   user:[]
}
let history = localStorage.getItem('user')
history = JSON.parse(history);
if(history)
{
    initstate.user = history;
}

const authReducer = (state=initstate,action)=>{

    let newState = {...state};
    switch(action.type){
        case 'ADD_DETAIL' :
            newState.user=action.dt;
        break;
    }
    localStorage.setItem('user',JSON.stringify(newState.user))
    return newState;
}

export default authReducer