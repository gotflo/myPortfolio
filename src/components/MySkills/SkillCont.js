import React from 'react';
import "./styleS.css";
import Myskills from "./index";
import Particles from "react-particles-js";
import AutreCompetences from '../Competances/AutreCompetences';

function SkillCont() {
    return (
        <div className="SkillCont">
            <Particles
                className="particlescanvas"
                params={{
                    "particles": {
                        "number": {
                            "value": 90,
                            "density": {
                                "enable": true,
                                "value_area": 1500
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "opacity": 0.02
                        },
                        "move": {
                            "direction": "right",
                            "speed": 0.5
                        },
                        "size": {
                            "value": 1
                        },
                        "opacity": {
                            "anim": {
                                "enable": true,
                                "speed": 2,
                                "opacity_min": 0.05,
                            }
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onclick": {
                                "enable": true,
                                "mode": "push"
                            }
                        },
                        "modes": {
                            "push": {
                                "particles_nb": 1
                            }
                        }
                    },
                    "retina_detect": true
                }} />
            <Myskills />
            <AutreCompetences />
        </div>
    )
}

export default SkillCont
