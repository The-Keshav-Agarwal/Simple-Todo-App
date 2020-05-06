import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import {connect } from 'react-redux'
import {logout} from '../../store/action/authaction'
class SignedInLinks extends Component{
    logout=()=>{
        this.props.logout()
    }
    render(){
        let name;
        if(this.props.user.firstname){
        name = this.props.user.firstname[0] + this.props.user.lastname[0];}
    return(
        <div>
            <ul>
                <li><NavLink to='/createproject'>New Project</NavLink></li>
                <li><NavLink to='/' className='circle' onClick={this.logout}>{name}</NavLink></li>
            </ul>
        </div>
    ) 
}
}
const mapStateToProps=(state)=>{
    return{
        user:state.auth.user
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        logout:()=>dispatch(logout())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignedInLinks)