import MyPotfolio from "./images/myPortfolio.png";
import projectManager from "./images/Change3.png";
import GesCDENew from "./images/GesCDENew.png";
import gestionStock from "./images/gestionStock.png";
import gestionMagas from "./images/gestionMagasin.png";
import logexcolab from "./images/logexcolab.png";

export const webapp = [
    {
        id: 1,
        title: "Mon portfolio",
        imgPro: MyPotfolio,
        href: "https://gotflo.github.io/myPortfolio/",
        github: "https://github.com/gotflo/myPortfolio",
        Comment: "Réalisation de mon Portfolio, me permettant de mettre en avant mes compétances et mes différents projets réaliser ",
        tech: "Technologie utilisées : ReactJs, Bootstrap, FontAwesome"
    },
    {
        id: 2,
        title: "Project Manager",
        imgPro: projectManager,        
        github: "https://github.com/gotflo/ProjetManager-App",
        Comment: "Développement d’une application web basée sur une Architecture microservice qui gère les projets et tâches d'une company",
        tech: "Technologie utilisées : Spring Boot (Java, JPA), Angular 13(HTML, CSS, TypeScript), MDBootstrap, MySQL"
    },
    {
        id: 3,
        title: "GesCDE",
        imgPro: GesCDENew,        
        github: "https://github.com/gotflo/gescde",
        Comment: "Développement d’une application de gestion pour faciliter la gestion des enfants des centres de compassion (CDE)",
        tech: "Technologie utilisées : Spring Boot (Java, JPA), Angular 13(HTML, SASS, TypeScript), MDBootstrap, Electron Js, MySQL"
    },
    {
        id: 4,
        title: "LOGEXCOLAB",
        imgPro: logexcolab,        
        github: "https://github.com/Tdev228/logex-colab/tree/florent",
        Comment: "Développement de la Plateforme LOGEXCOLAB (Forum pour acteurs Tech)Plateforme web de discussion entre acteurs tech africains et ceux des quatres coins du monde.",
        tech: "Technologie utilisées : Laravel 8.x, HTML, CSS, JavaScript, Livewire, TailwindCSS, Alpine.js"
    }
];

export const mobileapp = [
    {
        id: 1,
        title: "Application en produiction ...",
        imgPro: "",
    }
];

export const desktopapp = [
    {
        id: 1,
        title: "Mini gestion des stocks",
        imgPro: gestionStock,
        Comment: "Développement d'une mini application de gestion des stocks",
        tech: "Technologie utilisées : JavaSwing "
    },
    {
        id: 2,
        title: "Gestion des Magasins",
        imgPro: gestionMagas,
        Comment: "Développement d'une application pour géles les stocks d'un amagasins, depuis la commande des produits jusqu'à la vente",
        tech: "Technologie utilisées : JavaSwing, JavaFx"
    }
];