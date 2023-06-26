import { Navigate, Route, Routes } from "react-router-dom";
import List from "../../DataArea/List/List";
import PageNotFound from "../PageNotFound/PageNotFound";
import "./Routing.css";

function Routing(): JSX.Element {
    return (
        <div className="Routing">

            <Routes>
                <Route path="/" element={<List/>} />
                <Route path="list" element={<List />} />
                <Route path="/home" element={<List/>} />
                <Route path="/" element={<Navigate to='/home'/>} />
                <Route path="*" element={<PageNotFound /> } /> 
            </Routes>
			
        </div>
    );
}

export default Routing;
