import Education from "./components/educ";
import Experience from "./components/exp";
import General from "./components/gen-info";
import Header from "./components/header";
import Helper from "./components/helper";
import Output from "./components/output";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.firstName = this.firstName.bind(this);
    this.lastName = this.lastName.bind(this);
    this.fullName = this.fullName.bind(this);
 
    this.state = {
      firstName: '',
      lastName: '',
      fullName: ''
    }

  }

  firstName = (event) => {
    this.setState({
      firstName : event.target.value,
      fullName : event.target.value
    });
  }

  lastName = (event) => {
    this.setState({
      lasttName : event.target.value
    });
  }

  fullName = () => {
    let fullName;
    
    this.setState({
      fullName : this.state.firstName + " " + this.state.lastName
    })

    fullName = this.state.fullName;

    console.log(fullName);
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <div className="content">
          <div className="input">
            <General firstName={this.firstName} lastName={this.lastName}/>
            <Education/>
            <Experience/>
            <Helper/>
          </div>
          <div className="output">
            <Output fullName={this.fullName}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
