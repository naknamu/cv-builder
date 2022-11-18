const OutputExperience = (props) => {
    const {jobsFrom, jobsTo, positions, comps_address, jobTasks, companys, index} = props;
    return ( 
    <div className="output-experience">   
        {/* <div className="description"> */}
            <h4>{jobsFrom[index]} - {jobsTo[index]}</h4>
            <div>
                <h4>{positions[index]}</h4>
                <div className="company">{companys[index]}</div>
                <div className="company">{comps_address[index]}</div>
                <div>{jobTasks[index]}</div>
            </div>
        {/* </div> */}
    </div>
     );
}
 
export default OutputExperience;