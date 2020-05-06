export const Enterdetail=(dt)=>{
    return(dispatch,getState)=>{
        dispatch({type:'ADD_DETAIL',dt})
    }
};

export const logout=()=>{
    return(dispatch)=>{
        dispatch({type:'LOG_OUT'})
    }
}