import React from "react";
import my_tof from "../images/mytof.jpg";
import CV from "../Gotflo_cv.pdf";

const About = () => {
    const [header] = React.useState({
        subHeader: "A Propos",
        text: "je m'efforce de mieux faire mon travail quand un minimum de conditions est réuni",
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
                                En tant que développeur j'adore documenter mon travail afin d'être de plus en plus efficace possible
                            </div>
                            <div className="about__info-p2">
                            Outre mes compétences techniques, je possède aussi des connaissances dans la gestion de projet, une excellente aptitudes à résoudre des problèmes informatiques, une capacité d'adaptation en fonction du besoin, des qualités relationnelles, un esprit d'équipe et une grande rigueur.
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
