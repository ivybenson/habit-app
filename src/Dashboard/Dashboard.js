import React from "react";
import AddHabit from "../AddHabit/AddHabit";
import HabitList from "../HabitList/HabitList";

export default class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <h2>Hello, User!</h2>
        Here are your Habits:
        <HabitList />
        Add A New One?
        <AddHabit />
      </div>
    );
  }
}
