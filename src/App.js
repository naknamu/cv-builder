import Education from "./components/educ";
import Experience from "./components/exp";
import General from "./components/gen-info";
import Header from "./components/header";
import Helper from "./components/helper";
import Output from "./components/output";
import React, { Component } from "react";
import avatar from "../src/image/empty_avatar.png";

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
    this.changeSchoolTo = this.changeSchoolTo.bind(this);
    //
    this.handleAddEntry = this.handleAddEntry.bind(this);
 
    this.state = {

      firstName: '',
      lastName: '',
      address: '',
      role: '',
      email: '',
      phone: '',
      user_avatar: avatar,

      exp_counter: 0,
      companys: [],
      company: {
        text: ''
      },
      comp_address: '',
      position: '',
      jobTask: '',
      jobFrom: '',
      jobTo: '',
      newExp: [],

      school: '',
      school_address: '',
      degree: '',
      schoolFrom: '',
      schoolTo: '',
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
    let companys = [...this.state.companys];
    companys[e.target.id] = e.target.value;

    this.setState({
      company : {
        text: e.target.value
      },
      companys
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

  changeSchoolTo = (e) => {
    this.setState({
      schoolTo: e.target.value
    })
  }
  /*ENTRY*/
  handleAddEntry = () => {
     this.setState({
       newExp: this.state.newExp.concat([this.state.id])
     })
  }

  render() {
    //general info
    const {changeFirstName, changeLastName, changeAddress, changeRole, changeEmail, 
      changePhone, uploadPhoto, getImage} = this;
    const {firstName, lastName, address, role, email, phone, user_avatar} = this.state;
    //practical exp
    const {changeCompany, changeCompAddress, changePosition, changeJobTask, changeJobFrom, changeJobTo} = this;
    const {companys, company, comp_address, position, jobTask, jobFrom, jobTo, newExp} = this.state;
    const {handleAddEntry} = this;
    //educational
    const {changeSchool, changeSchoolAdd, changeDegree, changeSchoolFrom, changeSchoolTo} = this;
    const {school, school_address, degree, schoolFrom, schoolTo} = this.state;

    return (
      <div className="App">
        <Header/>
        <div className="content">
          <div className="input">

            <General changeFirstName={changeFirstName} changeLastName={changeLastName}
              changeAddress={changeAddress} changeRole={changeRole} changeEmail={changeEmail}
              changePhone={changePhone} uploadPhoto={uploadPhoto} getImage={getImage}/>
            
            <Experience exp_counter={0} changeCompany={changeCompany} changeCompAddress={changeCompAddress} 
              changePosition={changePosition} changeJobTask={changeJobTask} 
              changeJobFrom={changeJobFrom} 
              changeJobTo={changeJobTo}
            />

            {newExp.map((element, index) => 
              <Experience exp_counter={index+1} key={index} changeCompany={changeCompany} changeCompAddress={changeCompAddress} 
                changePosition={changePosition} changeJobTask={changeJobTask} 
                changeJobFrom={changeJobFrom} 
                changeJobTo={changeJobTo} 
              />)}

            <div className="entry"> 
            <button onClick={handleAddEntry}>Add Entry</button>
            </div>
            
            <Education changeSchool={changeSchool} changeSchoolAdd={changeSchoolAdd} 
            changeDegree={changeDegree} changeSchoolFrom={changeSchoolFrom} changeSchoolTo={changeSchoolTo}/>
            <Helper/>

          </div>
          <div className="output">
            <Output fullName={firstName + " " + lastName}
              address={address} role={role} email={email} phone={phone} user_avatar={user_avatar}
              companys={companys} company={company} comp_address={comp_address} position={position} jobTask={jobTask} jobFrom={jobFrom} jobTo={jobTo}
              school={school} school_address={school_address} degree={degree} schoolFrom={schoolFrom} schoolTo={schoolTo}
              newExp={newExp}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
