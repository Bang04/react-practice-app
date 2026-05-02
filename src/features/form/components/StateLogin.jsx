import React, { useState } from "react";
import Input from "./Input";
import { isEmail , isNotEmpty, hasMinLength } from "../util/validation";
import { useInput } from "../hook/useInput";
export default function Login() {
  const {
    value : emailValue, 
    handleInputChange : handleEmailChange,
    handleInputBlur  : handleEmailBlur,
    hasError : emailHasError
  } = useInput('', (value) => isEmail(value) && isNotEmpty(value));


  const  {
    value : passwordValue,
    handleInputChange : handlePasswordChange,
    handleInputBlur : handlePasswordBlur,
    hasError : passwordHasError,
  } =
  useInput('', (value) => hasMinLength(value, 6));

  function handleSubmit(event) {
    event.preventDefault();
   
    if(emailHasError || passwordHasError ){
      return;
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>State Login</h2>

      <div className="control-row">
        <Input 
          label="Email" 
          id="email" 
          error={emailHasError ? "Please enter a valid email" : null}
            name="email" 
            onChange={handleEmailChange}
            onBlur={handleEmailBlur}
            value={emailValue}
          /> 
    
        <Input 
            label="Password" 
            id="password"
            error={passwordHasError ? "Please enter a valid password" : null}
            type="password"
            name="password"
            onChange={handlePasswordChange}
            onBlur={handlePasswordBlur}
            value={passwordValue}  
        /> 
      </div>

      <p className="form-actions">
        <button type="button" className="button button-flat">Reset</button>
        <button type="submit" className="button">
          Login
        </button>
      </p>
    </form>
  );
}
