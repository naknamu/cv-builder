import Education from "./components/educ";
import Experience from "./components/exp";
import General from "./components/gen-info";
import Header from "./components/header";
import Helper from "./components/helper";
import Output from "./components/output";
import React, { Component } from "react";
import avatar from "../src/image/empty_avatar.png";
import uniqid from "uniqid";
import ReactToPrint from "react-to-print";
import sampleAvatar from "../src/image/avatar_meme.png";
import emptyAvatar from "../src/image/empty_avatar.png";

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
    this.handleAddExp = this.handleAddExp.bind(this);
    this.handleDeleteExp = this.handleDeleteExp.bind(this);
    //
    this.handleAddEduc = this.handleAddEduc.bind(this);
    this.handleDeleteEduc = this.handleDeleteEduc.bind(this);
    //
    this.handleExampleOutput = this.handleExampleOutput.bind(this);
    this.handleResetOutput = this.handleResetOutput.bind(this);

    this.state = {
      firstName: "",
      lastName: "",
      address: "",
      role: "",
      email: "",
      phone: "",
      user_avatar: avatar,

      firstNameValue: "",
      lastNameValue: "",
      addressValue: "",
      roleValue: "",
      emailValue: "",
      phoneValue: "",
      user_avatarValue: "",

      companys: [],
      company: "",
      comps_address: [],
      comp_address: "",
      positions: [],
      position: "",
      jobTasks: [],
      jobTask: "",
      jobsFrom: [],
      jobFrom: "",
      jobsTo: [],
      jobTo: "",
      newExp: [],
      id: uniqid(),

      companysValue: [],
      comps_addressValue: [],
      positionsValue: [],
      jobTasksValue: [],
      jobsFromValue: [],
      jobsToValue: [],

      schools: [],
      school: "",
      schools_address: [],
      school_address: "",
      degrees: [],
      degree: "",
      schoolsFrom: [],
      schoolFrom: "",
      schoolsTo: [],
      schoolTo: "",
      newEduc: [],

      schoolsValue: [],
      schools_addressValue: [],
      degreesValue: [],
      schoolsFromValue: [],
      schoolsToValue: [],

      exampleFlag: false,
    };
  }

  changeFirstName = (e) => {
    this.setState({
      firstName: e.target.value,
    });
  };

  changeLastName = (e) => {
    this.setState({
      lastName: e.target.value,
    });
  };

  changeAddress = (e) => {
    this.setState({
      address: e.target.value,
    });
  };

  changeRole = (e) => {
    this.setState({
      role: e.target.value,
    });
  };

  changeEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  changePhone = (e) => {
    this.setState({
      phone: e.target.value,
    });
  };

  uploadPhoto = (e) => {
    const inputFile = document.querySelector("#avatar");
    //enable file upload
    inputFile.click();
  };

  getImage = (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = function (e) {
      this.setState({
        user_avatar: e.target.result,
      });
    }.bind(this);
  };

  /*EXPERIENCE*/
  changeCompany = (e, index) => {
    let newCompanys = [...this.state.companys];
    newCompanys[index] = e.target.value;

    this.setState({
      company: e.target.value,
      companys: newCompanys,
    });
  };

  changeCompAddress = (e, index) => {
    let newComps_address = [...this.state.comps_address];
    newComps_address[index] = e.target.value;

    this.setState({
      comp_address: e.target.value,
      comps_address: newComps_address,
    });
  };

  changePosition = (e, index) => {
    let newPositions = [...this.state.positions];
    newPositions[index] = e.target.value;
    this.setState({
      position: e.target.value,
      positions: newPositions,
    });
  };

  changeJobTask = (e, index) => {
    let newJobTasks = [...this.state.jobTasks];
    newJobTasks[index] = e.target.value;
    this.setState({
      jobTask: e.target.value,
      jobTasks: newJobTasks,
    });
  };

  changeJobFrom = (e, index) => {
    let newJobsFrom = [...this.state.jobsFrom];
    newJobsFrom[index] = e.target.value;
    this.setState({
      jobFrom: e.target.value,
      jobsFrom: newJobsFrom,
    });
  };

  changeJobTo = (e, index) => {
    let newJobsTo = [...this.state.jobsTo];
    newJobsTo[index] = e.target.value;
    this.setState({
      jobTo: e.target.value,
      jobsTo: newJobsTo,
    });
  };

  /*EDUCATION*/
  changeSchool = (e, index) => {
    let newSchools = [...this.state.schools];
    newSchools[index] = e.target.value;
    this.setState({
      school: e.target.value,
      schools: newSchools,
    });
  };

  changeSchoolAdd = (e, index) => {
    let newSchools_address = [...this.state.schools_address];
    newSchools_address[index] = e.target.value;
    this.setState({
      school_address: e.target.value,
      schools_address: newSchools_address,
    });
  };

  changeDegree = (e, index) => {
    let newDegrees = [...this.state.degrees];
    newDegrees[index] = e.target.value;
    this.setState({
      degree: e.target.value,
      degrees: newDegrees,
    });
  };

  changeSchoolFrom = (e, index) => {
    let newSchools_from = [...this.state.schoolsFrom];
    newSchools_from[index] = e.target.value;
    this.setState({
      schoolFrom: e.target.value,
      schoolsFrom: newSchools_from,
    });
  };

  changeSchoolTo = (e, index) => {
    let newSchools_to = [...this.state.schoolsTo];
    newSchools_to[index] = e.target.value;
    this.setState({
      schoolTo: e.target.value,
      schoolsTo: newSchools_to,
    });
  };
  /*ENTRY*/
  handleAddExp = () => {
    this.setState({
      id: uniqid(),
      newExp: this.state.newExp.concat(
        <Experience
          key={this.state.id}
          changeCompany={this.changeCompany}
          changeCompAddress={this.changeCompAddress}
          changePosition={this.changePosition}
          changeJobTask={this.changeJobTask}
          changeJobFrom={this.changeJobFrom}
          changeJobTo={this.changeJobTo}
          handleDeleteEntry={this.handleDeleteEntry}
        />
      ),
    });
  };

  handleAddEduc = () => {
    this.setState({
      id: uniqid(),
      newEduc: this.state.newEduc.concat(
        <Education
          key={this.state.id}
          changeSchool={this.changeSchool}
          changeSchoolAdd={this.changeSchoolAdd}
          changeDegree={this.changeDegree}
          changeSchoolFrom={this.changeSchoolFrom}
          changeSchoolTo={this.changeSchoolTo}
        />
      ),
    });
  };

  handleDeleteExp = (e, index) => {
    let newCompanys = [...this.state.companys];
    let newComps_address = [...this.state.comps_address];
    let newPositions = [...this.state.positions];
    let newJobTasks = [...this.state.jobTasks];
    let newJobsFrom = [...this.state.jobsFrom];
    let newJobsTo = [...this.state.jobsTo];

    newCompanys.splice(index, 1);
    newComps_address.splice(index, 1);
    newPositions.splice(index, 1);
    newJobTasks.splice(index, 1);
    newJobsFrom.splice(index, 1);
    newJobsTo.splice(index, 1);

    this.setState({
      id: uniqid(),
      newExp: this.state.newExp.filter((newExp) => newExp !== e),
      companys: newCompanys,
      comps_address: newComps_address,
      positions: newPositions,
      jobTasks: newJobTasks,
      jobsFrom: newJobsFrom,
      jobsTo: newJobsTo,
    });
  };

  handleDeleteEduc = (e, index) => {
    let newSchools = [...this.state.schools];
    let newSchools_address = [...this.state.schools_address];
    let newDegrees = [...this.state.degrees];
    let newSchools_from = [...this.state.schoolsFrom];
    let newSchools_to = [...this.state.schoolsTo];

    newSchools.splice(index, 1);
    newSchools_address.splice(index, 1);
    newDegrees.splice(index, 1);
    newSchools_from.splice(index, 1);
    newSchools_to.splice(index, 1);

    this.setState({
      id: uniqid(),
      newEduc: this.state.newEduc.filter((newEduc) => newEduc !== e),
      schools: newSchools,
      schools_address: newSchools_address,
      degrees: newDegrees,
      schoolsFrom: newSchools_from,
      schoolsTo: newSchools_to,
    });
  };

  handleExampleOutput = (e) => {
    let ex_firstName = "John";
    let ex_lastName = "Doe";
    let ex_address = "123 Fake Street, Ph";
    let ex_role = "Web Developer";
    let ex_email = "notafake@email.com";
    let ex_phone = "8888-888";
    let ex_user_avatar = sampleAvatar;

    let ex_companys = ["Example Company", "Roman Enterprise", "Greek Incorporated"];
    let ex_comps_address = [
      "Anywhere Street, Nowhere City, Philippines",
      "Winter Village, Arkham City, Gotham",
      "Rain Town, Metro City, Wakanda"
    ];
    let ex_positions = ["Senior Web Developer", "Junior Web Developer", "Intern"];
    let ex_jobTasks = [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Enim ut sem viverra aliquet. Aliquet sagittis id consectetur purus ut faucibus pulvinar. Vitae semper quis lectus nulla at. Eu non diam phasellus vestibulum.",
      "Eget lorem dolor sed viverra. Pharetra sit amet aliquam id diam maecenas ultricies. Morbi tristique senectus et netus et malesuada fames. Amet dictum sit amet justo donec. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur. "
    ];
    let ex_jobsFrom = ["2018", "2016", "2015"];
    let ex_jobsTo = ["Current", "2018", "2016"];

    let ex_schools = ["Great University", "Simple Institute of Technology"];
    let ex_schools_address = ["Fake Street, Everywhere City, GB", "Today Province, Sunny City, US"];
    let ex_degrees = ["Masters", "Computer Science"];
    let ex_schoolsFrom = ["2014", "2010"];
    let ex_schoolsTo = ["2016", "2014"];

    if (this.state.exampleFlag){
      return;
    }

    this.setState({
      exampleFlag: true,

      firstName: ex_firstName,
      lastName: ex_lastName,
      address: ex_address,
      role: ex_role,
      email: ex_email,
      phone: ex_phone,
      user_avatar: ex_user_avatar,

      firstNameValue: ex_firstName,
      lastNameValue: ex_lastName,
      addressValue: ex_address,
      roleValue: ex_role,
      emailValue: ex_email,
      phoneValue: ex_phone,
      user_avatarValue: ex_user_avatar,

      companys: ex_companys,
      comps_address: ex_comps_address,
      positions: ex_positions,
      jobTasks: ex_jobTasks,
      jobsFrom: ex_jobsFrom,
      jobsTo: ex_jobsTo,

      companysValue: ex_companys,
      comps_addressValue: ex_comps_address,
      positionsValue: ex_positions,
      jobTasksValue: ex_jobTasks,
      jobsFromValue: ex_jobsFrom,
      jobsToValue: ex_jobsTo,

      newExp: this.state.newExp.concat(
        <Experience
          key={uniqid()}
        />,
        <Experience
          key={this.state.id}
        />
      ),

      schools: ex_schools,
      schools_address: ex_schools_address,
      degrees: ex_degrees,
      schoolsFrom: ex_schoolsFrom,
      schoolsTo: ex_schoolsTo,

      schoolsValue: ex_schools,
      schools_addressValue: ex_schools_address,
      degreesValue: ex_degrees,
      schoolsFromValue: ex_schoolsFrom,
      schoolsToValue: ex_schoolsTo,

      newEduc: this.state.newEduc.concat(
        <Education
          key={this.state.id}
        />
      ),
    });
  };

  handleResetOutput = () => {
    //empty the array
    let resetExp = [];
    let resetEduc = [];
    //assign a single item
    resetExp.push(
      <Experience
        key={uniqid()}
      />
    )
    resetEduc.push(
      <Education
        key={uniqid()}
      />
    )

    this.setState({
      exampleFlag: false,
      id: uniqid(),

      firstName: '',
      lastName: '',
      address: '',
      role: '',
      email: '',
      phone: '',
      user_avatar: emptyAvatar,

      firstNameValue: '',
      lastNameValue: '',
      addressValue: '',
      roleValue: '',
      emailValue: '',
      phoneValue: '',
      user_avatarValue: '',

      companys: [],
      comps_address: [],
      positions: [],
      jobTasks: [],
      jobsFrom: [],
      jobsTo: [],

      companysValue: [],
      comps_addressValue: [],
      positionsValue: [],
      jobTasksValue: [],
      jobsFromValue: [],
      jobsToValue: [],

      newExp: resetExp,

      schools: [],
      schools_address: [],
      degrees: [],
      schoolsFrom: [],
      schoolsTo: [],

      schoolsValue: [],
      schools_addressValue: [],
      degreesValue: [],
      schoolsFromValue: [],
      schoolsToValue: [],

      newEduc: resetEduc
    });
  }

  componentDidMount() {
    this.initialRender = () => {
      this.setState({
        id: uniqid(),
        newExp: this.state.newExp.concat(
          <Experience
            key={this.state.id}
            changeCompany={this.changeCompany}
            changeCompAddress={this.changeCompAddress}
            changePosition={this.changePosition}
            changeJobTask={this.changeJobTask}
            changeJobFrom={this.changeJobFrom}
            changeJobTo={this.changeJobTo}
            handleDeleteExp={this.handleDeleteExp}
          />
        ),
        newEduc: this.state.newEduc.concat(
          <Education
            key={this.state.id}
            changeSchool={this.changeSchool}
            changeSchoolAdd={this.changeSchoolAdd}
            changeDegree={this.changeDegree}
            changeSchoolFrom={this.changeSchoolFrom}
            changeSchoolTo={this.changeSchoolTo}
          />
        ),
      });
    };

    this.initialRender();
  }

  componentWillUnmount() {
    clearInterval(this.initialRender);
  }

  render() {
    //general info
    const {
      changeFirstName,
      changeLastName,
      changeAddress,
      changeRole,
      changeEmail,
      changePhone,
      uploadPhoto,
      getImage,
    } = this;
    const { firstName, lastName, address, role, email, phone, user_avatar } =
      this.state;
    const {
      firstNameValue,
      lastNameValue,
      addressValue,
      roleValue,
      emailValue,
      phoneValue,
      user_avatarValue,
    } = this.state;
    //practical exp
    const {
      changeCompany,
      changeCompAddress,
      changePosition,
      changeJobTask,
      changeJobFrom,
      changeJobTo,
    } = this;
    const {
      companys,
      comps_address,
      positions,
      jobTasks,
      jobsFrom,
      jobsTo,
      newExp,
    } = this.state;
    const {
      companysValue,
      comps_addressValue,
      positionsValue,
      jobTasksValue,
      jobsFromValue,
      jobsToValue,
    } = this.state;
    const { handleAddExp, handleDeleteExp } = this;
    //educational
    const {
      changeSchool,
      changeSchoolAdd,
      changeDegree,
      changeSchoolFrom,
      changeSchoolTo,
    } = this;
    const {
      schools,
      schools_address,
      degrees,
      schoolsFrom,
      schoolsTo,
      newEduc,
    } = this.state;
    const {
      schoolsValue,
      schools_addressValue,
      degreesValue,
      schoolsFromValue,
      schoolsToValue,
    } = this.state;
    const { handleAddEduc, handleDeleteEduc } = this;
    const { handleExampleOutput, handleResetOutput } = this;
    //
    return (
      <div className="App">
        <Header />
        <div className="content">
          <div className="inputColumn">
            <General
              changeFirstName={changeFirstName}
              changeLastName={changeLastName}
              changeAddress={changeAddress}
              changeRole={changeRole}
              changeEmail={changeEmail}
              changePhone={changePhone}
              uploadPhoto={uploadPhoto}
              getImage={getImage}
              firstName={firstNameValue}
              lastName={lastNameValue}
              address={addressValue}
              role={roleValue}
              email={emailValue}
              phone={phoneValue}
              avatar={user_avatarValue}
            />

            <div className="exp-container">
              <h3>Experience</h3>

              {newExp.map((newExp, index) => (
                <Experience
                  index={index}
                  key={newExp.key}
                  changeCompany={changeCompany}
                  changeCompAddress={changeCompAddress}
                  changePosition={changePosition}
                  changeJobTask={changeJobTask}
                  changeJobFrom={changeJobFrom}
                  changeJobTo={changeJobTo}
                  handleDeleteExp={() => handleDeleteExp(newExp, index)}
                  companys={companysValue}
                  comps_address={comps_addressValue}
                  positions={positionsValue}
                  jobTasks={jobTasksValue}
                  jobsFrom={jobsFromValue}
                  jobsTo={jobsToValue}
                />
              ))}

              <div className="entry">
                <button onClick={handleAddExp}>Add Experience</button>
              </div>
            </div>

            <div className="educ-container">
              <h3>Education</h3>

              {newEduc.map((newEduc, index) => (
                <Education
                  index={index}
                  key={newEduc.key}
                  changeSchool={changeSchool}
                  changeSchoolAdd={changeSchoolAdd}
                  changeDegree={changeDegree}
                  changeSchoolFrom={changeSchoolFrom}
                  changeSchoolTo={changeSchoolTo}
                  handleDeleteEduc={() => handleDeleteEduc(newEduc, index)}
                  schools={schoolsValue}
                  schools_address={schools_addressValue}
                  degrees={degreesValue}
                  schoolsFrom={schoolsFromValue}
                  schoolsTo={schoolsToValue}
                />
              ))}

              <div className="entry">
                <button onClick={handleAddEduc}>Add Education</button>
              </div>
            </div>

            <ReactToPrint
              trigger={() => {
                return <Helper handleExampleOutput={handleExampleOutput} handleResetOutput={handleResetOutput} />;
              }}
              content={() => this.componentRef}
            />
          </div>

          <Output
            ref={(el) => (this.componentRef = el)}
            fullName={firstName + " " + lastName}
            address={address}
            role={role}
            email={email}
            phone={phone}
            user_avatar={user_avatar}
            companys={companys}
            comps_address={comps_address}
            positions={positions}
            jobTasks={jobTasks}
            jobsFrom={jobsFrom}
            jobsTo={jobsTo}
            newExp={newExp}
            schools={schools}
            schools_address={schools_address}
            degrees={degrees}
            schoolsFrom={schoolsFrom}
            schoolsTo={schoolsTo}
            newEduc={newEduc}
          />
        </div>
      </div>
    );
  }
}

export default App;
