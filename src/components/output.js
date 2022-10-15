import avatar from "../image/empty_avatar.png"

const Output = (props) => {

    const {fullName, address, role, email, phone} = props;
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
                            <span>2018-Current</span>
                            <div>
                                <div>Web Developer</div>
                                <div>Example Company, Rizal Street</div>
                                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
                            </div>
                        </div>
                    </div>
                    <div className="education">
                        <h4 className="title">Education</h4>
                        <div className="description">
                            <span>2015-2016</span>
                            <div>
                                <div>Great University - Fake Address</div>
                                <div>Degree: Computer Science</div>
                                <div>Web Development</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="second-column">
                    <img src={avatar} alt="your_picture" />
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