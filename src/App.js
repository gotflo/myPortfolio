import React from 'react';
import "./App.css";
import Servicess from "./components/Servicess";
import "bootstrap/dist/css/bootstrap.min.css";
import Bannier from "./components/Bannier";
import About from "./components/About";
import Contact from "./components/Contact";
import Mailer from "./components/Mailer";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar/Navbar";
import Particles from "react-particles-js";


function App() {
  return (
    <div id="app">
      <Navbar />
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
      <Projects />
      <Mailer />
      <Contact />
    </div>
  );
}

export default App;
