import React from "react";
import Context from "../Context";
import Calendar from "react-calendar";
import config from "../config";
import TokenService from "../services/token-services";

export default class AddHabit extends React.Component {
  static contextType = Context;

  state = { events: [] };

  tileClassName = (date, view, dates) => {
    if (dates.includes(new Date(date).toLocaleDateString())) {
      return "selectedDate";
    }
  };

  addNewEvent = (value, e, habit) => {
    const event = {
      habit_id: habit.id,
      date: new Date(value),
    };
    let status;
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
        status = res.status;
        return res.json();
      })
      .then((event) => {
        console.log({ status });
        if (status === 200) {
          this.context.deleteEvent(event);
        } else {
          this.context.addEvent(event);
        }
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
              onClickDay={(value, event) =>
                this.addNewEvent(value, event, habit)
              }
              tileClassName={({ date, view }) => {
                return this.tileClassName(
                  date,
                  view,
                  this.context.events
                    .filter((e) => e.habit_id === habit.id)
                    .map((e) => new Date(e.datecreated).toLocaleDateString())
                );
              }}
            />
          </li>
        ))}
      </ul>
    );
  }
}
