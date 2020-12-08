import React from "react";

import Context from "../Context";
import config from "../config";

export default class AddHabit extends React.Component {
  static contextType = Context;

  addNewHabit = (habit) => {
    fetch(`${config.API_ENDPOINT}/habits`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(habit),
    })
      .then((res) => {
        return res.json();
      })
      .then((resJson) => this.context.handleAddHabit(resJson))
      .catch((error) => {
        console.error(error);
      });
  };

  handleAddHabit = (e) => {
    e.preventDefault(e);
    const newHabit = {
      title: this.context.newHabit.title.value,
      frequency: this.context.newHabit.frequency.value,
      note: this.context.newHabit.note.value,
      modified: new Date(),
    };
    console.log(newHabit);
    this.addNewHabit(newHabit);
    this.props.history.push("/");
  };

  validatHabitTitle = () => {
    if (this.context.newHabit.title.value.length === 0) {
      return "Please add habit.";
    }
  };

  validatHabitFrequency = () => {
    if (this.context.newHabit.frequency.value.length === 0) {
      return "Please add frequency.";
    }
  };

  render() {
    return (
      <div>
        <h2>Your Habits</h2>
        <p>I want to </p>
        <form className="add-habit-form" onSubmit={this.handleAddHabit}>
          <label htmlFor="title"></label>
          <input
            type="text"
            placeholder="habit"
            id="habit-title"
            rewuired
            aria-required="true"
            aria-label="habit-title"
          ></input>
          <label htmlFor="frequency"></label>
          <input
            type="text"
            id="frequency"
            required
            placeholder="number"
            aria-required="true"
            aria-label="habit-frequency"
            onChange={(e) =>
              this.context.updateNewHabitData(e.target.name, e.target.value)
            }
          ></input>
          <p>times per week</p>
          <label htmlFor="note"></label>
          <input
            type="text"
            id="note"
            placeholder="note"
            aria-required="true"
            aria-label="habit-note"
            onChange={(e) =>
              this.context.updateNewHabitData(e.target.name, e.target.value)
            }
          ></input>
          <p>Write yourself a note of encouragement!</p>
          <button type="submit">Add Habit</button>
        </form>
      </div>
    );
  }
}
