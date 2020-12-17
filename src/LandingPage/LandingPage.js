import React from "react";

export default function LandingPage(props) {
  return (
    <div className="landingPage">
      <h2>Welcome to the HabitNow.</h2>
      <p>Create an account or sign up to get started.</p>
      <p>
        Select from the habits below and how many times a week you want to
        pursue your habit. These will be added to your dashboard and you can
        track by pressing each date on the calendar on each habit. Start
        buidling your habits today!
      </p>
      <button type="submit" onClick={(e) => props.history.push("/login")}>
        Get Started
      </button>
    </div>
  );
}
