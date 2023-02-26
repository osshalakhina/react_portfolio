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
          date="2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Freelance (FeatureHub.Ai)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Junior Front End Developer
          </h4>
          <p>
            Responsible for developing a part of company web site using the
            following tools React, SASS, Java Script.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Udemy</h3>

          <h4 className="vertical-timeline-element-subtitle">Student</h4>

          <p>
            {" "}
            JavaScript course by Bogdan Stashchuk (Software Engineer, MBA, PhD,
            CCIE), React cource by Youra Allakhverdov (Mobile & Web Developer),
            Creative Advanced CSS Animations by Ahmed Sadek (full stack web
            developer, freelancer & teacher).
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Muso Grazioso kennel
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Co-owner and co-founder
          </h4>
          <p>
            Made international sales and communicated with dog owners, logistics
            and organization of puppy delivery to another countries, photo and
            video processing, created site, brand elements etc.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Yandex Practicum</h3>

          <h4 className="vertical-timeline-element-subtitle">Student</h4>

          <p> Web Developing course designed on 10 months</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Hebrew language school "Ulpan Gordon"
          </h3>

          <h4 className="vertical-timeline-element-subtitle">Student</h4>

          <p> Hebrew course designed on 6 months (passed on B level).</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Shakuf media</h3>

          <h4 className="vertical-timeline-element-subtitle">
            Web Programming intern
          </h4>

          <p>
            {" "}
            Worked with Elementor (used HTML and CSS), made web and graphic
            design.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2020"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">MASA-Tlalim</h3>

          <h4 className="vertical-timeline-element-subtitle">Student</h4>

          <p> Web Programming course designed on a year.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2015 - 2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Freelance</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Designer (Pro Max Group, Inhacking, Datawiz.io and etc.)
          </h4>
          <p>
            Made web, graphic, package, advertising and presentation design,
            created illustrations.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2015"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Manning Publications Co.
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Illustrator</h4>
          <p>
            Created illustrations with Go-Gopher for «Get Programming with Go»
            by Nathan Youngman, Roger Pepper.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2013-2015"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Kartoon Art, Inc</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Co-owner and co-founder
          </h4>
          <p>
            Our start-up developed web and mobile app prototypes. Took part in
            GTF and got to the top 10 finalists, took part in Venture Summit
            2013 in Kyiv. I made web and graphic design, illustrations, worked
            with social network, presented our project on conferences.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2013"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Happy Farm Business Accelerator Alumni, Cycle 2
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Co-owner and co-founder of KartoonArt start-up
          </h4>

          <p>
            {" "}
            Funded by Happy Farm Business Accelerator with "KartoonArt" project,
            passed workshops by Luxr, leadership, psychology, entrepreneurship,
            marketing workshops. According to the result of the progress with
            the project were selected for internship to the USA.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2012 - 2012"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Kiev University of Culture
          </h3>

          <h4 className="vertical-timeline-element-subtitle">Student</h4>

          <p>
            {" "}
            Bachelors in Interior and Exterior design, completed the degree in
            one semester which designed for 3 years
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2007 - 2011"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Ukrainian Academy of Banking, Sumy
          </h3>

          <h4 className="vertical-timeline-element-subtitle">Student</h4>

          <p>
            {" "}
            Bachelors in International Economics, Faculty of International
            Economics.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2005 - 2009"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Sumy Higher College of Art and Culture
          </h3>

          <h4 className="vertical-timeline-element-subtitle">Student</h4>

          <p> Fine and Applied Arts.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
