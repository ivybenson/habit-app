import React from "react";
import "./Signup.css";
import AuthApiService from "../services/auth-api-service";
import { Link } from "react-router-dom";

export default class Signup extends React.Component {
  state = {
    error: null,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword } = e.target;
    this.setState({ error: null });
    AuthApiService.postUser({
      email: email.value,
      password: password.value,
      confirmPassword: confirmPassword.value,
    })
      .then((user) => {
        this.props.history.push("./login");
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    return (
      <section className="signup-page">
        <div>
          <h2>Signup</h2>
          <p>
            Add account here or click Log In below if you already have an
            account. Upon signing in you can add habits right away. Track your
            habits by tapping on the days that you completed your habit and it
            will turn green to track that you have completed it that day.
          </p>
        </div>
        <form aria-label="signup-form" onSubmit={this.handleSubmit}>
          {this.state.error && <p className="error">{this.state.error}</p>}
          <fieldset>
            <div>
              <label>Email: </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                id="new-email"
              />
            </div>
          </fieldset>
          <fieldset>
            <div>
              <label htmlFor="new-password" className="signup-pw">
                Password: {""}
              </label>
              <input
                id="new-password"
                type="password"
                placeholder="New Password"
                name="password"
              />
            </div>
          </fieldset>
          <fieldset>
            <div>
              <label htmlFor="confirm-password" className="confirm-user-pw">
                Confirm Password: {""}
              </label>
              <input
                id="confirm-password"
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
              />
            </div>
          </fieldset>
          <fieldset aria-label="signup">
            <button type="submit" name="signup-btn">
              Sign Up
            </button>
          </fieldset>
        </form>

        <Link to="/login">
          <button className="login-button" aria-label="login" type="submit">
            Log In
          </button>
        </Link>
      </section>
    );
  }
}
