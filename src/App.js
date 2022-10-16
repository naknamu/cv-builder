import Education from "./components/educ";
import Experience from "./components/exp";
import General from "./components/gen-info";
import Header from "./components/header";
import Helper from "./components/helper";
import Output from "./components/output";
import React, { Component } from "react";
import avatar from "../src/image/empty_avatar.png"

class App extends Component {
  constructor() {
    super();
    //general information
    this.changeFirstName = this.changeFirstName.bind(this);
    this.changeLastName = this.changeLastName.bind(this);
    this.changeAddress = this.changeAddress.bind(this);
    this.changeRole = this.changeRole.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePhone = this.changePhone.bind(this);
    this.uploadPhoto = this.uploadPhoto.bind(this);
    this.getImage = this.getImage.bind(this);
    //experience
    this.changeCompany = this.changeCompany.bind(this);
    this.changeCompAddress = this.changeCompAddress.bind(this);
    this.changePosition = this.changePosition.bind(this);
    this.changeJobTask = this.changeJobTask.bind(this);
    this.changeJobFrom = this.changeJobFrom.bind(this);
    this.changeJobTo = this.changeJobTo.bind(this);
    //education
    this.changeSchool = this.changeSchool.bind(this);
    this.changeSchoolAdd = this.changeSchoolAdd.bind(this);
    this.changeDegree = this.changeDegree.bind(this);
    this.changeSchoolFrom = this.changeSchoolFrom.bind(this);
 
    this.state = {
      firstName: '',
      lastName: '',
      address: '',
      role: '',
      email: '',
      phone: '',
      user_avatar: avatar,

      company: '',
      comp_address: '',
      position: '',
      jobTask: '',
      jobFrom: '',
      jobTo: '',

      school: '',
      school_address: '',
      degree: '',
      schoolFrom: '',
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

  uploadPhoto = (e) => {
    const inputFile = document.querySelector('#avatar');
    //enable file upload
    inputFile.click();
  }

  getImage = (e) => {
    let file = e.target.files[0]
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function(e) {
      this.setState({
        user_avatar: e.target.result
      })
    }.bind(this)
  }

  /*EXPERIENCE*/
  changeCompany = (e) => {
    this.setState({
      company : e.target.value
    })
  }

  changeCompAddress = (e) => {
    this.setState({
      comp_address: e.target.value
    })
  }

  changePosition = (e) => {
    this.setState({
      position: e.target.value
    })
  }

  changeJobTask = (e) => {
    this.setState({
      jobTask: e.target.value
    })
  }

  changeJobFrom = (e) => {
    this.setState({
      jobFrom: e.target.value
    })
  }

  changeJobTo = (e) => {
    this.setState({
      jobTo: e.target.value
    })
  }

  /*EDUCATION*/
  changeSchool = (e) => {
    this.setState({
      school : e.target.value
    })
  }

  changeSchoolAdd = (e) => {
    this.setState({
      school_address : e.target.value
    })
  }

  changeDegree = (e) => {
    this.setState({
      degree: e.target.value
    })
  }

  changeSchoolFrom = (e) => {
    this.setState({
      schoolFrom: e.target.value
    })
  }

  render() {
    //general info
    const {changeFirstName, changeLastName, changeAddress, changeRole, changeEmail, 
      changePhone, uploadPhoto, getImage} = this;
    const {firstName, lastName, address, role, email, phone, user_avatar} = this.state;
    //practical exp
    const {changeCompany, changeCompAddress, changePosition, changeJobTask, changeJobFrom, changeJobTo} = this;
    const {company, comp_address, position, jobTask, jobFrom, jobTo} = this.state;
    //educational
    const {changeSchool, changeSchoolAdd, changeDegree, changeSchoolFrom} = this;
    const {school, school_address, degree, schoolFrom} = this.state;

    return (
      <div className="App">
        <Header/>
        <div className="content">
          <div className="input">
            <General changeFirstName={changeFirstName} changeLastName={changeLastName}
              changeAddress={changeAddress} changeRole={changeRole} changeEmail={changeEmail}
              changePhone={changePhone} uploadPhoto={uploadPhoto} getImage={getImage}/>
            <Experience changeCompany={changeCompany} changeCompAddress={changeCompAddress} 
              changePosition={changePosition} changeJobTask={changeJobTask} 
              changeJobFrom={changeJobFrom} 
              changeJobTo={changeJobTo}
            />
            <Education changeSchool={changeSchool} changeSchoolAdd={changeSchoolAdd} 
            changeDegree={changeDegree} changeSchoolFrom={changeSchoolFrom}/>
            <Helper/>
          </div>
          <div className="output">
            <Output fullName={firstName + " " + lastName}
              address={address} role={role} email={email} phone={phone} user_avatar={user_avatar}
              company={company} comp_address={comp_address} position={position} jobTask={jobTask} jobFrom={jobFrom} jobTo={jobTo}
              school={school} school_address={school_address} degree={degree} schoolFrom={schoolFrom}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
