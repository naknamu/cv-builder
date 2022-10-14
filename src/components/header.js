import logo from "../image/logo.png";

const Header = () => {
    return ( 
        <div className="header">
            <img src={logo} alt="logo" />
            <div>CV Builder</div>
        </div>
     );
}
 
export default Header;