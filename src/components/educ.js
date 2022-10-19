import AddEntry from "./add-entry";

const Education = (props) => {

    const {changeSchool, changeSchoolAdd, changeDegree, changeSchoolFrom, changeSchoolTo} = props;

    return ( 
        <div className="educ">
            <h3>Educational Experience</h3>
            <input type="text" name="school" id="school" placeholder="School Name" onChange={changeSchool} />
            <input type="text" name="address" id="address" placeholder="Address" onChange={changeSchoolAdd} />
            <input type="text" name="degree" id="degree" placeholder="Degree" onChange={changeDegree} />
            <div className="date">
            <input type="text" name="dateFrom" placeholder="From" onChange={changeSchoolFrom}/>
            <input type="text" name="dateTo" placeholder="To" onChange={changeSchoolTo}/>
            </div>
            <AddEntry/>
        </div>
     );
}
 
export default Education;