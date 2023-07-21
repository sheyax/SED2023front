import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Chibunna from "../assets/images/Chibunna.jpg";

import Michal from "../assets/images/Michal-img.jpeg";
import team4 from "../assets/images/team4.jpg";

import Chibueze from "../assets/images/CorpPhoto.jpeg";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

const Team = () => {
  const teamsData = [
    {
      id: 1,
      image: Chibunna,
      fbLink: "https://www.facebook.com",
      twitterLink: "https://www.twitter.com",
      linkedinLink: "https://www.linkedin.com",
      name: "Chibunna Ogbonna",
      designation: "CEO",
      description:
        "",
    },
    {
      id: 2,
      image: team4,
      fbLink: "https://www.facebook.com",
      twitterLink: "https://www.twitter.com",
      linkedinLink: "https://www.linkedin.com",
      name: "Bright Nwaneri",
      designation: "Head Of Operations",
      description:
        "",
    },
    {
      id: 3,
      image: Michal,
      fbLink: "https://www.facebook.com",
      twitterLink: "https://www.twitter.com",
      linkedinLink: "https://www.linkedin.com",
      name: "Michal Ezeh",
      designation: "Content Strategist",
      description:
        "Michal Ezeh is a Petroleum Engineering student at the University of Lagos, Nigeria. She is a Research Analyst at Sirius-X Energy, a clean energy start-up located in the northwest region of Nigeria. She also works as an Operational Excellence Analyst at illuminem.",
    },
    {
      id: 4,
      image: team4,
      fbLink: "https://www.facebook.com",
      twitterLink: "https://www.twitter.com",
      linkedinLink: "https://www.linkedin.com",
      name: "Ebenezer Emaikwu",
      designation: "Brand Expert",
      description:
        "",
    },
    {
      id: 5,
      image: team4,
      fbLink: "https://www.facebook.com",
      twitterLink: "https://www.twitter.com",
      linkedinLink: "https://www.linkedin.com",
      name: "Sophia Pitt",
      designation: "Developer",
      description:
        "",
    },
    {
      id: 6,
      image: team4,
      fbLink: "https://www.facebook.com",
      twitterLink: "https://www.twitter.com",
      linkedinLink: "https://www.linkedin.com",
      name: "Martin Okorowu",
      designation: "PR and Communications Lead",
      description:
        "Martin Okorowu is a Chemical/Process Engineer by training with strengths in Pest Control and Agro-processing. Martin possesses vast experience in Public Relations, Digital Communications, Public Policy Research and Political Communications.",
    },
    {
      id: 7,
      image: team4,
      fbLink: "https://www.facebook.com",
      twitterLink: "https://www.twitter.com",
      linkedinLink: "https://www.linkedin.com",
      name: "Ryan Giggs",
      designation: "Content Writer",
      description:
        "",
    },
    {
      id: 8,
      image: Chibueze,
      fbLink: "https://www.facebook.com",
      twitterLink: "https://www.twitter.com",
      linkedinLink: "https://www.linkedin.com",
      name: "Chibueze Arisa",
      designation: "Software Developer",
      description:
        "",
    },
  ];
  return (
    <section id="teams" className="block teams-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Meet the Team</h2>
          <div className="subtitle">Here are our amazing talents</div>
        </div>
        <Row>
          {teamsData.map((teams) => {
            return (
              <Col sm={3} key={teams.id}>
                <div className="image">
                  <Image className="teampic" src={teams.image} alt="Image" />
                  <div className="overlay">
                    <div className="socials">
                      <ul>
                        <li>
                          <a href={teams.fbLink}>
                            <FaFacebook />
                          </a>
                        </li>
                        <li>
                          <a href={teams.twitterLink}>
                            <AiFillTwitterCircle />
                          </a>
                        </li>
                        <li>
                          <a href={teams.linkedinLink}>
                            <FaLinkedin />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="content">
                  <h3>{teams.name}</h3>
                  <span className="designation">{teams.designation}</span>
                  <p>{teams.description}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Team;
