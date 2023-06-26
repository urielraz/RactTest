import Header from "../Header/Header";
import Main from "../Main/Main";
import "./Layout.css";

function Layout(): JSX.Element {
    return (
        <div className="Layout">
            <Header/>
            <Main/>
        </div>
    );
}

export default Layout;
