import React from 'react';
import "./AutreCompétance.css";

function AutreCompetences() {
    return (
        <div className="otherSkills">
            <h3 >
                Autres connaissances
            </h3>
            <div className="list">
                <ul className="dipos">
                    <li>
                        <i className="fas fa-check-square"></i>
                        Anglais courant
                    </li>
                    <li>
                        <i className="fas fa-check-square"></i>
                        Github
                    </li>
                    <li>
                        <i className="fas fa-check-square"></i>
                        MySql
                    </li>
                    <li>
                        <i className="fas fa-check-square"></i>
                        CCNAv7: Switching, Routing, and Wireless Essentials
                    </li>
                    <li>
                        <i className="fas fa-check-square"></i>
                        Network Security
                    </li>
                    <li>
                        <i className="fas fa-check-square"></i>
                        Photoshop
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AutreCompetences
