import Proj1 from "../assets/projects/proj1.jpg";
import Proj2 from "../assets/projects/proj2.jpg";
import Proj3 from "../assets/projects/proj3.jpg";
import Proj4 from "../assets/projects/proj4.jpg";
import Proj7 from "../assets/projects/proj7.jpg";
import Proj8 from "../assets/projects/proj8.jpg";

let mesto = require("../assets/images/mesto.gif");
let travelling = require("../assets/images/travelling.gif");
let learn = require("../assets/images/how-to-learn.gif");
let portfolio = require("../assets/images/portfolio.gif");
let react_portfolio = require("../assets/images/react_portfolio.gif");
let featureHub = require("../assets/images/featureHub.gif");

export const ProjectList = [
  {
    name: "Mesto",
    description: "[ HTML5, CSS3, JavaScript ]",
    image: Proj1,
    tehnology: "HTML, CSS, JavaScript, Nested by BEM",
    about:
      "Mesto service: an interactive page where you can exchange photos and put likes, change data.",
    link: "https://github.com/osshalakhina/mesto?",
    myGif: mesto,
    demo: "https://osshalakhina.github.io/mesto/",
  },
  {
    name: "Traveling",
    description: "[ HTML5, CSS3 ]",
    image: Proj2,
    tehnology: "HTML, CSS, Nested file structure by BEM",
    about: "",
    link: "https://github.com/osshalakhina/russian-travel?",
    myGif: travelling,
    demo: "https://osshalakhina.github.io/russian-travel/?",
  },
  {
    name: "How To Learn",
    description: "[ HTML5, CSS3 ]",
    image: Proj3,
    tehnology: "HTML, CSS, Nested file structure by BEM",
    about: "",
    link: "https://github.com/osshalakhina/how-to-learn?",
    myGif: learn,
    demo: "https://osshalakhina.github.io/how-to-learn/",
  },
  {
    name: "Portfolio",
    description: "[ HTML5, Tailwind CSS, JavaScript, React.js ]",
    image: Proj4,
    tehnology: "HTML, CSS, React, JavaScript",
    about: "",
    link: "https://github.com/osshalakhina/my_portfolio",
    myGif: portfolio,
    demo: "https://shalakhina.com/",
  },
  {
    name: "Portfolio",
    description: "[ HTML5, CSS3, JavaScript, React.js ]",
    image: Proj7,
    tehnology: "HTML, CSS, React, JavaScript",
    about: "",
    link: "https://github.com/osshalakhina/react_portfolio",
    myGif: react_portfolio,
    demo: "https://kosov.site/projects",
  },
  {
    name: "FeatureHub.Ai",
    description: "[ HTML5, CSS3, JavaScript, React.js ]",
    image: Proj8,
    tehnology: "SASS, React, JavaScript",
    about: "",
    link: "https://beta.featurehub.ai/",
    myGif: featureHub,
    demo: "https://beta.featurehub.ai/",
  },
];
