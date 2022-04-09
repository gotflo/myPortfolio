import React from 'react';
import ImageP from "../images/projetP222.png";
import Typed from "react-typed";
import {
    FaGithub,
    FaTwitter,
    FaInstagram,
    FaWhatsapp
} from "react-icons/fa";
const Bannier = () => {
    const [state] = React.useState({
        title: "Florent Gotliebe AKPA",
    });
    return (
        <header className="header" id="Bannier">
            <div className="container">
                <div className="row">
                    <div className="col6">
                        <div className="header__content">
                            <div className="header__section" data-aos="fade-right">
                                <ul className="header__ul">
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
                                    <a className="iconni" href="https://www.instagram.com/invites/contact/?i=388k4lv5xast&utm_content=1zey5mf" >
                                        <li>
                                            <FaInstagram className="headerIcon" />
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
                                    strings={["Développeur WEB ", "Développeur MOBLIE ", "Développeur DESKTOP"]}
                                    typeSpeed={60}
                                    backSpeed={60}
                                    loop
                                />
                                <p></p>
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
                <div className="bannier__img" data-aos="fade-left">
                    <img className="imgP" src={ImageP} height="200px" alt="Mon profil" />
                </div>
            </div>
        </header>
    );
};

export default Bannier







