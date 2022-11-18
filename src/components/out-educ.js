const OutputEducation = (props) => {
    const {schools, schools_address, degrees, schoolsFrom, schoolsTo, index} = props;
    return ( 
        <div className="output-education">
            <h4>{schoolsFrom[index]} - {schoolsTo[index]}</h4>
            <div>
                <div><b>{schools[index]}</b></div>
                <div>{schools_address[index]}</div>
                <div><b>Degree: </b>{degrees[index]}</div>
            </div>
        </div>
     );
}
 
export default OutputEducation;