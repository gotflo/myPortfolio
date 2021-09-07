import React from 'react'

function Projects() {
    return (
        <div className="project" id="Projets">
            <div>
                <div className="MesProjets">Mes Projets</div>
                <div className="commonBorderr"></div>
                <ul className="dispocard">
                    <li>
                        <div className="card colrr">
                            <div className="icon">
                                <i className="fab fa-connectdevelop"></i>
                            </div>
                            <h4>PROJET I : 2019</h4>
                            <p>Cliquez pour visionner l'ensemble
                                de tous mes projets réaliser en 2019 </p>
                        </div>
                    </li>
                    <li>
                        <div className="card colrr">
                            <div className="icon">
                                <i className="fab fa-connectdevelop"></i>
                            </div>
                            <h4>PROJET II : 2020</h4>
                            <p>Cliquez pour visionner l'ensemble
                                de tous mes projets réaliser en 2020</p>
                        </div>
                    </li>
                    <li>
                        <div className="card colrr">
                            <div className="icon">
                                <i className="fab fa-connectdevelop"></i>
                            </div>
                            <h4>PROJET III : 2021</h4>
                            <p>Cliquez pour visionner l'ensemble
                                de tous mes projets réaliser en 2021</p>
                        </div>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default Projects
