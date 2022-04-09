import React, { useEffect } from 'react';
import "./App.css";
import Servicess from "./components/Servicess";
import "bootstrap/dist/css/bootstrap.min.css";
import Bannier from "./components/Bannier/Bannier";
import About from "./components/About";
import Contact from "./components/Contact";
import ContactMe from "./components/ContactMe/ContactMe";
import Navbar from "./components/Navbar/Navbar";
import Formation from "./components/Formation";
import SkillCont from "./components/MySkills/SkillCont";
import ScrollToTop from "./components/index";
import Particles from "react-particles-js";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

const App = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, [])




  return (
    <div id="app">
      <Navbar />
      <ScrollToTop />
      <Particles
        className="particles-canvas"
        params={{
          "particles": {
            "number": {
              "value": 30
            },
            "size": {
              "value": 1
            }
          },
          "shape": {
            "type": "star",
            "stroke": {
              "width": 6,
              "color": "blue"
            }
          },
          "interactivity": {
            "events": {
              "onhover": {
                "enable": true,
                "mode": "repulse"
              }
            }
          }
        }}
      />


      <Particles
        className="particlescanvas"
        params={{
          "particles": {
            "number": {
              "value": 60,
              "density": {
                "enable": true,
                "value_area": 1500
              }
            },
            "line_linked": {
              "enable": true,
              "opacity": 0.02
            },
            "move": {
              "direction": "right",
              "speed": 0.05
            },
            "size": {
              "value": 1
            },
            "opacity": {
              "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.05
              }
            }
          },
          "interactivity": {
            "events": {
              "onclick": {
                "enable": true,
                "mode": "push"
              }
            },
            "modes": {
              "push": {
                "particles_nb": 1
              }
            }
          },
          "retina_detect": true
        }} />      
      <Bannier />      
      <Servicess />
      <Particles
        className="particlescanvas"
        params={{
          "particles": {
            "number": {
              "value": 90,
              "density": {
                "enable": true,
                "value_area": 1500
              }
            },
            "line_linked": {
              "enable": true,
              "opacity": 0.02
            },
            "move": {
              "direction": "right",
              "speed": 0.5
            },
            "size": {
              "value": 1
            },
            "opacity": {
              "anim": {
                "enable": true,
                "speed": 2,
                "opacity_min": 0.05,
              }
            }
          },
          "interactivity": {
            "events": {
              "onclick": {
                "enable": true,
                "mode": "push"
              }
            },
            "modes": {
              "push": {
                "particles_nb": 1
              }
            }
          },
          "retina_detect": true
        }} />
      <About />
      <SkillCont />
      <Particles
        className="particlescanvas"
        params={{
          "particles": {
            "number": {
              "value": 90,
              "density": {
                "enable": true,
                "value_area": 1500
              }
            },
            "line_linked": {
              "enable": true,
              "opacity": 0.02
            },
            "move": {
              "direction": "right",
              "speed": 0.5
            },
            "size": {
              "value": 1
            },
            "opacity": {
              "anim": {
                "enable": true,
                "speed": 2,
                "opacity_min": 0.05,
              }
            }
          },
          "interactivity": {
            "events": {
              "onclick": {
                "enable": true,
                "mode": "push"
              }
            },
            "modes": {
              "push": {
                "particles_nb": 1
              }
            }
          },
          "retina_detect": true
        }} />
      <Formation />
      <Portfolio />
      <ContactMe />
      <Contact />
    </div>
  );
}

export default App;
