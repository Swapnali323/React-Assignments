import React from 'react';
import "./EmployeeList.css";
// import * as ReactBootStrap from './react-bootstrap';

const EmployeeList=()=> {
    const employees=[
        {name : "Swapnali" , job:"Developer" },
        {name:"Vaidehee" , job:"Analyst"}
    ]

    //     const EmployeesToShow = (employee,index) => {
    //         return(
    //             <tr key={index}>
    //                 <td>{employee.name}</td>
    //                 <td>{employee.job}</td>
    //             </tr>
    //         )
    // }
            const employeeList =   employees.map((employee,index)=>
            <tr>
                <td>{employee.name}</td> 
                <td>{employee.job}</td>
           </tr>)
    return (
        <div>
            <h1>Employee List</h1>
            <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Job</th>
                </tr>
            </thead>
            <tbody>
                 {/* {employees.map(employ)}  */}
            {employeeList}
            </tbody>
            </table>
        </div>
    )
}

export default EmployeeList
