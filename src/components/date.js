const Date = (props) => {

    const {changeJobFrom, changeJobTo} = props;
    return ( 
        <div className="date">
            <input type="text" name="dateFrom" placeholder="From" onChange={changeJobFrom}/>
            <input type="text" name="dateTo" placeholder="To" onChange={changeJobTo}/>
        </div>
     );
}
 
export default Date;