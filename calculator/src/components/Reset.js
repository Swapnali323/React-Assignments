import React, { Component } from "react";
import "./Reset.css";

class Reset extends Component {
  render() {
    return( 
      <div 
        className="reset"
        onClick={() => this.props.handleReset()}
      >

        {this.props.children}
        
       
      </div>
    )
  }
}

export default Reset;