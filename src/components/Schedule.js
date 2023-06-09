import React from "react";
import DatePicker from "./DatePicker";

const marketSchedule = [
  {
    day: "Sunday",
    location: "Lents International",
    hours: "9:00am - 2:00pm",
    booth: "4A"
  },
  {
    day: "Monday",
    location: "Pioneer Courthouse Square",
    hours: "10:00am - 2:00pm",
    booth: "7C"
  },
  {
    day: "Tuesday",
    location: "Hillsboro",
    hours: "5:00pm - 8:30pm",
    booth: "1F"
  },
  {
    day: "Wednesday",
    location: "Shemanski Park",
    hours: "10:00am - 2:00pm",
    booth: "3E"
  },
  {
    day: "Thursday",
    location: "Northwest Portland",
    hours: "2:00pm - 6:00pm",
    booth: "6D"
  },
  {
    day: "Saturday",
    location: "Beaverton",
    hours: "10:00am - 1:30pm",
    booth: "9G"
  }
];

function Schedule(props) {
  return (
    <React.Fragment>
      <h3 class="text-center">Farmers Market Schedule for {marketSchedule[props.selectedDay].day}s</h3>
      <p>Come see on  {marketSchedule[props.selectedDay].day}s at {marketSchedule[props.selectedDay].location} at booth {marketSchedule[props.selectedDay].booth}.  We are open {marketSchedule[props.selectedDay].hours}</p>
      {marketSchedule[props.selectedDay].selection}
    </React.Fragment>
  );
}

export default Schedule;