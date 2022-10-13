const Output = (props) => {
    console.log(props);
    return ( 
        <div>
            <div className="name">
                <h1>{props.fullName}</h1>
            </div>
        </div>
     );
}
 
export default Output;