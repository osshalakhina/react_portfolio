import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import "../Experience/index.scss";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022-2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Junior Front End Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Freelance (FeatureHub.Ai)
          </h4>
          <p>
            <ul>
              <li>
                Developed responsive landing page using React, Java Script,
                HTML5, SASS{" "}
              </li>
              <li>
                Analyzed UI/UX design for responsive layout to improve usability{" "}
              </li>
              <li>
                Worked with a team of developer and web designer to resolve
                Front End issues
              </li>
            </ul>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Student</h3>

          <h4 className="vertical-timeline-element-subtitle">Udemy</h4>

          <p>
            {" "}
            <ul>
              <li>
                "React" cource by Youra Allakhverdov (Mobile & Web Developer)
              </li>
              <li>
                "Creative Advanced CSS Animations" by Ahmed Sadek (full stack
                web developer, freelancer & teacher)
              </li>
              <li>
                "JavaScript" course by Bogdan Stashchuk (Software Engineer, MBA,
                PhD, CCIE)
              </li>
              <li>
                "The Complete JavaScript Course: From Zero to Expert!"" by Jonas
                Schmedtmann (Web Developer, Designer, and Teacher)
              </li>
            </ul>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Co-owner, Marketing Manager & Graphic Designer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Muso Grazioso kennel
          </h4>
          <p>
            <ul>
              <li>
                Was responsible for sales and collaboration with customers,
                considering factors such as cost, transportation requirements
                and desired uses{" "}
              </li>
              <li>
                Organized dogs delivery to customers locations to various
                countries (150+ puppies and adult dogs)
              </li>
              <li>
                Created brand elements for kennel (logo, website design),
                developed site (used Elementor, HTML5 and CSS3)
              </li>
              <li>
                Secured long-term accounts, managing sales presentations to
                promote kennel and brand benefits (worked with social networks
                such as Facebook and Instagram, with emails, upgrated data on
                kennel web site, work with special sites for sale of dogs)
              </li>
              <li>
                Provided excellent service and attention to customers when
                face-to-face or through phone conversations, by internet
                (including photo and video processing of puppies since birth and
                till their travel to new home)
              </li>
              <li>
                Improved customer satisfaction by finding creative solutions to
                problems
              </li>
            </ul>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Student</h3>

          <h4 className="vertical-timeline-element-subtitle">
            Yandex Practicum
          </h4>

          <p> Web Developing course (10 months).</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Student</h3>

          <h4 className="vertical-timeline-element-subtitle">
            Hebrew language school "Ulpan Gordon"
          </h4>

          <p> Hebrew course (6 months, passed on B level)</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Web Programming intern
          </h3>

          <h4 className="vertical-timeline-element-subtitle">Shakuf media</h4>

          <p>
            {" "}
            <ul>
              <li>
                Designed and developed websites for company’s customers using
                Elementor, HTML5 and CSS3
              </li>
              <li>
                Created designs, concepts, and sample layouts, based on
                knowledge of layout and esthetic design concepts
              </li>
            </ul>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2020"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Student</h3>

          <h4 className="vertical-timeline-element-subtitle">MASA-Tlalim</h4>

          <p> Web Programming course (12 months)</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2015 - 2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Web & Graphic Designer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Freelance (Datawiz.io, Pro Max Group, Inhacking, :Printl, School
            Angels, Indigo and etc..)
          </h4>
          <p>
            <ul>
              <li>Prepared illustrations and rough sketches of material</li>
              <li>
                Developed graphics and layouts for product illustrations, logos,
                presentation design and websites mirroring company brand style
              </li>
              <li>
                Conceptualized logo design, gif animations, websites, and social
                media channels to promote product brands
              </li>
              <li>
                Developed creative advertising content for various media,
                including business cards, flyers, posters, t-shorts, and product
                packaging while ensuring maximum brand awareness of target
                audience/market
              </li>
            </ul>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2015"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Illustrator</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Manning Publications Co.
          </h4>
          <p>
            Created illustrations with Go-Gopher for book «Get Programming with
            Go» by Nathan Youngman, Roger Pepper
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2013-2015"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Co-founder, Graphic Designer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Kartoon Art, Inc
          </h4>
          <p>
            Start-up developed platform for animated publications on Newsstand
            iOS (web and mobile app prototypes). We were alumni of Happy Farm
            business accelerator Cycle 2, was selected for internship in the
            USA, took part in GTF and got to the top 10 finalists, took part in
            Venture Summit 2013 in Kyiv. In this start-up project I was
            responsible for:
            <ul>
              <li>
                Research of potential competitors and their products in
                animation area
              </li>
              <li>
                Collaboration with potential users to discover and deliver the
                best solution to the market presented by the product (using
                social network such as Twitter, Facebook, forums for animators,
                2D/3D artists)
              </li>
              <li>
                Creation of logo, illustrations, presentations, web and mobile
                app design mirroring company brand style
              </li>
              <li>
                Developing creative advertising content such as business cards,
                flyers, posters, t-shorts, cups and etc.
              </li>
            </ul>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2012 - 2012"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Student</h3>

          <h4 className="vertical-timeline-element-subtitle">
            University of Culture, Kiev
          </h4>

          <p> Bachelors of Interior and Exterior design</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2007 - 2011"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Student</h3>

          <h4 className="vertical-timeline-element-subtitle">
            Ukrainian Academy of Banking, Sumy
          </h4>

          <p> Bachelors of International Economics</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2005 - 2009"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Student</h3>

          <h4 className="vertical-timeline-element-subtitle">
            Higher College of Art and Culture, Sumy
          </h4>

          <p> Teacher of Fine and Applied Arts</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
