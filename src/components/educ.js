import AddEntry from "./add-entry";
import Date from "./date";

const Education = (props) => {

    const {changeSchool, changeSchoolAdd, changeDegree, changeSchoolFrom} = props;

    return ( 
        <div className="educ">
            <h3>Educational Experience</h3>
            <input type="text" name="school" id="school" placeholder="School Name" onChange={changeSchool} />
            <input type="text" name="address" id="address" placeholder="Address" onChange={changeSchoolAdd} />
            <input type="text" name="degree" id="degree" placeholder="Degree" onChange={changeDegree} />
            <Date changeSchoolFrom={changeSchoolFrom}/>
            <AddEntry/>
        </div>
     );
}
 
export default Education;