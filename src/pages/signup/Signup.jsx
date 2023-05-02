import React from "react";
import "./signup.scss";
import { useState } from "react";
import { auth } from "../../firebase";

import { createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signupUser = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(user);
      })
      .catch((error) => {
        setError(true);
        // ..
      });
  };

  return (
    <>
      <div className="signup">
        <form onSubmit={signupUser}>
          <p>Signup to create an account:</p>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Signup</button>
          {error && <span>You arleady have an account.</span>}

          <p>Already have an account? Login HERE</p>
        </form>
      </div>
    </>
  );
};

export default Signup;
