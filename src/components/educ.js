import AddEntry from "./add-entry";
import Date from "./date";

const Education = () => {
    return ( 
        <div className="educ">
            <h3>Educational Experience</h3>
            <input type="text" name="school" id="school" placeholder="School Name" />
            <input type="text" name="titleOfStudy" id="titleOfStudy" placeholder="Title of Study" />
            <Date/>
            <AddEntry/>
        </div>
     );
}
 
export default Education;