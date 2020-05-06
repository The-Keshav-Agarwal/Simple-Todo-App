import React,{Component} from 'react'
import {connect } from 'react-redux'
import '../auth/style.css'
import {CreateProject} from '../../store/action/projectaction'

class Createproject extends Component{
    state={
        title:'',
        discription:'',
        time:''
    }
    Handlesubmit=(e)=>{
        e.preventDefault();
        this.props.createProject(this.state)
        document.getElementById('title').value=null;
        document.getElementById('discription').value=null;
    }
    Handlechange=(e)=>{
        let d = new Date();
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const times = d.getDate()+' '+months[d.getMonth()]+' '+d.getFullYear();
        this.setState({
            [e.target.id]:e.target.value,
            ['time']:times
        })
    }
    render(){
        return(
            <div>
            <h2 className='heading'>Create New Task</h2>
                <form onSubmit={this.Handlesubmit}>
                    <input type='text' id='title' onChange={this.Handlechange} placeholder='Title' spellCheck='false' required/><br></br>
                    <input type ='text' id='discription' onChange={this.Handlechange}  placeholder='Discription' spellCheck='false' required/><br></br>
                    <button className='task'>Create</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        createProject:(project) =>dispatch(CreateProject(project))
    }
}
export default connect(null, mapDispatchToProps)(Createproject)