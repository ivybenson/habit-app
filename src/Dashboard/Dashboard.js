import React from "react";
import AddHabit from "../AddHabit/AddHabit";
import HabitList from "../HabitList/HabitList";

export default class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <AddHabit />
        Here are your Habits:
        <HabitList />
      </div>
    );
  }
}
