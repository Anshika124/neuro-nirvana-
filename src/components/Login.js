import React from 'react';
import '../styles/form.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import Home from './Home';
import { NavLink, useActionData, useNavigate } from "react-router-dom";
import { useState } from 'react';

function Login()
{
  
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  function loginCheck(){
    console.log('logging in with user email:',userEmail,'and user password',userPassword);
    axios.get('http://localhost:5600/user/login?userEmail='+userEmail+'&userPassword='+userPassword).then((response) => {
      console.log('API Response:',response)
       alert(response.data)
      if (response.data === "success") {
        console.log('API Request:', response.config); 
        console.log('API Response:', response.data);
        console.log('login successful:',userEmail,userPassword);
        alert(userEmail+" "+userPassword)
        navigate('/home');   
      }
      else{
        alert('Login failed, Invalid username or password');
      }
    })
    .catch((error) => {
      console.log('API ERROR:',error.message);
      alert('An error occurred: ' + error.message);
    });
  }
  return (
    <>
      <div className="mainBackground">
        <div className="container">
          <section className="firstSection">
            <div className="formQuote">You look the most beautiful when you wear your smile!</div>
          </section>
          <section className="secondSection">
            <form>
              <div className="dataContainer">
                <div className="formGroup">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" onChange={(e)=>{setUserEmail(e.target.value); console.log('userEmail:', e.target.value);}} name="email"/>
                </div>
                <div className="formGroup">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" onChange={(e)=> setUserPassword(e.target.value) }name="password"/>
                </div>
              </div>
              <div className="buttonContainer">
              <button onClick={loginCheck}>Login</button>
                <div className="accountSwitch">
                  <p>New User? <Link to={"/register"}>Register</Link></p>
                </div>
              </div>
            </form>
          </section>
        </div>

      </div>
    </>
  );
}
export default Login;
