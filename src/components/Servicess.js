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
                    <div data-aos="fade-up" className="common">
                        <h3 className="heading">SERVICES</h3>
                        <h1 className="mainHeader"> Mes Services</h1>
                        <p className="mainContent">
                            Je suis un jeune développeur vous proposant mes services dans
                            plusieurs domaines à savoir le Web, le Mobile et le Desktop
                        </p>
                        <div className="commonBorder"></div>
                    </div>
                    <div className="rowws">
                        <div data-aos="zoom-in-right" className="col__4">
                            <div className="services__boxx">
                                <FaGithub className="github" />
                                <div className="servicess__box-header">
                                    Web Development
                                </div>
                                <div className="servicess__box-p">
                                Peu importe l'activité que vous exercez, vous avez besoin d'être présent sur le web.
                                Confiez-moi la création de votre site vitrine,<br/> e-commerce ou e-evenement...
                                </div>
                                {/* <div className="servicess__box-p">
                                    Développement des sites internet, des application Web,
                                    le web Design et autres travaux concernant le web...
                                </div> */}
                            </div>
                        </div>
                        <div data-aos="zoom-in" className="col__4">
                            <div className="services__boxx">
                                <FaMobile className="github" />
                                <div className="servicess__box-header">
                                    Development Mobile
                                </div>
                                <div className="servicess__box-p">
                                Avoir une application mobile aujourd'hui fait 
                                gagner en visibilité, et améliore l’image de marque. C’est l’occasion pour une entreprise de mettre 
                                en avant son activité, et de proposer de nouveaux services à ces clients...
                                </div>
                            </div>
                        </div>
                        <div data-aos="zoom-in-left" className="col__4">
                            <div className="services__boxx">
                                <FaDesktop className="github" />
                                <div className="servicess__box-header">
                                    Dévelopment Desktop
                                </div>
                                <div className="servicess__box-p">
                                Une application desktop est une application qui s’exécute complètement 
                                sur un seul PC et donc n’a pas besoin d’un accès Web pour fonctionner.
                                et permet la gestion facile de vos activités
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
