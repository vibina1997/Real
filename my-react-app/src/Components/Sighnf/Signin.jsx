import React from 'react'
import sigup from '../../assets/siup.module.css'
const Signin = () => {
  return (
    <div>
      <div className="app">
        <h3>Sign Up</h3>
        <form className={sigup.Adduserform}></form>
        <div className={sigup.INputegroup}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" autoComplete="off" placeholder=""enter your name/>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" autoComplete="off" placeholder=""enter your email/>
          <label htmlFor="Name">name:</label>
          <input type="password" id="password" autoComplete="off" placeholder="enter password"/>
        </div>
        <button type="submit" className={sigup.ssbutton}></button>
      </div>
      
    </div>
  )
}

export default Signin

