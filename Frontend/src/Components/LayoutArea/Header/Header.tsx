import Menu from "../Menu/Menu";
import "./Header.css";

function Header(): JSX.Element {
    return (
        <div className="Header">
			<Menu/>
            <h2>Welcome to the World Server Registry</h2>
        </div>
    );
}

export default Header;
