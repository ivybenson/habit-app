import React from "react";

import Context from "../Context";

export default class AddHabit extends React.Component {
  static contextType = Context;
  render() {
    const { habits = [] } = this.context;
    return <ul></ul>;
  }
}
