import React from "react";
import "./Login.css";
import AuthApiService from "../services/auth-api-service";
import TokenService from "../services/token-services";
import Context from "../Context";

export default class Login extends React.Component {
  static contextType = Context;

  handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    const user = { email: email.value, password: password.value };
    AuthApiService.loginUser(user)
      .then((loginResponse) => {
        TokenService.saveAuthToken(loginResponse.authToken);
        this.context.getHabits();
        this.props.history.push("/dashboard");
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    return (
      <section className="login">
        <h2>Log In</h2>

        <form className="login-form" onSubmit={this.handleLogin}>
          <fieldset aria-label="email">
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" placeholder="Email" name="email" />
          </fieldset>
          <fieldset aria-label="password">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              name="password"
            />
          </fieldset>
          <button className="login" type="submit">
            Log In
          </button>
        </form>
      </section>
    );
  }
}
