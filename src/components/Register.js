import React from 'react';
import '../styles/form.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { NavLink, useActionData, useNavigate } from "react-router-dom";
import axios from 'axios';

function Register()
{
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [userNumber, setUserNumber] = useState(0);
  const [userAge, setUserAge] = useState(0);
  function registerUser()
  {
    axios.post("http://localhost:5600/user/saveUser", {
      fullName: fullName, 
      userEmail: userEmail,
      userPassword: userPassword,
      userAge: userAge
    }).then((response) => {
      alert("Registered user successfully");
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
                  <label htmlFor="username">Name</label>
                  <input type="text" id="username" name="username" onChange={(e)=>setFullName(e.target.value)} />
                </div>
                <div className="formGroup">
                  <label htmlFor="age">Age</label>
                  <input type="number" id="age" name="age" onChange={(e)=>setUserAge(e.target.value)} />
                </div>
                <div className="formGroup">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" onChange={(e)=>setUserEmail(e.target.value)} />
                </div>
                <div className="formGroup">
                  <label htmlFor="number">Number</label>
                  <input type="number" id="number" name="number" onChange={(e)=>setUserNumber(e.target.value)} />
                </div>
                <div className="formGroup">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" name="password" onChange={(e)=>setUserPassword(e.target.value)} />
                </div>
              </div>
              <div className="buttonContainer">
                <NavLink to="/home"><button onClick={registerUser}>Register</button></NavLink>
                <div className="accountSwitch">
                  <p>Already Registred? <Link to={"/login"}>Login</Link></p>
                </div>
              </div>
            </form>
          </section>
        </div>

      </div>
    </>
  );
}

export default Register;
