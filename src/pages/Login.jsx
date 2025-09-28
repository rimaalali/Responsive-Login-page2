import React from 'react'
import logo from '../assets/Group.png'
import vector from '../assets/Vector.png'
import { FcGoogle } from "react-icons/fc";
import './Login.css'
export default function Login() {
  return (<div className='all'>
    <div className='allpage'><div className='rightside'>
      <img src={logo} className='logo'/>
      <h3 className='title'>Login to your Account</h3>
      <p className='prg1'>see what is going on with your business</p>
      <button className='google-but' href='https://www.google.com'><FcGoogle className='google-icon'/> Continue with Google</button>
      <p className='prg2'>.........or Sign in with Email.........</p>
      <div className='Email'>
      <h5 >Email</h5>
      <input type='email'/>
      </div>
      <div className='Password'>
      <h5>Password</h5>
      <input type='password'/>
      </div>
      <div className='remember-forgot'>
     
        <p className='remember'>  <input className='checkbox' type='checkbox'/> Remember Me</p>
        <a href=''>Forgot password?</a>
      </div>
      <button className='login-but'>Login</button>
      <p className='register'>Not Registered yet?   <a href='/register'>Create an account</a></p>
      </div>
      <div className='leftside'>
    <p className='heading'>Turn your ideas into reality.</p>
      <p className='text'>Start for free and get attractive offers from the community</p>
      </div>
      <img src={vector} className='vector'/>
    </div>
    </div>
  )
}
