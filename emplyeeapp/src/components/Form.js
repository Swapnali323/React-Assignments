import React, { Component } from 'react'
import Employee from './Employee'
import "./Form.css";

export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'',
             job:'',
             data:[]
        }
    }

   handleNameChange = event =>{
    this.setState({
        name:event.target.value
    })
    }

    handleJobChange =event =>{
        this.setState({
            job:event.target.value
        })
    }
    handleSubmit = event =>{
        event.preventDefault()
        // const data = this.state
        // console.log(data)
        const item = {
            name: this.state.name,
            job: this.state.job
          };
      
        var myArray = this.state.data;
        myArray.push(item);
        this.setState({ 
            data: myArray
         });
    }

    handleDelete(item) {
        const changedData = this.state.data.filter(
          employee => employee.employeeName !== item.employeeName
        );
        this.setState({
             data: changedData
       });
      }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                   <h1>Add New Employee</h1>
                <label>Name : </label><br></br>
               <input type="text"  value={this.state.name} onChange={this.handleNameChange}></input> <br></br><br></br>
               <label>Job : </label><br></br>
               <input type="text"  value={this.state.job} onChange={this.handleJobChange}></input> <br></br><br></br>
               <button type="submit">Submit</button>
               <div className="form">
               <table>
               <thead>
                <th>Name</th>
                <th>Job</th>
                <th>Remove</th>
            </thead>
               </table>
               </div>
               
               {this.state.data.map(item => (
                <div key={item}>
                    <Employee employee={item}  />
                    <button type="submit" onClick={this.handleDelete.bind(this, item)}>Delete</button>
               </div>))}
          
               </form>
            </div>
        )
    }
}

export default Form
