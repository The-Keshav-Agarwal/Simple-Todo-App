import React,{Component} from 'react'
import './style.css'
import {connect } from 'react-redux'
import {Enterdetail} from '../../store/action/authaction'

class Signin extends Component{
    state={
        email:'',
        firstname:'',
        lastname:''
    }
    Handlesubmit=(e)=>{
        e.preventDefault();
        this.props.detail(this.state)
       this.props.history.push('/')
    }
    Handlechange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value,
        })
    }
    render(){
      
        return(
            <div>
            <h2 className='heading'>Sign Up</h2>
                <form onSubmit={this.Handlesubmit}>
                    <input type='text' id='firstname' onChange={this.Handlechange} placeholder='First Name' spellCheck='false' required/><br></br>
                    <input type='text' id='lastname' onChange={this.Handlechange} placeholder='Last Name' spellCheck='false' required/><br></br>
                    <input type='email' id='email' onChange={this.Handlechange} placeholder='Email id' spellCheck='false' required/><br></br>
                    <button className='login'>Login</button>
                </form>
            </div>
        )
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        detail:(dt)=>dispatch(Enterdetail(dt))
    }
}
export default connect(null,mapDispatchToProps)(Signin)