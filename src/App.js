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
    this.changeAddress = this.changeAddress.bind(this);
    this.changeRole = this.changeRole.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePhone = this.changePhone.bind(this);
 
    this.state = {
      firstName: '',
      lastName: '',
      address: '',
      role: '',
      email: '',
      phone: ''
    }

  }

  changeFirstName = (e) => {
    this.setState({
      firstName : e.target.value,
    });
  }

  changeLastName = (e) => {
    this.setState({
      lastName : e.target.value
    });
  }

  changeAddress = (e) => {
    this.setState({
      address : e.target.value
    })
  }

  changeRole = (e) => {
    this.setState({
      role : e.target.value
    })
  }

  changeEmail = (e) => {
    this.setState({
      email : e.target.value
    })
  }

  changePhone = (e) => {
    this.setState({
      phone : e.target.value
    })
  }

  render() {

    const {changeFirstName, changeLastName, changeAddress, changeRole, changeEmail, changePhone} = this;
    const {firstName, lastName, address, role, email, phone} = this.state;

    return (
      <div className="App">
        <Header/>
        <div className="content">
          <div className="input">
            <General changeFirstName={changeFirstName} changeLastName={changeLastName}
              changeAddress={changeAddress} changeRole={changeRole} changeEmail={changeEmail}
              changePhone={changePhone}
            />
            <Education/>
            <Experience/>
            <Helper/>
          </div>
          <div className="output">
            <Output fullName={firstName + " " + lastName}
              address={address} role={role} email={email} phone={phone}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
