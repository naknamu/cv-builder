const Date = (props) => {

    const {changeJobFrom, changeJobTo, changeSchoolFrom} = props;
    return ( 
        <div className="date">
            <input type="text" name="dateFrom" placeholder="From" onChange={e => {changeJobFrom(e); changeSchoolFrom(e)}}/>
            <input type="text" name="dateTo" placeholder="To" onChange={changeJobTo}/>
        </div>
     );
}
 
export default Date;