const Helper = (props) => {

    return ( 
        <div className="helper">
            <button onClick={props.onClick}>Print/Save PDF</button>
            <button className="red" onClick={props.handleExampleOutput} type="submit">Example</button>
            <button className="red" onClick={props.handleResetOutput} type="reset">Reset</button>
        </div>
     );
}
 
export default Helper;