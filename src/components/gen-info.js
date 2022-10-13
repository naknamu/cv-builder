const General = (props) => {

    const {firstName, lastName} = props;

    return ( 
        <div className="general">
            <h3>General Info</h3>
            <input type="text" name="firstName" id="firstName" placeholder="First Name" onChange={firstName} />
            <input type="text" name="lastName" id="lastName" placeholder="Last Name" onChange={lastName} />
            <input type="text" name="address" id="address" placeholder="Address" />
            <input type="text" name="role" id="role" placeholder="Current Role" />
            <input type="email" name="email" id="email" placeholder="Email" />
            <input type="tel" name="phoneNumber" id="phoneNumber" placeholder="Phone Number" />
        </div>
     );
}
 
export default General;