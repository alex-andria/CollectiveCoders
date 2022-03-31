import React, { useState } from "react";
// import {Error} from "../styles/"

function LoginForm({ onLogin }) {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
          email_address: emailAddress, 
          password: password
        }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="img-container">
          {/* <img src={Habit} alt="Habitual Logo" className="avatar" /> */}
        </div>

        <div className="container">
          <label htmlFor="email_address">Email Address</label>
          <input
            type="text"
            id="email_address"
            autoComplete="off"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
          />
        
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="container">
          <button variant="fill" color="primary" type="submit">
              {isLoading ? "Loading..." : "Login"}
            </button>
        </div>

        <div className="container">
          <h3>
            {/* {errors.map((err) => (
              <p key={err}>{err}</p>
            ))} */}
            {console.log(errors)}
          </h3>
        </div>
  
      </form>
    </div>
  );
}

export default LoginForm;