import React from "react";
import "./Login.css";
import TokenService from "../services/token-services";
// import { API_BASE_URL } from "../config";

export default class Login extends React.Component {
  handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    const newUser = { email: email.value, password: password.value };

    // fetch(`${API_BASE_URL}/api/auth/login`, {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(newUser),
    // })
    //   .then((res) => res.json())
    //   .then((loginResponse) => {
    //     TokenService.saveAuthToken(loginResponse.authToken);
    //     this.props.history.push("/dashbord");
    //   })
    //   .catch((err) => console.error(err));

    TokenService.saveAuthToken("authtoken1");
    this.props.history.push("/dashboard");
  };

  render() {
    return (
      <section className="login">
        <h2>Log In</h2>

        <form className="login-form" onSubmit={this.hangleLogin}>
          <fieldset aria-label="email">
            <label
              id="email"
              type="email"
              placeholder="Email"
              name="email"
              value="demo@demo.com"
            >
              Email:
            </label>
            <input></input>
          </fieldset>
          <fieldset aria-label="password">
            <label>Password:</label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              name="password"
              value="P@ssword1234"
            ></input>
          </fieldset>
          <button className="login" type="submit">
            Log In
          </button>
        </form>
      </section>
    );
  }
}
