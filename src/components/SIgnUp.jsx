import { Link } from "react-router-dom";
import { auth } from "../firebase.js";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const signUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, userEmail, userPassword);

      navigate("/homepage");
    } catch (error) {
      console.error(error, "Wrong email or password");
    }
  };

  return (
    <div className="login">
      <Link>
        <img
          className="login_logo"
          src="https://www.shutterstock.com/image-vector/vector-logo-eshop-isolated-on-260nw-1779825959.jpg"
          alt="logo"
        />
      </Link>
      <div className="login_container">
        <h1>Create an Account</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
          />
          <button
            onClick={loginUser}
            type="submit"
            className="login_sign-in-button"
          >
            Sign In
          </button>
        </form>
        <p>By signing in you agree to E-shop's Terms and Conditions</p>
        <button className="login_register-button" onClick={signUp}>
          Create your Account
        </button>
      </div>
    </div>
  );
};

export default SignUp;
