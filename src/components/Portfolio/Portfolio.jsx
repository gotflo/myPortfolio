import React, { useEffect, useState } from 'react';
import "./Portfolio.scss";
import PortfolioList from './portfolioList/PortfolioList';
import { webapp, mobileapp, desktopapp, UIUX } from "../../data";
import {
    FaGithub
} from "react-icons/fa";

function Portfolio() {
    const [selected, setSelected] = useState("web");
    const [data, setData] = useState([]);
    const list = [
        {
            id: "web",
            title: "Web App",
        },
        {
            id: "mobile",
            title: "Mobile App",
        },
        {
            id: "desktop",
            title: "Desktop App",
        },
        {
            id: "UIUX",
            title: "UI/UX Design",
        },

    ];

    useEffect(() => {

        switch (selected) {
            case "web":
                setData(webapp);
                break;
            case "mobile":
                setData(mobileapp);
                break;
            case "desktop":
                setData(desktopapp);
                break;
            case "UIUX":
                setData(UIUX);
                break;
            default:
                setData(webapp);
        }

    }, [selected])

    return (
        <div className="portfolio" id="Projets">
            <h1>Mes projets</h1>

            <ul data-aos="zoom-in">
                {list.map(item => (
                    <PortfolioList
                        title={item.title}
                        activeP={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                    />
                ))}
            </ul>


            <div data-aos="zoom-out" className="containerP">
                {data.map(d => (
                    <div className="itemP">
                        <img alt={d.title} src={d.imgPro}
                            href={d.href}
                        />
                        <h4 className="Ptitle" >
                            <a className='ref' href={d.github}>
                                <FaGithub className='iconeye' />
                            </a>
                            <div className='comment'>
                                <h4> <a className='ref' href={d.href}>{d.title}</a></h4>
                                <h2 className='text'>{d.Comment}</h2>
                                <h2 className='tech'>{d.tech}</h2>
                            </div>
                        </h4>
                    </div>

                ))}
            </div>
        </div>
    );
};

export default Portfolio;
