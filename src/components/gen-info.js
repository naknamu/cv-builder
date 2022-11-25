const General = (props) => {
 
    const {changeFirstName, changeLastName, changeAddress, changeRole, changeEmail, changePhone, uploadPhoto, getImage} = props;
    const {firstName, lastName, address, role, email, phone, user_avatar} = props;

    return ( 
        <div className="general">
            <h3>Personal Information</h3>
            <input type="text" name="firstName" id="firstName" placeholder="First Name" onChange={changeFirstName} defaultValue={firstName}/>
            <input type="text" name="lastName" id="lastName" placeholder="Last Name" onChange={changeLastName}  defaultValue={lastName}/>
            <input type="text" name="address" id="address" placeholder="Address" onChange={changeAddress} defaultValue={address} />
            <input type="text" name="role" id="role" placeholder="Current Role" onChange={changeRole} defaultValue={role} />
            <input type="email" name="email" id="email" placeholder="Email" onChange={changeEmail} defaultValue={email}/>
            <input type="tel" name="phoneNumber" id="phoneNumber" placeholder="Phone Number" onChange={changePhone} defaultValue={phone} />
            <button onClick={uploadPhoto}>Upload Photo</button>
            <input type="file" name="avatar" id="avatar" style={{display: 'none'}} onChange={getImage} defaultValue={user_avatar}/>
        </div>
     );
}
 
export default General;