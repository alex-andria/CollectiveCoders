import React from "react";
import { useState } from "react";
// import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function HomeAnonymous({ onLogin }) {
  const [showHomePage, setShowHomePage] = useState(true);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showHomePage ? (
        <>
          <div>
            <h1>Team Up</h1>
            <h1>
              And<span> Create</span>
            </h1>
            <h2>Want to boost your portfolio?</h2>
            <h2>Connect and add experienced projects under your belt!</h2>

            <button color="secondary" onClick={() => setShowHomePage(false)}>
              Lead a Project
            </button>
            <button color="secondary" onClick={() => setShowHomePage(false)}>
              Become a Mentee
            </button>
          </div>

          <div>
              <p>image goes here</p>
          </div>
        </>
      ) : (
        <>
          {showLogin ? (
            <div className="form-center">
              <LoginForm onLogin={onLogin} />
              {/* <Divider /> */}
              <p>
                Don't have an account? &nbsp;
                <button color="secondary" onClick={() => setShowLogin(false)}>
                  Sign Up
                </button>
              </p>
            </div>
          ) : (
            <div className="form-center">
              <SignupForm onLogin={onLogin} />
              {/* <Divider /> */}
              <p>
                Already have an account? &nbsp;
                <button color="secondary" onClick={() => setShowLogin(true)}>
                  Log In
                </button>
              </p>
            </div>
          )}
        </>
        // <div>
        //   <p>
        //     <button color="secondary"  onClick={() => setShowHomePage(true)}>
        //       Go Back
        //     </button>
        //   </p>
        // </div>
      )}
    </>
  );
}

export default HomeAnonymous;
