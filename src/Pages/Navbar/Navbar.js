import deconnexion from '../../deconnexion.png'
import './Navbar.css'
import logo from "../../logo.png";
import React from "react";

function Navbar() {
    return (

        <div className="historique">
            <ul id="navbar">
                <li id="active">
                    <a href="./anciennesData">Données déjà enregistrées</a>
                </li>
                <li >
                    <a href="./nouvellesData">Nouvelles données</a>
                </li>
                <li>
                    <a href="./"><img id="deconnexion" src={deconnexion} alt="deconnexion"/></a>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;