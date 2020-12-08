import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

// import Calendar from "./Calendar";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      userid_habits: [],
      newHabit: {
        title: {
          touched: false,
          value: "",
        },
        frequency: {
          touched: false,
          value: "",
        },
        note: {
          touched: false,
          value: "",
        },
      },
    };
  }

  handleAddHabit = () => {
    console.log("habit added");
  };

  render() {
    return (
      <div className="App">
        <h1 className="header">HabitNow</h1>
        <div className="landingPage">
          <g2>Welcome to the Habit App. Start buidling your habits today!</g2>
          <p>Create an account or sign up to get started.</p>
          <p>
            Select from the habits below and how many times a week you want to
            pursue your habit. These will be added to your main page and you can
            track from there!
          </p>
        </div>

        <div className="logIn">
          <h2>Log in here</h2>
          <form>
            <label>Username:</label>
            <input></input>
          </form>
          <form>
            <label>Password:</label>
            <input></input>
          </form>
        </div>

        <div className="habits">
          <h2>Your Habits</h2>
          <p>I want to </p>
          <select>
            <option value="journal">Journal</option>
            <option value="exercise">Exercise</option>
            <option value="meditate">Meditate</option>
            <option value="read">Read</option>
          </select>

          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <p>times per week</p>
          <button onClick={this.handleAddHabit}>Add Habit</button>
        </div>
        <div>
          {/* <Calendar /> */}
          {/* <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" /> */}
        </div>
        <div>
          <Calendar />
        </div>
      </div>
    );
  }
}

export default App;
