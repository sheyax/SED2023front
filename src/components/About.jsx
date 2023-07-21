import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Windmills from "../assets/images/Windmills.jpg";

const About = () => {
  const now = 60;
  return (
    <section id="about" className="block about-block">
      <a id="about_us"></a>
      <Container fluid>
        <div className="title-holder">
          <h2>About Us</h2>
          <div className="subtitle">Learn more about SED</div>
        </div>
        <Row>
          <Col sm={6}>
            <Image className="aboutimg" alt="about-img" src={Windmills} />
          </Col>
          <Col sm={6}>
            <p>
              Sustainable Energy Days Africa (SEDA) is a platform for knowledge
              exchange, policy advocacy and stakeholder collaboration on
              sustainable energy technology and related sectors in Africa
              bringing together sustainable energy experts, enthusiasts,
              companies, startups, investors, policy leaders and everyone
              working towards the energy transformation in Africa.
            </p>
            <h3>Our Objectives</h3>
            <ol>
              <li>
                Become a platform for knowledge exchange and collaboration for
                sustainable energy technologies in Africa.
              </li>
              <li>
                Be the go-to brand for Africa’s energy transformation progress
                in multiple sectors.
              </li>
              <li>
                Inspire indigenous innovation and encourage adoption of local
                solutions.
              </li>
            </ol>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
