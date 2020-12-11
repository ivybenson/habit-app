import React from "react";

import Context from "../Context";
import Calendar from "react-calendar";

export default class AddHabit extends React.Component {
  static contextType = Context;
  render() {
    const { habits_dummy = [] } = this.context;
    return (
      <ul>
        {habits_dummy.map((habit) => (
          <li className="habit-list-item">
            <p>Your current habit is:</p>
            {habit.title}
            <p>You want to do it {habit.frequency} times per week</p>
            <p>Reminder: {habit.note}</p>
            <Calendar />
          </li>
        ))}
      </ul>
    );
  }
}
