import React from "react";
import "./Login.css"; // Assuming you have a CSS file for styling
import logo from "../../assets/logo.png"; // Assuming you have a logo image
import { login, signUp } from "../../firebase";
import netflix_spinner from "../../assets/netflix_spinner.gif"; // Adjust the path as necessary

const Login = () => {
  const [signState, setSignState] = React.useState("Sign In ");

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const user_auth = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (signState === "Sign In ") {
      await login(email, password);
    } else {
      await signUp(name, email, password);
    }
    setLoading(false);
  };

  return loading ? (
    <div className="login_spinner">
      <img src={netflix_spinner} alt="Loading..." />
    </div>
  ) : (
    <div className="login">
      <img src={logo} alt="" className="login-logo" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up" ? (
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => {
                {
                  setName(e.target.value);
                }
              }}
            />
          ) : (
            <></>
          )}
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => {
              {
                setEmail(e.target.value);
              }
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              {
                setPassword(e.target.value);
              }
            }}
          />
          <button onClick={user_auth} type="submit">
            {signState}{" "}
          </button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember me</label>
            </div>
            <p>Need help</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign In " ? (
            <p>
              New to Netflix{" "}
              <span
                onClick={() => {
                  setSignState("Sign Up");
                }}
              >
                Sign up now
              </span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span
                onClick={() => {
                  setSignState("Sign In ");
                }}
              >
                Sign in
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
