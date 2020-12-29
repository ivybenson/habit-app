import React from "react";
import Context from "../Context";
import Calendar from "react-calendar";
import config from "../config";
import TokenService from "../services/token-services";

export default class AddHabit extends React.Component {
  static contextType = Context;

  state = {};

  tileClassName = (date, view, dates) => {
    if (dates.includes(new Date(date).toLocaleDateString())) {
      return "selectedDate";
    }
  };

  addNewEvent = (e) => {
    e.preventDefault();

    const event = {
      id: this.context.habits.length + 1,
      date: this.context.events.date,
      habit_id: this.context.events.habit_id,
    };
    fetch(`${config.API_ENDPOINT}api/progress`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(event),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((error) => {
            throw error;
          });
        }
        return res.json();
      })
      .then((habit) => {
        e.target.reset();
        this.context.addEvent(habit);
      })
      .catch((error) => this.setState({ error }));
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
