import React from "react";

import Context from "../Context";
import config from "../config";

export default class AddHabit extends React.Component {
  static contextType = Context;

  state = {
    habit: {
      title: "",
      frequency: "",
      note: "",
    },
  };

  addNewHabit = (habit) => {
    fetch(`${config.API_ENDPOINT}/api/habits`, {
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

  titleChange(title) {
    this.setState({
      title,
    });
  }

  frequencyChange(frequency) {
    this.setState({
      frequency,
    });
  }

  noteChange(note) {
    this.setState({
      note,
    });
  }

  //   handleAddHabit = (e) => {
  //     e.preventDefault(e);
  //     const newHabit = {
  //       title: this.state.habit.title.value,
  //       frequency: this.state.habit.frequency.value,
  //       note: this.state.habit.note.value,
  //       modified: new Date(),
  //     };
  //     console.log(newHabit);
  //     this.addNewHabit(newHabit);
  //     this.props.history.push("/");
  //   };

  //   updatHabitData = (e) => {
  //       this.setState({
  //           habit:{
  //               title:
  //           }
  //       })
  //   }

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
            required
            aria-required="true"
            aria-label="habit-title"
            onChange={(e) => this.titleChange(e.target.value)}
          />
          <label htmlFor="frequency"></label>
          <input
            type="text"
            id="frequency"
            required
            placeholder="number"
            aria-required="true"
            aria-label="habit-frequency"
            onChange={(e) => this.frequencyChange(e.target.value)}
          ></input>
          <p>times per week</p>
          <label htmlFor="note"></label>
          <input
            type="text"
            id="note"
            placeholder="note"
            aria-required="true"
            aria-label="habit-note"
            onChange={(e) => this.noteChange(e.target.value)}
          ></input>
          <p>Write yourself a note of encouragement!</p>
          <button
            className="add-habit-button"
            disabled={this.validatHabitFrequency && this.validatHabitTitle}
            type="submit"
          >
            Add Habit
          </button>
        </form>
      </div>
    );
  }
}
