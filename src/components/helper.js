const Helper = (props) => {

    return ( 
        <div className="helper">
            <button onClick={props.onClick}>Print/Save PDF</button>
            <button onClick={props.handleExampleOutput} type="submit">Example</button>
            <button onClick={props.handleResetOutput} type="reset">Reset</button>
        </div>
     );
}
 
export default Helper;