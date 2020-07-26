import React, { Component } from "react";
import Clock from "react-live-clock";
import { Switch } from "antd";
import moment from "moment";
import "./Clock.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock ,faCalendarAlt} from '@fortawesome/free-solid-svg-icons';
 


class clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todaysDate: false,
    };
  }

  toggleSwitch = () => {
    this.setState({
      todaysDate: !this.state.todaysDate,
    });
  };

  render() {
    return (
      <div className="App">
        <div className="navbar">
        <FontAwesomeIcon icon={faClock } />
        <label> Digital Clock</label>    
       
        <br></br>
        
          <Switch onClick={this.toggleSwitch} className="toggle"  />
        </div>
        
        <Clock
          className="time" id="time"
          format={"h:mm:ss A"}
          ticking={true}
          timezone={"live"}
         
          
        />

        <div className="toggledate">
        <FontAwesomeIcon icon={faCalendarAlt}  size="1x"></FontAwesomeIcon>
          {this.state.todaysDate ? moment().format(" MMMM Do YYYY") : ""}
          
        </div>
      </div>
    );
  }
}

export default clock;

// const Clock = () => {
//   let time = new Date().toLocaleTimeString();

//   const [ctime, setCtime] = useState(time);

//   const updateTime = () => {
//     let time = new Date().toLocaleTimeString();
//     setCtime(time);
//   };

//   setInterval(updateTime, 1000);
//   return <h1>{ctime}</h1>;
// }
