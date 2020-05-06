import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLinks from './signedinlink'
import {connect} from 'react-redux'
import './style.css'
const Navbar =(props)=>{
    
    const name = props.user.firstname?(<div className="container">
    <Link to='/' className='logo'>Myapp</Link>
    <SignedInLinks/>
</div>):(
    <div className='onlylogo'>
    <Link to='/' className='logo'>Myapp</Link>
</div>
)
    return(
        <div className='nav'>
            {name}
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        user: state.auth.user
    }
}

export default connect(mapStateToProps)(Navbar)