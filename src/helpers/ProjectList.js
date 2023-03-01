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
    name: "FeatureHub.Ai",
    description: "[ React.js, JavaScript, HTML5, SASS ]",
    image: Proj8,
    tehnology: "React.js, JavaScript, HTML5, SASS",
    about:
      "FeatureHub.Ai is a service that will make AI/ML projects more efficient and effective. Project in progress on the platform, so, if you are interested, please, leave your email to stay informed on the latest developments and be one of the first to experience the power of FeatureHub.AI.",
    link: "https://beta.featurehub.ai/",
    myGif: featureHub,
    demo: "https://beta.featurehub.ai/",
  },
  {
    name: "Portfolio (last version)",
    description: "[ React.js, HTML5, SASS ]",
    image: Proj7,
    tehnology: "React.js, HTML5, SASS",
    about:
      "Compilation of works that exemplifies my skills, qualifications, education, training, and experiences. All what provides insight into my personality and work ethic.    ",
    link: "https://github.com/osshalakhina/react_portfolio",
    myGif: react_portfolio,
    demo: "https://kosov.site/projects",
  },

  {
    name: "Portfolio (first version)",
    description: "[ React.js, HTML5, Tailwind CSS ]",
    image: Proj4,
    tehnology: "React.js, HTML5, Tailwind CSS",
    about:
      "Old version of portfolio (first version, with surname which I had before I married). Compilation of works that exemplifies my skills, qualifications, education, training, and experiences. All what provides insight into my personality and work ethic.",
    link: "https://github.com/osshalakhina/my_portfolio",
    myGif: portfolio,
    demo: "https://shalakhina.com/",
  },

  {
    name: "Mesto",
    description: "[ JavaScript, HTML5, CSS3 ]",
    image: Proj1,
    tehnology:
      "JavaScript, HTML5, CSS3 (Flexbox, Grid, media queries), Nested file structure by BEM",
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
    tehnology:
      "HTML5, CSS3 (FlexBox, Grid, Media queries), Nested file structure by BEM",
    about:
      "Adaptive and responsive website. Versions available for 4 different resolutions: 1280 pixels and above, from 1024px to 1280px, from 768px to 1024px, up to 768px.",
    link: "https://github.com/osshalakhina/russian-travel?",
    myGif: travelling,
    demo: "https://osshalakhina.github.io/russian-travel/?",
  },
  {
    name: "How To Learn",
    description: "[ HTML5, CSS3 ]",
    image: Proj3,
    tehnology: "HTML5, CSS3, Nested file structure by BEM",
    about: "Landing page, a simple layout.",
    link: "https://github.com/osshalakhina/how-to-learn?",
    myGif: learn,
    demo: "https://osshalakhina.github.io/how-to-learn/",
  },
];
