import { Link } from "react-router-dom";
import { auth } from "../firebase.js";
import { useContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../context/ProductsContext.jsx";

const Login = () => {
  const { setHeaderUserEmail } = useContext(ProductsContext);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [wrongInputs, setWrongInputs] = useState("");
  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, userEmail, userPassword);
      setHeaderUserEmail(userEmail);
      navigate("/homepage");
    } catch (error) {
      setWrongInputs("Your e-mail or password is wrong");
    }
  };

  const signUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, userEmail, userPassword);
      setUserEmail("");
      setUserPassword("");
    } catch (error) {
      setWrongInputs("Please fill the inputs");
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
        <h1>Sign in</h1>
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
          <div
            className={
              (userPassword.length > 5 && userEmail.length) > 4
                ? ""
                : "login_sign-in-div-false"
            }
          >
            <button
              onClick={loginUser}
              type="submit"
              className={
                userPassword.length > 5 && userEmail.length > 4
                  ? "login_sign-in-button-green"
                  : "login_sign-in-button"
              }
              disabled={!(userPassword.length > 5 && userEmail.length > 4)}
            >
              Sign In
            </button>
          </div>
        </form>
        <p>By signing in you agree to E-shop's Terms and Conditions</p>
        <button className="login_register-button" onClick={signUp}>
          Create your Account
        </button>
      </div>
      <p className="login_wrong-inputs">{wrongInputs}</p>
    </div>
  );
};

export default Login;
