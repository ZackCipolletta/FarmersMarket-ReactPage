import React from "react";
import ProduceList from "./ProduceList";
import Schedule from "./Schedule";
import { availableProduce } from "./ProduceList";



const dropDownMenu = <div>
  <div className="dayDropdown">
    <label>Choose a Day:</label>
    <select name="days" id="dayDrop" className="dayDropContent">
      <option value="0">Sunday</option>
      <option value="1">Monday</option>
      <option value="2">Tuesday</option>
      <option value="3">Wednesday</option>
      <option value="4">Thursday</option>
      <option value="5">Saturday</option>
    </select>
  </div>

  <div className="monthDropdown">
    <label>Choose a Month:</label>
    <select id="monthDrop" className="monthDropContent">
      <option value="0">January</option>
      <option value="1">February</option>
      <option value="2">March</option>
      <option value="3">April</option>
      <option value="4">May</option>
      <option value="5">June</option>
      <option value="6">July</option>
      <option value="7">August</option>
      <option value="8">September</option>
      <option value="9">October</option>
      <option value="10">November</option>
      <option value="11">December</option>
    </select>
  </div>
</div>

class DatePicker extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedDay: 0,
      selectedMonth: 0
    };
  }

  GetDate = () => {
    const day = document.getElementById('dayDrop').value;
    const month = document.getElementById('monthDrop').value;
    this.setState(prevState => ({
      selectedDay: day, selectedMonth: month
    }));
  }

  render() {
    return (
      <React.Fragment>
        <div class="container">
          <div class="row">
            <div class="col-md-3 mr-4">
              <div name="datePicker" class="border rounded border-dark p-3 px-4 mt-5" >
                {dropDownMenu}
                <button onClick={this.GetDate} className="dropbtn">Submit</button>
              </div>
            </div>
            <div class="col-md-9 ml-4">
              <div class="row">
                <div name="schedule" class="col-md-12 border rounded border-dark mb-3">
                  <Schedule selectedDay={this.state.selectedDay} />
                </div>
                <div name="selectedMonth" class="col-md-12 border rounded border-dark">
                  <ProduceList monthSelected={this.state.selectedMonth} selectedMonth={this.state.selectedMonth} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default DatePicker;