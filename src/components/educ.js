

const Education = (props) => {

    const {changeSchool, changeSchoolAdd, changeDegree, changeSchoolFrom, changeSchoolTo, index} = props;
    const {handleDeleteEduc} = props;

    return ( 
        <div className="educ">
            <input type="text" name="school" id="school" placeholder="School Name" onChange={(e) => changeSchool(e, index)} />
            <input type="text" name="address" id="address" placeholder="Address" onChange={(e) => changeSchoolAdd(e, index)} />
            <input type="text" name="degree" id="degree" placeholder="Degree" onChange={(e) => changeDegree(e, index)} />
            <div className="date">
            <input type="text" name="dateFrom" placeholder="From" onChange={(e) => changeSchoolFrom(e, index)}/>
            <input type="text" name="dateTo" placeholder="To" onChange={(e) => changeSchoolTo(e, index)}/>
            </div>
            <div className="delete entry">
                <button onClick={handleDeleteEduc}>Delete</button>
            </div>
        </div>
     );
}
 
export default Education;