import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div>
      <Link to="/welcome">Welcome</Link> | <Link to="/login">Log In</Link> |
      <Link to="/AddHabit">Add</Link> | <Link to="/HabitList">Habits</Link>
    </div>
  );
}
