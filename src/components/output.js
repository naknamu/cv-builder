

const Output = (props) => {

    const {fullName, address, role, email, phone, user_avatar} = props;
    const {company, comp_address, position, jobTask, jobFrom, jobTo} = props;
    const {school, school_address, degree, schoolFrom, schoolTo} = props;
    return ( 
        <div className="output-wrapper">
            <div className="head">
                <h1>{fullName}</h1>
                <h3>{role}</h3>
            </div>
            <div className="maincontent">
                <div className="first-column">
                    <div className="experience">
                        <h4 className="title">Experience</h4>        
                        <div className="description">
                            <h4>{jobFrom} - {jobTo}</h4>
                            <div>
                                <h4>{position}</h4>
                                <div className="company">{company} - {comp_address}</div>
                                <div>{jobTask}</div>
                            </div>
                        </div>
                    </div>
                    <div className="education">
                        <h4 className="title">Education</h4>
                        <div className="description">
                            <h4>{schoolFrom} - {schoolTo}</h4>
                            <div>
                                <div><b>{school}</b></div>
                                <div>{school_address}</div>
                                <div><b>Degree: </b>{degree}</div>
                                {/* <div>Web Development</div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="second-column">
                    <img src={user_avatar} alt="your_picture" />
                    <div>
                        <h4 className="title">Contact Info</h4>
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
}
 
export default Output;