import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";
import "moment/locale/pt-br";
import "./calendarStyles.css";

//Date format for calendar, either single date or range of ranges
type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

// Some day of an event to test higlighting
function getDayOfEvents() {
  const EventDay = moment("2023-12-04");
  return EventDay;
}

//Changes css of a tile if dates match, goes through every day displayed by the calendar in the month view
function tileClassName({ date, view }) {
  // Add class to tiles in month view only
  if (view === "month") {
    const day = moment(date);
    var EventDay = getDayOfEvents();
    if (day.isSame(EventDay, "day")) {
      // CSS class from calendarStyles.css
      return "highlight";
    }
  }
}

// Calendar Component
export default function BasicCalendar() {
  const [value, onChange] = useState<Value>(new Date());

  // Get the date as a momentJS object
  function getDaySelected() {
    return moment(value?.toString());
  }
  console.log(getDaySelected());
  return (
    <div className="react-calendar">
      <Calendar
        onChange={onChange}
        // Date selected
        value={value}
        // Event highlighting
        tileClassName={tileClassName}
      />
    </div>
  );
}
