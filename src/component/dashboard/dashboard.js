import React, { Component } from "react"
import Projectlist from '../project/projectlist'
import './style.css'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
class Dashboard extends Component{
    render(){
      const {projects} = this.props
      if(!this.props.user.firstname) return( <Redirect to='/signup' />)
         return(
            <div className='main'>
            <div> <Projectlist projects={projects}/></div>
            </div>
        )}
}
const mapStateToProps=(state)=>{
    return{
        projects:state.project.projects,
        user:state.auth.user
    }
}
export default connect(mapStateToProps)(Dashboard)