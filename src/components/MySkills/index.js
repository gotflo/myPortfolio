import React from "react";
import "./styleS.css";
import Skill from "./Skill/Skill";
import 'react-circular-progressbar/dist/styles.css';



const Myskills = (props) => {

    const skills = [
        {
            skillName: 'HTML5/CSS3',
            value: 80,
            textColor: "#00A19D",
            pathColor: "#00A19D"
        },
        {
            skillName: 'JavaScript',
            value: 69,
            textColor: "#F43B86",
            pathColor: "#F43B86"
        },
        {
            skillName: 'Java',
            value: 75,
            textColor: "#C2F784",
            pathColor: "#C2F784"
        },
        {
            skillName: 'PHP',
            value: 50,
            textColor: "#6D8299",
            pathColor: "#6D8299"
        },
        {
            skillName: 'C++',
            value: 55,
            textColor: "#FF95C5",
            pathColor: "#FF95C5"
        },
    ]
    const frame = [
        {
            skillName: 'React',
            value: 70,
            textColor: "#FFB319",
            pathColor: "#FFB319"
        },
        {
            skillName: 'Laravel',
            value: 73,
            textColor: "#F42236",
            pathColor: "#F42236"
        },
        {
            skillName: 'Flutter',
            value: 65,
            textColor: "#07a8f1",
            pathColor: "#07a8f1"
        },
        {
            skillName: 'Material UI',
            value: 45,
            textColor: "#FF7600",
            pathColor: "#FF7600"
        },
        {
            skillName: 'Alpine js',
            value: 50,
            textColor: "#F05945",
            pathColor: "#F05945"
        },
    ]

    return (
        <div className="containerS">
            <div data-aos="zoom-in-up"
                data-aos-duration="3000"
                className="">
                <p className="uppercase font-14">Mes compétances</p>
                <p className="types">Langages</p>
                <div className="wraps">
                    {skills.map((skill, index) => (
                        <Skill
                            key={index}
                            skillName={skill.skillName}
                            value={skill.value}
                            textColor={skill.textColor}
                            pathColor={skill.pathColor}
                        />
                    ))}
                </div>
                <p className="typesF">FRAMEWORKS & BIBLIOTHÈQUES</p>
                <div className="wraps">
                    {frame.map((frame, index) => (
                        <Skill
                            key={index}
                            skillName={frame.skillName}
                            value={frame.value}
                            textColor={frame.textColor}
                            pathColor={frame.pathColor}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Myskills;
