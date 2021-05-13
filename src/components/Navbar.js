import React from "react";
import glnlogonya from "../glnlogonya.png";

//Import FontawesomeReact
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">

           
            <a className="navbar-brand" href="#"><img className="logo" src={glnlogonya} alt="logo..."></img></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <FontAwesomeIcon icon={faBars} color="#fff"/>
            </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only"></span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About me</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">How work</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Portfolio</a>
                </li>
            </ul>

        </div>
    </div>
</nav>
    )
}

export default Navbar
