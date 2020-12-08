import React from "react";

import Context from "../Context";

export default class AddHabit extends React.Component {
  static contextType = Context;
  render() {
    const { habits = [] } = this.context;
    return (
      <ul>
        {habits.map((habit) => (
          <li>
            <p>Your current habit is:</p>
            {habit.title}
            <p>You want to do it {habit.frequency} times per week</p>
            <p>Reminder: {habit.note}</p>
          </li>
        ))}
      </ul>
    );
  }
}
