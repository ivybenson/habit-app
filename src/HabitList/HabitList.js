import React from "react";

import Context from "../Context";
import Calendar from "react-calendar";

export default class AddHabit extends React.Component {
  static contextType = Context;

  tileClassName = (date, view, dates) => {
    if (dates.includes(new Date(date).toLocaleDateString())) {
      console.log("yes");
      return "selectedDate";
    }
  };

  render() {
    const { habits = [] } = this.context;
    return (
      <ul>
        {habits.map((habit) => (
          <li key={habit.id} className="habit-list-item">
            <p>Your current habit is:</p>
            {habit.title}
            <p>You want to do it {habit.frequency} times per week</p>
            <p>Reminder: {habit.note}</p>
            <button>Delete</button>
            <Calendar
              onClickDay={(value, event) => {
                this.context.addEvent({
                  habit_id: habit.id,
                  date: new Date(value).toLocaleDateString(),
                });
              }}
              tileClassName={({ date, view }) => {
                return this.tileClassName(
                  date,
                  view,
                  this.context.events
                    .filter((e) => e.habit_id === habit.id)
                    .map((e) => e.date)
                );
              }}
            />
          </li>
        ))}
      </ul>
    );
  }
}
