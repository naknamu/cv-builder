const General = (props) => {
 
    const {changeFirstName, changeLastName, changeAddress, changeRole, changeEmail, changePhone, uploadPhoto, getImage} = props;

    return ( 
        <div className="general">
            <h3>Personal Information</h3>
            <input type="text" name="firstName" id="firstName" placeholder="First Name" onChange={changeFirstName}/>
            <input type="text" name="lastName" id="lastName" placeholder="Last Name" onChange={changeLastName} />
            <input type="text" name="address" id="address" placeholder="Address" onChange={changeAddress} />
            <input type="text" name="role" id="role" placeholder="Current Role" onChange={changeRole} />
            <input type="email" name="email" id="email" placeholder="Email" onChange={changeEmail} />
            <input type="tel" name="phoneNumber" id="phoneNumber" placeholder="Phone Number" onChange={changePhone} />
            <button onClick={uploadPhoto}>Upload Photo</button>
            <input type="file" name="avatar" id="avatar" style={{display: 'none'}} onChange={getImage} />
        </div>
     );
}
 
export default General;