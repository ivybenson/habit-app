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
        <section>
          <h1>HabitNow</h1>
          <h2>Building new habits day by day.</h2>
        </section>
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
            <Link to="/login">
              <button className="login-button" aria-label="login" type="submit">
                Log In
              </button>
            </Link>
          </li>
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
        </ul>
      </nav>
    );
  }
}
