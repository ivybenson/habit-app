import React from "react";
import "./Signup.css";
import AuthApiService from "../services/auth-api-service";

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
      <section>
        <h3>Get Started</h3>
        <form aria-label="signup-form" onSubmit={this.handleSubmit}>
          {this.state.error && <p className="error">{this.state.error}</p>}
          <fieldset>
            <div>
              <label>Email: </label>
              <input
                type="emial"
                placeholder="email"
                name="email"
                id="new-email"
              />
            </div>
          </fieldset>
          <fieldset>
            <div>
              <label htmlFor="new-paaword" className="signup-pw">
                Password:
              </label>
              <input
                id="new-password"
                type="password"
                placeholder="new password"
                name="password"
              />
            </div>
          </fieldset>
          <fieldset>
            <div>
              <label htmlFor="retype-paaword" className="confirm-user-pw">
                Confirm Password:
              </label>
              <input
                id="new-password"
                type="password"
                placeholder="confirm password"
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
