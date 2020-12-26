import React from "react";
import { Link } from "react-router-dom";
import TokenService from "../services/token-services";

export default class Navigation extends React.Component {
  logout = () => {
    TokenService.clearAuthToken();
    this.props.history.push("/");
  };

  render() {
    return (
      <nav>
        <ul>
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
          {!TokenService.hasAuthToken() ? (
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
          ) : (
            <>
              <li>
                <Link to="/dashboard">
                  <button
                    className="dashboard-button"
                    aria-label="Dashboard"
                    type="submit"
                  >
                    Dashboard
                  </button>
                </Link>
              </li>
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
          )}
        </ul>
      </nav>
    );
  }
}
