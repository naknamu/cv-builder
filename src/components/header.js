import logo from "../image/logo.png";

const Header = () => {
    return ( 
        <div className="header">
            <img src={logo} alt="logo" />
            <h1>CV Builder</h1>
        </div>
     );
}
 
export default Header;