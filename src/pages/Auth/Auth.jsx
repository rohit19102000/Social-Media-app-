import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png';

function Auth() {
  return (
    <div className="Auth">
        <div className="a-Left">
            <img src={Logo} alt="" />
            <div className="Webname">
                <h1>Zkc Media</h1>
                <h6>Explore the ideas throughout the world</h6>
            </div>
        </div>
        <Login />
        {/* <SignUp /> */}
    </div>
  )
}
function Login(){
  return(
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Login</h3>
        <div>
          <input
            type="text"
            className="infoInput"
            name="username"
            placeholder="Usernames"
          />
        </div>

        <div>
          <input
            type="text"
            className="infoInput"
            name="password"
            placeholder="Password"
          />
        </div>

        <div>
            <span style={{fontSize: '12px'}}>Dont have an account ? Sign up</span>
        <button className="btn infoBtn" type="submit">Login</button>
        </div>
      </form> 
    </div>
  )
}


function SignUp() {
  return(
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>sign up</h3>

        <div>
          <input className="infoInput" name="Firstname"type="text" placeholder="First name" />
          <input className="infoInput" name="Lastname"type="text" placeholder="Last name" />
        </div>
        
        <div>
          <input type="text" className="infoInput" name="username" placeholder="Username" />
        </div>
        
        <div>
          <input type="text" className="infoInput" name="password" placeholder="Password" />
          <input type="text" className="infoInput" name="conformpass" placeholder=" conform Password" />
        </div>
        
        <div>
          <span style={{fontSize:'12px'}}> Already  have an account. Login! </span>
        </div>
        <button className="btn infoBtn" type="submit">signUp</button>
      </form>
    </div>
  
  )
}
export default Auth
