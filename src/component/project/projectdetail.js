import React, { Component } from 'react'
import {connect} from 'react-redux'
import './style.css'
class Projectdetail extends Component{
    render(){
    const id = this.props.match.params.id;
    const proj = this.props.project;
    let displayproject = proj.filter(project=>{
        return project.id==id}
    )
    let title 
    let discription
    let time
    if(displayproject[0])
    {
         title = displayproject[0].title
         discription = displayproject[0].discription
         time = displayproject[0].time
    }
    const post = displayproject[0]?(
        <div>
            <h2>{title}</h2>
            <p>{discription}</p>
            <p className='discription-time'>Added On :- {time}</p>
        </div>
    ):(
        <div>
          There is not any post.
        </div>
    );
    return(
        <div className='detail'>
            {post}
        </div>
    )
}
}

const mapStateToProps=(state)=>{
    return{
        project:state.project.projects
    }
}
export default connect(mapStateToProps)(Projectdetail)