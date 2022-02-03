import React, { useState } from "react";
import axios from 'axios';
import { Wrapper } from "./style";


export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showLoginErrMsg, setShowLoginErrMsg] = useState(false);

  const checkEnter = (e) => {
    if (e.key === "Enter") login();
  };

  const login = () => {
    const data = { email, password };

    axios
      .post("http://localhost:5000/api/login", data)
      .then((res) => {
        window.location = '/category/new';
      })
      .catch((err) => {
        setShowLoginErrMsg(true);
      });
  };

  return (
    <Wrapper>
      <div className="authLanding">
        <h1>Log in</h1>

        {showLoginErrMsg ? (
          <div className="loginError">Wrong username or password.</div>
        ) : null}

        <div className="inputContainer">
          <input
            type="text"
            name="email"
            placeholder="Email address"
            aria-label="email"
            onChange={(e) => setEmail(e.target.value)}
            onKeyUp={checkEnter}
            required
          />
        </div>
        <div className="inputContainer">
          <input
            type="password"
            name="password"
            placeholder="Password"
            aria-label="password"
            onChange={(e) => setPassword(e.target.value)}
            onKeyUp={checkEnter}
            required
          />
        </div>
        <div className="buttonContainer">
          <button type="submit" onClick={login}>
            Log In
          </button>
        </div>
      </div>
    </Wrapper>
  );
};
