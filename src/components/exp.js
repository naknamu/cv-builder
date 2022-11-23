// import AddEntry from "./add-entry";

const Experience = (props) => {

    const {changeCompany, changeCompAddress, changePosition, changeJobTask, changeJobFrom, changeJobTo, index} = props;
    const {handleDeleteExp} = props;

    const {
        companys,
        comps_address,
        positions,
        jobTasks,
        jobsFrom,
        jobsTo} = props;

    return ( 
        <div className="exp">
            <input type="text" name="company" placeholder="Company Name" onChange={(e) => changeCompany(e, index)} value={companys}/>
            <input type="text" name="address" placeholder="Address" onChange={(e) => changeCompAddress(e, index)} value={comps_address}/>
            <input type="text" name="position" id="position" placeholder="Position Title" onChange={(e) => changePosition(e, index)} value={positions}/>
            <textarea name="description" id="description" cols="30" rows="10" placeholder="Main tasks of your job" onChange={(e) => changeJobTask(e, index)} value={jobTasks}></textarea>
            <div className="date">
            <input type="text" name="dateFrom" placeholder="From" onChange={(e) => changeJobFrom(e, index)} value={jobsFrom}/>
            <input type="text" name="dateTo" placeholder="To" onChange={(e) => changeJobTo(e, index)} value={jobsTo}/>
            </div>
            <div className="delete entry">
                <button onClick={handleDeleteExp}>Delete</button>
            </div>
        </div>
     );
}
 
export default Experience;