import React from 'react';
import ImageP from "../../images/projetP221.png";
import "./Bannier.scss";
import Typed from "react-typed";
import {
    FaGithub,
    FaTwitter,
    FaLinkedin,
    FaWhatsapp
} from "react-icons/fa";

const Bannier2 = () => {
    const [state] = React.useState({
        title: "Florent Gotliebe AKPA",
    });
    return (
        <header className="bannier" id="Bannier">
            <div className="bcontainer">
                <div className="brow">
                    <div className="bheader__content">
                        <div className="">
                            <div className="bheader__section" >
                                <ul className="bheader__ul">
                                    <a className="icong" href="https://github.com/gotflo">
                                        <li>
                                            <FaGithub className="headerIcon" />
                                        </li>
                                    </a>
                                    <a className="iconn" href="https://twitter.com/FlorentGotliebe" >
                                        <li>
                                            <FaTwitter className="headerIcon" />
                                        </li>
                                    </a>
                                    <a className="iconni" href="https://www.linkedin.com/in/florent-gotliebe-akpa/" >
                                        <li>
                                            <FaLinkedin className="headerIcon" />
                                        </li>
                                    </a>
                                    <a className="iconnw" href="https://wa.me/22893471703" >
                                        <li>
                                            <FaWhatsapp className="headerIcon" />
                                        </li>
                                    </a>
                                </ul>
                                <h1>{state.title}</h1>
                                <Typed className="typed-text"
                                    strings={["Développeur WEB ", "Développeur MOBLIE "]}
                                    typeSpeed={60}
                                    backSpeed={60}
                                    loop
                                />
                                <p className='disegn'>UX/UI Designer</p>
                                <div className="header__buttons">
                                    <a href="#About">
                                        <button className="btnn">Mon Portfolio</button>
                                    </a>
                                    &nbsp;&nbsp;&nbsp;
                                </div>
                                <div className=""></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="bbannier__img">
                    <div className="profile">
                        <img className="imgP" src={ImageP} height="200px" alt="Mon profil" />
                    </div>
                </div>
            </div>
        </header>
    );

}

export default Bannier2