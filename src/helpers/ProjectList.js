import Proj1 from "../assets/projects/proj1.jpg";
import Proj2 from "../assets/projects/proj2.jpg";
import Proj3 from "../assets/projects/proj3.jpg";
import Proj4 from "../assets/projects/proj4.jpg";
import Proj7 from "../assets/projects/proj7.jpg";
import Proj8 from "../assets/projects/proj8.jpg";
// import Proj5 from "../assets/projects/proj5.jpg";
// import Proj6 from "../assets/projects/proj6.jpg";

let mesto = require("../assets/images/mesto.gif");
let travelling = require("../assets/images/travelling.gif");
let learn = require("../assets/images/how-to-learn.gif");
let portfolio = require("../assets/images/portfolio.gif");
let react_portfolio = require("../assets/images/react_portfolio.gif");
let featureHub = require("../assets/images/featureHub.gif");
// let expenses = require("../assets/images/expenses.gif");
// let order = require("../assets/images/order.gif");

export const ProjectList = [
  {
    name: "Mesto",
    image: Proj1,
    skills: "JavaScript, HTML, CSS, Nested by BEM, GitHub",
    link: "https://github.com/osshalakhina/mesto?",
    myGif: mesto,
    demo: "https://osshalakhina.github.io/mesto/",
  },
  {
    name: "Traveling",
    image: Proj2,
    skills: "HTML, CSS, Nested file structure by BEM, GitHub",
    link: "https://github.com/osshalakhina/russian-travel?",
    myGif: travelling,
    demo: "https://osshalakhina.github.io/russian-travel/?",
  },
  {
    name: "How To Learn",
    image: Proj3,
    skills: "HTML, CSS, Nested file structure by BEM, GitHub",
    link: "https://github.com/osshalakhina/how-to-learn?",
    myGif: learn,
    demo: "https://osshalakhina.github.io/how-to-learn/",
  },
  {
    name: "Portfolio",
    image: Proj4,
    skills: "React, JavaScript, HTML, CSS, GitHub",
    link: "https://github.com/osshalakhina/my_portfolio",
    myGif: portfolio,
    demo: "https://shalakhina.com/",
  },
  {
    name: "Portfolio",
    image: Proj7,
    skills: "React, JavaScript, HTML, CSS, GitHub",
    link: "https://github.com/osshalakhina/react_portfolio",
    myGif: react_portfolio,
    demo: "https://kosov.site/projects",
  },
  {
    name: "FeatureHub.Ai",
    image: Proj8,
    skills: "React, JavaScript, SASS",
    link: "https://beta.featurehub.ai/",
    myGif: featureHub,
    demo: "https://beta.featurehub.ai/",
  },
  // {
  //   name: "Expenses",
  //   image: Proj5,
  //   skills: "React, JavaScript, HTML, CSS, GitHub",
  //   link: "https://github.com/osshalakhina/expenses-react?",
  //   myGif: expenses,
  //   demo: "https://raw.githubusercontent.com/osshalakhina/expenses-react/main/public/Project.gif",
  // },
  // {
  //   name: "Order",
  //   image: Proj6,
  //   skills: "React, JavaScript, HTML, CSS, GitHub",
  //   link: "https://github.com/osshalakhina/challenge?",
  //   myGif: order,
  //   demo: "https://raw.githubusercontent.com/osshalakhina/challenge/main/public/preview.gif",
  // },
];
