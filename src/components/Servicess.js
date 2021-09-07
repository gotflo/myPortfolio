import React from 'react'
import {
    FaGithub,
    FaDesktop,
    FaMobile
} from "react-icons/fa";
function Servicess() {
    return (
        <div className="services" id="Servicess">
            <div className="containerA">
                <div className="services__header">
                    <div className="common">
                        <h3 className="heading">SERVICES</h3>
                        <h1 className="mainHeader"> My Services</h1>
                        <p className="mainContent">
                            Je suis un jeune développeur vous proposant mes services dans
                            plusieurs domaines à savoir le Web, le Mobile et le Desktop
                        </p>
                        <div className="commonBorder"></div>
                    </div>
                    <div className="rowws">
                        <div className="col__4">
                            <div className="services__boxx">
                                <FaGithub className="github" />
                                <div className="servicess__box-header">
                                    Web Development
                                </div>
                                <div className="servicess__box-p">
                                    Développement des sites internet, des application Web,
                                    le web Design et autres travaux concernant le web...
                                </div>
                            </div>
                        </div>
                        <div className="col__4">
                            <div className="services__boxx">
                                <FaMobile className="github" />
                                <div className="servicess__box-header">
                                    Development Mobile
                                </div>
                                <div className="servicess__box-p">
                                    Développement de tout types d'applications s'éxécutant
                                    aussi bien sur Android et sur IOS...
                                </div>
                            </div>
                        </div>
                        <div className="col__4">
                            <div className="services__boxx">
                                <FaDesktop className="github" />
                                <div className="servicess__box-header">
                                    Dévelopment Desktop
                                </div>
                                <div className="servicess__box-p">
                                    Développement de tout types d'applications s'éxécutant
                                    aussi bien sur Windows, Linux...
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Servicess
