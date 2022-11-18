import OutputExperience from './out-exp';
import OutputEducation from './out-educ';
import React from 'react';

const Output = React.forwardRef((props, ref) => {

    const {fullName, address, role, email, phone, user_avatar} = props;
    const {companys, comps_address, positions, jobTasks, jobsFrom, jobsTo} = props;
    const {schools, schools_address, degrees, schoolsFrom, schoolsTo} = props;
    const {newExp, newEduc} = props;

    // console.log(props);
    return ( 
        <div ref={ref} className="output-wrapper">

            <div className="head">
                <h1>{fullName}</h1>
                <h3>{role}</h3>
            </div>
            <div className="maincontent">
                <div className="first-column">
                    <div className="experience">
                        <h3 className="title">Experience</h3>        
                        
                        {newExp.map((newExp, index) => 
                        <OutputExperience 
                            index={index}
                            key={newExp.key}
                            companys={companys} 
                            comps_address={comps_address}
                            positions={positions}
                            jobTasks={jobTasks}
                            jobsFrom={jobsFrom}
                            jobsTo={jobsTo}
                        />)}
                    </div>
                    <div className="education">
                        <h3 className="title">Education</h3>
                        {/* <div className="description">
                            <h4>{schoolFrom} - {schoolTo}</h4>
                            <div>
                                <div><b>{school}</b></div>
                                <div>{school_address}</div>
                                <div><b>Degree: </b>{degree}</div>
                            </div>
                        </div> */}

                        {newEduc.map((newEduc, index) => 
                            <OutputEducation 
                            index={index}
                            key={newEduc.key}
                            schools={schools} 
                            schools_address={schools_address}
                            degrees={degrees}
                            schoolsFrom={schoolsFrom}
                            schoolsTo={schoolsTo}
                        />)}

                    </div>
                </div>
                <div className="second-column">
                    <img src={user_avatar} alt="your_picture" />
                    <div>
                        <h3 className="title">Contact Info</h3>
                        <div>   
                            <h4>Address</h4>
                            <div>{address}</div>
                        </div>
                        <div>
                            <h4>Phone</h4>
                            <div>{phone}</div>
                        </div>
                        <div>
                            <h4>Email</h4>
                            <div>{email}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
});
 
export default Output;