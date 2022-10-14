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

    this.changeFirstName = this.changeFirstName.bind(this);
    this.changeLastName = this.changeLastName.bind(this);
 
    this.state = {
      firstName: '',
      lastName: ''
    }

  }

  changeFirstName = (event) => {
    this.setState({
      firstName : event.target.value,
    });
  }

  changeLastName = (event) => {
    this.setState({
      lastName : event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <div className="content">
          <div className="input">
            <General changeFirstName={this.changeFirstName} changeLastName={this.changeLastName}/>
            <Education/>
            <Experience/>
            <Helper/>
          </div>
          <div className="output">
            <Output fullName={this.state.firstName + " " + this.state.lastName}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
