import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { useAuth } from "../../contexts/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import "./SignIn.css"; // Importa il file CSS rinominato

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorOccured, setErrorOccured] = useState(false);
  const { login } = useAuth();
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const signIn = (e) => {
    e.preventDefault();
    login(email, password)
      .then((userCredential) => {
        setErrorOccured(false);
        console.log(userCredential);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setErrorOccured(true);
        console.log(error);
      });
  };

  return (
    <div className="sign-in-container">
      <p>You must log in to view the page at {from}</p>

      <form onSubmit={signIn}>
        <h1>Log In to your Account</h1>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type="submit">Log In</button>
      </form>
      {errorOccured && <p>An error has occurred</p>}
    </div>
  );
};

export default SignIn;
