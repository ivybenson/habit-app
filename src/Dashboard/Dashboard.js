import React from "react";
import AddHabit from "../AddHabit/AddHabit";
import HabitList from "../HabitList/HabitList";

export default class Dashboard extends React.Component {
  render() {
    return (
      <div onSubmit={this.addEvent}>
        <AddHabit />
        <h3>Current List</h3>

        <HabitList />
      </div>
    );
  }
}
