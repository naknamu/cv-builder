// import AddEntry from "./add-entry";

const Experience = (props) => {

    const {changeCompany, changeCompAddress, changePosition, changeJobTask, changeJobFrom, changeJobTo, index} = props;
    const {handleDeleteEntry} = props;
    return ( 
        <div className="exp ">
            <h3>Practical Experience</h3>
            <input type="text" name="company" placeholder="Company Name" onChange={(e) => changeCompany(e, index)}/>
            <input type="text" name="address" placeholder="Address" onChange={changeCompAddress} />
            <input type="text" name="position" id="position" placeholder="Position Title" onChange={changePosition} />
            <textarea name="description" id="description" cols="30" rows="10" placeholder="Main tasks of your job" onChange={changeJobTask}></textarea>
            <div className="date">
            <input type="text" name="dateFrom" placeholder="From" onChange={changeJobFrom}/>
            <input type="text" name="dateTo" placeholder="To" onChange={changeJobTo}/>
            </div>
            {/* <div className="delete-entry"> */}
                <button onClick={handleDeleteEntry}>Delete Entry</button>
            {/* </div> */}
        </div>
     );
}
 
export default Experience;