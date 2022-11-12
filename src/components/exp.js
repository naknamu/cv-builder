// import AddEntry from "./add-entry";

const Experience = (props) => {

    const {changeCompany, changeCompAddress, changePosition, changeJobTask, changeJobFrom, changeJobTo} = props;
    // console.log(props);
    return ( 
        <div className="exp">
            <h3>Practical Experience</h3>
            <input type="text" name="company" id="company" placeholder="Company Name" onChange={changeCompany}/>
            <input type="text" name="address" id="address" placeholder="Address" onChange={changeCompAddress} />
            <input type="text" name="position" id="position" placeholder="Position Title" onChange={changePosition} />
            <textarea name="description" id="description" cols="30" rows="10" placeholder="Main tasks of your job" onChange={changeJobTask}></textarea>
            <div className="date">
            <input type="text" name="dateFrom" placeholder="From" onChange={changeJobFrom}/>
            <input type="text" name="dateTo" placeholder="To" onChange={changeJobTo}/>
            </div>
        </div>
     );
}
 
export default Experience;