import React from "react";
import "./Employee.css";
function Employee({ employee }) {
    //  delete(employee){
    //   const data = this.state.data.filter(i => i.id !== item.id)
    //   this.setState({data});
    //  }
  
    return (
     <div>
        <table>
            <tbody>
       
            <td>{employee.name}</td>
            <td>{employee.job}</td>
      
          </tbody>
        </table>
    </div>
    );
  }

  export default Employee