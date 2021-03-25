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
    deleteEvent: (oldEvent) => {
      this.setState({
        events: this.state.events.filter((event) => event.id !== oldEvent.id),
      });
    },
    getHabits: () => {
      fetch(`${config.API_ENDPOINT_TEST}api/habits`, {
        headers: {
          Authorization: `Bearer ${tokenServices.getAuthToken()}`,
        },
      })
        .then((res) => res.json())
        .then((habits) =>
          this.setState({ habits }, () => this.state.getEvents())
        );
    },
    getEvents: () => {
      fetch(`${config.API_ENDPOINT_TEST}api/progress/byhabits`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenServices.getAuthToken()}`,
        },
        body: JSON.stringify({
          habit_ids: this.state.habits.map((habit) => habit.id),
        }),
      })
        .then((res) => res.json())
        .then((events) => this.setState({ events }));
    },
    logout: () => {
      this.setState({ habits: [], events: [] });
    },
  };

  //CONTEXT AND APP COMPONENT STATE MERGED

  componentDidMount() {
    if (tokenServices.hasAuthToken()) {
      this.state.getHabits();
    }
  }

  //REACT ROUTER SET IN APP, NAV HAS THE LINKS

  render() {
    return (
      <Context.Provider value={this.state}>
        <div className="App">
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
