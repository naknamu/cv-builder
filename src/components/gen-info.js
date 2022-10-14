const General = (props) => {
 
    const {changeFirstName, changeLastName} = props;

    return ( 
        <div className="general">
            <h3>General Info</h3>
            <input type="text" name="firstName" id="firstName" placeholder="First Name" onChange={changeFirstName}/>
            <input type="text" name="lastName" id="lastName" placeholder="Last Name" onChange={changeLastName} />
            <input type="text" name="address" id="address" placeholder="Address" />
            <input type="text" name="role" id="role" placeholder="Current Role" />
            <input type="email" name="email" id="email" placeholder="Email" />
            <input type="tel" name="phoneNumber" id="phoneNumber" placeholder="Phone Number" />
        </div>
     );
}
 
export default General;