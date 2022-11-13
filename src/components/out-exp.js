const OutputExperience = (props) => {
    const {jobFrom, jobTo, position, company, comp_address, jobTask} = props;
    return ( 
    <div className="output-experience">   
        <div className="description">
            <h4>{jobFrom} - {jobTo}</h4>
            <div>
                <h4>{position}</h4>
                <div className="company">{company.text} - {comp_address}</div>
                <div>{jobTask}</div>
            </div>
        </div>
    </div>
     );
}
 
export default OutputExperience;