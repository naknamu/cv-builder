const Date = () => {
    return ( 
        <div className="date">
            <label htmlFor="dateFrom">From:</label>
            <input type="date" name="dateFrom" id="dateFrom"/>
            <label htmlFor="dateTo">To:</label>
            <input type="date" name="dateTo" id="dateTo"/>
        </div>
     );
}
 
export default Date;