import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import "react-calendar/dist/Calendar.css";
import config from "./config";
import "./App.css";
import Context from "./Context";
import AddHabit from "./AddHabit/AddHabit";
import HabitList from "./HabitList/HabitList";
import LandingPage from "./LandingPage/LandingPage";
import Login from "./Login/Login";
import Navigation from "./Navigation/Navigation";
import Dashboard from "./Dashboard/Dashboard";

class App extends React.Component {
  state = {
    users: [],
    habits: [
      {
        id: "1",
        title: "Journaling",
        frequency: 2,
        note: "makes sure to add stickers",
      },
      {
        id: "2",
        title: "Running",
        frequency: 3,
        note: "you are running from your nightmares",
      },
    ],
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
    updateNewHabitData: () => {},
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
          <Navigation />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/welcome" component={LandingPage} />
            <Route path="/login" component={Login} />
            <Route path="/AddHabit" component={AddHabit} />
            <Route path="/habitlist" component={HabitList} />
            <Route render={() => <h2>Page Not Found</h2>} />
          </Switch>
        </div>
      </Context.Provider>
    );
  }
}

export default App;
