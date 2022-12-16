import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
export default function Navbar() {
    return (
        <div className="navigation">
            <div className="left-link">
                <ul>
                    <li className="item"><Link to={"/"}> Home </Link></li>&nbsp;&nbsp;&nbsp;
                    <li className="item"><Link to={"/Login"}> Login </Link></li>&nbsp;&nbsp;&nbsp;
                </ul>
            </div>
        </div>
    )
}
