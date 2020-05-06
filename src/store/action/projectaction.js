export const CreateProject = (project)=>{
    return(dispatch,getState) =>{
        dispatch({type:'CREATE_PROJECT',project});
    }
};

export const Removeproject = (id)=>{
    return(dispatch,getState) =>{
        dispatch({type:'REMOVE_PROJECT',id})
    }
}