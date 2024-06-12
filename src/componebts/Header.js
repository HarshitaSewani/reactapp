import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Quiz from "../pages/Quiz/Quiz";

import { Link } from "react-router-dom";



const Header =()=>{
    return(
        <div>
            
            <h1 align="center">THE  BRAINSTORM  HUB!</h1>
            <hr color="black " margin="10px"></hr>
            
                 
            
        </div>
    )
}
export default Header;