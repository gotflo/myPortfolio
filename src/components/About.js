import React from "react";
import my_tof from "../images/my-tof1.png";
import CV from "../gotflo.pdf";

const About = () => {
    const [header] = React.useState({
        subHeader: "A Propos",
        text: "Je vous parle un peu de ma personnalité, de mon Parcours,\
        de mes compétences et aussi de mes domaines de travaille. Merci",
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
                <div data-aos="fade-up" className="common">
                    <h1 className="mainHeader">{header.subHeader}</h1>
                    <p className="mainContent">{header.text}</p>
                    <div className="commonBorder"></div>
                </div>
                <div className="row  h-650 alignCenter">
                    <div className="">
                        <div data-aos="fade-right"
                            data-aos-offset="300"
                            data-aos-easing="ease-in-sine" className="about__img">
                            <img className="about1__img" src={my_tof} alt="man" />
                        </div>
                    </div>
                    <div className="col__6">
                        <div data-aos="zoom-in-up" className="about__info">
                            <h1>Salut</h1>
                            <div className="about__info-p1">
                                Je suis un jeune passionné de l'informatique qui a eu son premier diplôme en
                                informatique bureautique en Juillet 2013 dans le Centre informatique Espoir.
                            </div>
                            <div className="about__info-p2">
                            En 2019, je m’inscris en Licence professionnelle à l'INSTITUT POLYTECHNIQE DEFITECH,
                            une école de renommée qui depuis quelques années forme des experts dans les domaines
                            informatique a savoir (le Génie Logiciel et en Système Réseau), là où je continue mes études
                            dans le parcours Génie Logiciel.
                            </div>
                            <div className="info__contacts">
                                <div id="grid-row">
                                    {state.map((info) => (
                                        <div data-aos="flip-down"
                                            data-aos-duration="1500" className="cell">
                                            <strong>{info.title}</strong>
                                            <p>{info.text}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="tlcharger">
                                    <a href={CV} download={CV}>
                                        <button className="btnn">Télécharger CV</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
