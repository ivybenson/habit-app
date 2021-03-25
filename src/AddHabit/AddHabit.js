import React from "react";

import Context from "../Context";
import config from "../config";
import TokenService from "../services/token-services";

export default class AddHabit extends React.Component {
  static contextType = Context;

  static defaultProps = {
    onAddHabit: () => {},
  };

  state = {
    error: null,
  };

  addNewHabit = (e) => {
    e.preventDefault();
    const { title, frequency, note } = e.target;
    const habit = {
      id: this.context.habits.length + 1,
      title: title.value,
      frequency: frequency.value,
      note: note.value,
    };
    fetch(`${config.API_ENDPOINT_TEST}api/habits`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(habit),
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
        alert(
          "Your habit has been added to your list. Tap dates to track your habit."
        );
        e.target.reset();
        this.context.addHabit(habit);
      })
      .catch((error) => this.setState({ error }));
  };

  // add habit expecting 201 back will add to the bottom at first and then will be sorted newest to oldest upon reload

  render() {
    return (
      <div className="add-habit">
        <h2>Add A Habit</h2>

        <form className="add-habit-form" onSubmit={this.addNewHabit}>
          <p>
            I want to {""}
            <input
              type="text"
              placeholder="reading, running, cooking"
              id="habit-title"
              required
              aria-required="true"
              aria-label="reading, walking, drinking water"
              name="title"
            />
          </p>

          <p>
            <input
              type="number"
              id="frequency"
              required
              min="1"
              placeholder="number"
              aria-required="true"
              aria-label="number"
              name="frequency"
            />{" "}
            times per week
          </p>

          <input
            type="text"
            id="note"
            placeholder="note"
            aria-required="true"
            aria-label="habit-note"
            name="note"
          />
          <p>Write yourself a note of encouragement</p>
          <button
            className="add-habit-button"
            type="submit"
            style={{ border: "black" }}
          >
            Add Habit
          </button>
        </form>
      </div>
    );
  }
}
