import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import HomePage from "./public/HomePage";
import Login from "./component/Login/Login";
import Register from "./component/Register/Register";


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={"/"} element={<HomePage/>}/>;
                <Route path={"/login"} element={<Login/>}/>;
                <Route path={"/register"} element={<Register/>}/>;
            </Routes>
        </div>
    );
}

export default App;
