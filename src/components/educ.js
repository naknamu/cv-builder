import AddEntry from "./add-entry";
import Date from "./date";
import Form from "./form";

const Education = () => {
    return ( 
        <div className="educ">
            <h3>Educational Experience</h3>
            <input type="text" name="school" id="school" placeholder="School Name" />
            <input type="text" name="titleOfStudy" id="titleOfStudy" placeholder="Title of Study" />
            <Date/>
            <AddEntry/>
            <Form/>
        </div>
     );
}
 
export default Education;