import React from "react";

export default function LandingPage(props) {
  return (
    <div className="landingPage">
      <h2>Welcome to HabitNow.</h2>
      <p>Log in or sign up to start tracking your habits.</p>
      <p>
        Add a habit with the number of times per week and a note on why you want
        to keep on working on the habit. Your habit will be added to your
        dashboard and you can track by tapping the dates you have completed the
        habit. Start building your habits today!
      </p>
      <button
        className="landingpage-btn"
        type="submit"
        onClick={(e) => props.history.push("/signup")}
      >
        Get Started
      </button>
    </div>
  );
}
