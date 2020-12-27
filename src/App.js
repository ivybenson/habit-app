import React from "react";
import { Route, Switch } from "react-router-dom";
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
import tokenServices from "./services/token-services";
import SignUp from "./Signup/Signup";

class App extends React.Component {
  state = {
    users: [],
    habits: [
      {
        id: 1,
        title: "Journaling",
        frequency: 2,
        note: "make sure to add stickers",
      },
      {
        id: 2,
        title: "Running",
        frequency: 3,
        note: "you are running from your nightmares",
      },
    ],
    events: [
      {
        habit_id: 1,
        date: "12/2/2020",
      },
      {
        habit_id: 1,
        date: "12/3/2020",
      },
      {
        habit_id: 2,
        date: "12/10/2020",
      },
    ],
    error: null,
    addHabit: (habit) => {
      this.setState({
        habits: [...this.state.habits, habit],
      });
    },
    addEvent: (event) => {
      this.setState({
        events: [...this.state.events, event],
      });
    },
    getHabits: () => {
      fetch(`${config.API_ENDPOINT}api/habits`, {
        headers: {
          Authorization: `Bearer ${tokenServices.getAuthToken()}`,
        },
      })
        .then((res) => res.json())
        .then((habits) => this.setState({ habits }));
    },
    logout: () => {
      this.setState({ habits: [], events: [] });
    },
  };

  componentDidMount() {
    if (tokenServices.hasAuthToken()) {
      this.state.getHabits();
    }
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        <div className="App">
          <h1 className="header">HabitNow</h1>
          <Route path="/" component={Navigation} />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route path="/add-habit" component={AddHabit} />
            <Route path="/habit-list" component={HabitList} />
            <Route path="/signup" component={SignUp} />
            <Route render={() => <h2>Page Not Found</h2>} />
          </Switch>
        </div>
      </Context.Provider>
    );
  }
}

export default App;
