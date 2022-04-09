import React, { useEffect, useState } from 'react';
import "./Portfolio.scss";
import PortfolioList from './portfolioList/PortfolioList';
import { webapp, mobileapp, desktopapp } from "../../data";

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
                        <img src={d.imgPro}
                            alt="" href={d.href}
                        />
                        <h4 className="Ptitle" ><a className='ref' href={d.href}>{d.title}</a></h4>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Portfolio;
