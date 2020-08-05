import React, { Component } from "react";
import "./ClearButton.css";

class ClearButton extends Component {
  render() {
    return( 
      <div 
        className="clear-btn"
        onClick={() => this.props.handleClear()}
      >
          {/* <span className="reset" onClick={() => this.props.handleReset()}> */}
        {this.props.children}
        {/* </span> */}
       
      </div>
    )
  }
}

export default ClearButton;