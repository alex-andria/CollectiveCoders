import React, { useState } from "react";
// import { Error } from "../styles";

function SignupForm({ onLogin }) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [bio, setBio] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/mentor/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        email_address: email,
        password: password,
        password_confirmation: passwordConfirmation,
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
        <div className="imgcontainer">
          {/* <img src={Habit} alt="Habitual Logo" className="avatar" /> */}
        </div>

        <div className="container">

        <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            id="first_name"
            autoComplete="off"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

        <label htmlFor="Last_name">Last Name</label>
          <input
            type="text"
            id="last_name"
            autoComplete="off"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          
          <label htmlFor="email_address">Email Address</label>
          <input
            type="text"
            id="email_address"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />

          <label htmlFor="password">Password Confirmation</label>
          <input
            type="password"
            id="password_confirmation"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            autoComplete="current-password"
          />

          {/* <label htmlFor="imageUrl">Profile Image</label>
          <input
            type="text"
            id="imageUrl"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          /> */}
        </div>
        <div className="container">
          <button type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
        </div>
        <div className="container">
          {/* {errors.map((err) => (
            <Error key={err}>{err}</Error>
          ))} */}
        </div>
      </form>
    </div>
  );
}

export default SignupForm;
