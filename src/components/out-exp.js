const OutputExperience = (props) => {
    const {jobFrom, jobTo, position, comps_address, jobTask, companys, exp_counter} = props;
    return ( 
    <div className="output-experience">   
        <div className="description">
            <h4>{jobFrom} - {jobTo}</h4>
            <div>
                <h4>{position}</h4>
                <div className="company">{companys[exp_counter]} - {comps_address[exp_counter]}</div>
                <div>{jobTask}</div>
            </div>
        </div>
    </div>
     );
}
 
export default OutputExperience;