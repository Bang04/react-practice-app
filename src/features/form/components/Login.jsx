/* eslint-disable no-undef */
import React, { useState } from "react";
export default function Login() {
  const email = useRef();
  const password = useRef();

  function handleSubmit(event) {
    event.preventDefault();

    const enterEmail = email.current.value;
    const enterPassword = password.current.value;

    console.log('user enterEmail' , enterEmail);
    console.log('user enterPassword' , enterPassword);
    email.current.value = '';// 하나씩 전부 해야하는 번거로움 
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={email}/>
          <div className="control-error">
            {emailError && <p>{emailError}</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password}/>
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button type="submit" className="button">
          Login
        </button>
      </p>
    </form>
  );
}
