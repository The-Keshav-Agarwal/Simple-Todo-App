import React,{Component} from 'react'
import {Link } from 'react-router-dom'
import {connect } from 'react-redux'
import {Removeproject} from '../../store/action/projectaction'

class Projectsummary extends Component{
     
    HandleRemove=(e)=>{
        this.props.remove(this.props.project.id)
    }
    render(){
        const l = this.props.project.id;
        let li = '/project/'+ l
    return(
      
        <div className="card">  <Link to={li}>
            <p className='titlediscription'>{this.props.project.title}</p>
            <p className='creatediscription'>Added by {this.props.user.firstname + this.props.user.lastname}</p>
            <p className='date'>{this.props.project.time}</p> </Link>
            <button type='submit' className='removebtn' onClick={this.HandleRemove}>Remove</button>
        </div>
        
    )}
}

const mapStateToProps = (state)=>{
    return{
        user:state.auth.user
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
    remove:(id) =>dispatch(Removeproject(id))}
}
export default connect(mapStateToProps,mapDispatchToProps)(Projectsummary)