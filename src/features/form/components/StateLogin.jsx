import React, { useState } from "react";
export default function Login() {
  const [enterValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const emailInvalid = didEdit.email && !enterValues.email.includes("@");

  function handleSubmit(event) {
    event.preventDefault();
    // setEnteredValues({
    //   email: "",
    //   password: "",
    // });
  }

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  function handleInputChange(identifier, value) {
    setEnteredValues((prevVlues) => ({
      ...prevVlues,
      [identifier]: value,
    }));
     setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: false,
    }));
  }

  function handleInputBlur(identifier) {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onBlur={()=> handleInputBlur('email')}
            onChange={(event) => handleInputChange("email", event.target.value)}
            value={enterValues.email}
          />
          <div className="control-error">
            {emailInvalid && <p>Please enter a valid email address</p>}
          </div>
          {/* handleInputChange('email') // 즉시 실행됨 ❌ */}
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
            value={enterValues.password}
          />
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
