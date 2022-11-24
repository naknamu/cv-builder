

const Education = (props) => {

    const {changeSchool, changeSchoolAdd, changeDegree, changeSchoolFrom, changeSchoolTo, index} = props;
    const {handleDeleteEduc} = props;

const {schools,
    schools_address,
    degrees,
    schoolsFrom,
    schoolsTo} = props;

    return ( 
        <div className="educ">
            <input type="text" name="school" id="school" placeholder="School Name" onChange={(e) => changeSchool(e, index)} value={schools[index] || ''}/>
            <input type="text" name="address" id="address" placeholder="Address" onChange={(e) => changeSchoolAdd(e, index)} value={schools_address[index] || ''}/>
            <input type="text" name="degree" id="degree" placeholder="Degree" onChange={(e) => changeDegree(e, index)} value={degrees[index] || ''}/>
            <div className="date">
            <input type="text" name="dateFrom" placeholder="From" onChange={(e) => changeSchoolFrom(e, index)} value={schoolsFrom[index] || ''}/>
            <input type="text" name="dateTo" placeholder="To" onChange={(e) => changeSchoolTo(e, index)} value={schoolsTo[index] || ''}/>
            </div>
            <div className="delete entry">
                <button onClick={handleDeleteEduc}>Delete</button>
            </div>
        </div>
     );
}
 
export default Education;