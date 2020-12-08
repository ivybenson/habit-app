import React from "react";
import moment from "moment";

export default class Calendar extends React.Component {
  weekdayshort = moment.weekdaysShort();
  render() {
    return <div>placeholder</div>;
    // let weekdayshortname = this.weekdayshort.map((day) => {
    //   return (
    //     <th key={day} className="week-day">
    //       {day}
    //     </th>
    //   );
  }
}
