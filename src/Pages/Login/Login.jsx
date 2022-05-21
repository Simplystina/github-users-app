import React from 'react'
import './Login.css'
import logo from '../../images/login-img.svg'
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
    
    const { loginWithRedirect } = useAuth0();
    
  return (
    <div className='login-container'>
       <div className='logo-container'>
           <img src={logo} alt='logo'/>
           <h1 className='github-text'>Github Users</h1>
           <div className='btn-container'><button className='btn' onClick={() => loginWithRedirect()} >LOG IN/SIGN UP</button></div>
       </div>
    </div>
  )
}

export default Login
