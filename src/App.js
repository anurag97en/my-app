import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {


  state = {
    userData: [
      {id: '1', name: "Subhash", last: "Karn", age : "22", Staff : "1001", Mobile : "9412945939"},
      {id: '2', name : "Aditya", last : "Kumar", age : "23", Staff : "1002", Mobile : "9412945993"},
      {id: '3', name : "Akash", last : "Majumdaar", age : "23", Staff : "1003", Mobile : "9412945993"}
    ],
    showEmployees: false,
    editEmployees: false

  };

  switchNameHandler =(nameclick, lastname) =>
  {
    console.log("Switch Handle working  "+nameclick+ "  "+ lastname);
  }

  nameChangeHandler = (event, id) =>
  {
    const employeeIndex = this.state.userData.findIndex(p =>{
      return p.id === id;
    })

    const employee = {
      ...this.state.userData[employeeIndex]
    };

    employee.name = event.target.value;
    const employees = [...this.state.userData];
    employees[employeeIndex] = employee;
    this.setState({userData:employees});

    // this.setState({
    //   userData: [
    //     {name: "Subhash", last: "Karn", age : "22", Staff : "1001", Mobile : "9412945939"},
    //     {name : event.target.value, last : "Kumar", age : "23", Staff : "1002", Mobile : "9412945993"},
    //     {name : "Akash", last : "Majumdaar", age : "23", Staff : "1002", Mobile : "9412945993"}
    //   ]

    // })
    
  }
  

  togglePersonHandler =() =>{
    const dShow = this.state.showEmployees;
    this.setState({showEmployees : !dShow})
  }

  deletePersonHandler = (employeeIndex) =>{
    // const employees =  this.state.userData.slice();
    const employees =[... this.state.userData]
    employees.splice(employeeIndex,1);
    this.setState({userData: employees})


  }

  editNameHandler = (event, id) => {
    const dShow = this.state.showEmployees;
    this.setState({editEmployees : !dShow})
    const employeeIndex = this.state.userData.findIndex(p =>{
      return p.id === id;
    })


    const employees =[... this.state.userData]
    const employee = {
      ...this.state.userData[employeeIndex]
    };

    employee.name = event.target.value;
    employees[employeeIndex] = employee;
    this.setState({userData:employees});

  }

  render() {

    const sty ={
      backgroundColor: 'red',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }


    let employees = null

    if(this.state.showEmployees){
      employees = (
        <div>
          {this.state.userData.map((emp, index )=>{
            return <Person 
            name = {emp.name}
            age = {emp.age}
            click = {() => this.deletePersonHandler(index)}
            changed = {(event) => this.nameChangeHandler(event, emp.id)}
            key = {emp.id}
            />
          })}
        </div>
      );
      sty.backgroundColor ='yellow'
    }
    else{
      employees = (
      <div>
        <Person name= "Aditya" age = "23" 
        click ={this.switchNameHandler.bind( "Add", "Me")}
        changed={this.nameChangeHandler}>Hobby: Nothing</Person>
      </div>
      )
    }

    let classes = ['tdata'];

    if(this.state.userData[0].name.length >= 10)
    {
      classes.push('red');
    }
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
        <h1 style ={sty}>List of Employees</h1>
        <h1 className={classes}>Modify Employees</h1>
        <div className = "employee">
          <table>
            <tbody>
            <tr>
              <th className ="thead" >First Name</th>
              <th className ="thead">Last Name</th>
              <th className ="thead">Age</th>
              <th className ="thead"> Staff No.</th>
              <th className ="thead">Mobile No.</th>
              <th className ="thead"colSpan="2">Operations</th>
            </tr>
            </tbody>
            {
              this.state.userData.map((item, index) => 
              <tbody key = {item.id}>
                <tr className="trs" >
                <td className ={classes.join(' ')}>{item.name}</td>
                <td className ="tdata">{item.last}</td>
                <td className ="tdata">{item.age}</td>
                <td className ="tdata">{item.Staff}</td>
                <td className ="tdata">{item.Mobile}</td>
                <td className ="tdata" onClick = {(event) => this.editNameHandler(event, item.id)}><button className ="tbuttonu">Update</button></td>
                <td className ="tdata" onClick = {() => this.deletePersonHandler(index)}><button className ="tbuttond">Delete</button></td>
                {
                  this.state.editEmployees ?
                  <td><input></input></td>
                  :
                  null
                }
                </tr>
              </tbody> 
            )
            }
        </table>
      
      </div >
      <button onClick={this.togglePersonHandler}>Click Me</button>
      
      {employees}
      
      {/* <button onClick={this.togglePersonHandler}>Toggle Me</button> */}
      {/* 
      {
        this.state.showEmployees ?
        <div>
                
      <Person name= "Subhash" age = "22" 
      click ={this.switchNameHandler.bind( "Add", "Me")}
      changed={this.nameChangeHandler}>Hobby: Nothing</Person>

                { {this.state.employees.map(person =>{
                  return <Person 
                  name = {Person.name}
                  age = {Person.age}/>
                })} }


              </div>
              :
              <div>

      <Person name= "Aditya" age = "23" 
      click ={this.switchNameHandler.bind( "Add", "Me")}
      changed={this.nameChangeHandler}>Hobby: Nothing</Person>
      </div>
        
      }
        */}
      

      <footer className="App-footer">
        <h1>This is footer</h1>
      </footer>

    </div>
      
     
    );
  }
}

export default App;