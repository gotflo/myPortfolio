import React from "react";
import { FaReact, FaHtml5, FaJs, FaCss3Alt, FaJava } from "react-icons/fa";
import my_tof from "../images/my-tof1.png";

const About = () => {
    const [header] = React.useState({
        subHeader: "About Me",
        text:
            "Je vous parle un peut de ma personnalité, de mon Parcours,\
             de mes compétances et aussi de mes domaines de travaille. Merci",
    });
    const [state] = React.useState([
        { id: 1, title: "Name:", text: "Florent Gotliebe AKPA" },
        { id: 2, title: "Email:", text: "komlagotlieb@gmail.com" },
        { id: 3, title: "Phone:", text: "+228 93 47 17 03" },
        { id: 4, title: "Linkedin", text: "Florent Gotliebe AKPA" },
    ]);
    return (
        <div className="about" id="About">
            <div className="containerA">
                <div className="common">
                    <h1 className="mainHeader">{header.subHeader}</h1>
                    <p className="mainContent">{header.text}</p>
                    <div className="commonBorder"></div>
                </div>
                <div className="row  h-650 alignCenter">
                    <div className="">
                        <div className="about__img">
                            <img className="about1__img" src={my_tof} alt="man" />
                        </div>
                    </div>
                    <div className="col__6">
                        <div className="about__info">
                            <h1>Salut</h1>
                            <div className="about__info-p1">
                                Je suis un jeune passioné de l'informatique qui a eu son premier diplôme en
                                informatique bureautique en Juillet 2013 dans le Centre informatique Espoir.
                            </div>
                            <div className="about__info-p2">
                                En 2019, je m'inscrit en Licence professionelle à l'INSTITUT POLYTECHNIQE DEFITECH,
                                une école de renommée qui depuis quelques années forme des experts dans les domaines
                                informatique a savoir (le Génie Logiciel et en Système Réseau), là où je continue mes études
                                dans le parcours Génie Logiciel.
                            </div>
                            <div className="info__contacts">
                                <div className="row">
                                    {state.map((info) => (
                                        <div className="col-6">
                                            <strong>{info.title}</strong>
                                            <p>{info.text}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="tlcharger">
                                    <a href="../Cv.pdf" download="../Cv.pdf">
                                        <button className="btnn">Download CV</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="connaissances__Conta">
                <div className="connaissances">
                    <div className="connaissancesM">Mes connaissances</div>
                    <div className="commonBorderr"></div>
                    <div className="icons">
                        <ul className="connaissnceCircles">
                            <li>
                                <FaReact className="Icon" />
                            </li>
                            <li>
                                <FaHtml5 className="Icon" />
                            </li>
                            <li>
                                <FaCss3Alt className="Icon" />
                            </li>
                            <li>
                                <FaJs className="Icon" />
                            </li>
                            <li>
                                <FaJava className="Icon" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
