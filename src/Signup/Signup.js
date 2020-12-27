import React from "react";
import "./Signup.css";
import AuthApiService from "../services/auth-api-service";

export default class Signup extends React.Component {
  state = {
    error: null,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword, name } = e.target;
    this.setState({ error: null });
    AuthApiService.postUser({
      email: email.value,
      password: password.value,
      confirmPassword: confirmPassword.value,
      name: name.value,
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
      <section>
        <h3>Get Started</h3>
        <form aria-label="signup-form" onSubmit={this.handleSubmit}>
          {this.state.error && <p className="error">{this.state.error}</p>}
          <fieldset>
            <div>
              <label>Name: </label>
              <input type="name" placeholder="Name" name="name" id="new-name" />
            </div>
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
                Password:
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
                Confirm Password:
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
      </section>
    );
  }
}
