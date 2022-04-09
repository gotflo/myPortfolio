import React from 'react';
import ImageD from "../images/defi.jpg";
import ImageCisco from "../images/cisco-siège.jpg";
import {
    FaNetworkWired,
    FaUniversity
} from "react-icons/fa";
function Formation() {
    return (
        <div className="services" id="Formations">
            <div className="containerA">
                <div className="services__header">
                    <div className="common">
                        <h3 className="heading">FORMATIONS</h3>
                        {/* <h1 className="mainHeader"></h1> */}
                        <p className="mainContent">
                        </p>
                        <div className="commonBorder"></div>
                    </div>
                    <div className="rowwsF">
                        <div data-aos="flip-right"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" className="col__4">
                            <div className="fservices__boxx">
                                <FaUniversity className="github" />
                                <div className="fservicess__box-p">
                                    <img className="imDefi" src={ImageD} height="200px" alt="Mon profil" />
                                </div>
                                <div className="servicess__box-header">
                                    <a className="Lien" href="https://www.defitech.tg/">
                                        DEFITECH
                                    </a>
                                </div>
                                <div className="fservicess__box-p">
                                    <p>Parcourt : Génie Logiciel</p>
                                    <p>Année : 2019-2022</p>
                                </div>
                            </div>
                        </div>
                        <div data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="2000" className="col__4">
                            <div className="fservices__boxx">
                                <FaNetworkWired className="github" />
                                <div className="fservicess__box-p">
                                    <img className="imCis" src={ImageCisco} height="200px" alt="Mon profil" />
                                </div>
                                <div className="servicess__box-header">
                                    <a className="Lien" href="https://www.cisco.com/">
                                        CISCO CCNA
                                    </a>
                                </div>
                                <div className="fservicess__box-p">
                                    <p>Cours : Réseau Cisco (En ligne)</p>
                                    <p>Année : 2019-2021</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Formation
