import AddEntry from "./add-entry";
import Date from "./date";
import Form from "./form";

const Experience = () => {
    return ( 
        <div className="exp">
            <h3>Practical Experience</h3>
            <input type="text" name="company" id="company" placeholder="Company Name" />
            <input type="text" name="position" id="position" placeholder="Position Title" />
            <textarea name="description" id="description" cols="30" rows="10" placeholder="Main tasks of your job"></textarea>
            <Date/>
            <AddEntry/>
            <Form/>
        </div>
     );
}
 
export default Experience;