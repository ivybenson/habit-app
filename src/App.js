import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import config from "./config";

// import Calendar from "./Calendar";
import "./App.css";
import Context from "./Context";
import AddHabit from "./AddHabit/AddHabit";
import HabitList from "./HabitList/HabitList";
import LandingPage from "./LandingPage/LandingPage";

class App extends React.Component {
  state = {
    users: [],
    habits: [],
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

  componentDidMount() {}

  updateNewHabitData = (input, value) => {
    this.setState({
      newHabit: {
        ...this.state.newHabit,
        [input]: {
          touched: true,
          value: value,
        },
      },
    });
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        <div className="App">
          <h1 className="header">HabitNow</h1>

          <LandingPage />
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

          <AddHabit />
          <HabitList />
          <div>
            {/* <Calendar /> */}
            {/* <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" /> */}
          </div>
          <div>
            <Calendar />
          </div>
        </div>
      </Context.Provider>
    );
  }
}

export default App;
