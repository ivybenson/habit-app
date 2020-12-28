import React from "react";
import { Link } from "react-router-dom";
import TokenService from "../services/token-services";
import Context from "../Context";

export default class Navigation extends React.Component {
  static contextType = Context;

  logout = () => {
    TokenService.clearAuthToken();
    this.context.logout();
    this.props.history.push("/");
  };

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="header">
          <h1>HabitNow</h1>
        </h1>
        <ul className="nav-list">
          {TokenService.hasAuthToken() ? (
            <>
              <li>
                <button
                  className="logout-button"
                  aria-label="logout-button"
                  type="submit"
                  onClick={() => this.logout()}
                >
                  Log out
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/">
                  <button
                    className="welcome-button"
                    aria-label="welcome"
                    type="submit"
                  >
                    Welcome
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/signup">
                  <button
                    className="signup-button"
                    aria-label="signup"
                    type="submit"
                  >
                    Signup
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <button
                    className="login-button"
                    aria-label="login"
                    type="submit"
                  >
                    Log In
                  </button>
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    );
  }
}
