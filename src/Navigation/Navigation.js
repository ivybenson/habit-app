import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div>
      <Link to="/">Welcome</Link> | <Link to="/login">Log In</Link> |
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
}
