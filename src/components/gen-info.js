import Form from "./form";

const General = () => {
    return ( 
        <div className="general">
            <h2>General Info</h2>
            <input type="text" name="firstName" id="firstName" placeholder="First Name" />
            <input type="text" name="lastName" id="lastName" placeholder="Last Name" />
            <input type="email" name="email" id="email" placeholder="Email" />
            <input type="tel" name="phoneNumber" id="phoneNumber" placeholder="Phone Number" />
            <Form/>
        </div>
     );
}
 
export default General;