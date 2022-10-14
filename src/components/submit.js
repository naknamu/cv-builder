const Submit = (props) => {
    return ( 
        <div className="submit">
            <form onSubmit={props.onSubmitGenInfo}>
                <button type="submit">Submit</button>
                <button>Edit</button>
            </form>
        </div>
     );
}
 
export default Submit;