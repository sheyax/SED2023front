import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Windmills from "../assets/images/Windmills.jpg";
import SED23 from "../assets/images/sed2023banner.jpeg";
import SED from "../assets/images/SED Banner.jpeg";

var heroData = [
  {
    id: 1,
    image: Windmills,
    title: "",
    description: "",
    link: "https://www.google.com",
  },
  {
    id: 2,
    image: SED23,
    title: "",
    description: "",
    link: "https://www.facebook.com",
  },
  {
    id: 3,
    image: SED,
    title: "",
    description: "",
    link: "https://www.twitter.com",
  },
];

const Hero = () => {
  return (
    <section id="home" className="hero-block">
      <Carousel>
        {heroData.map((hero) => {
          return (
            <Carousel.Item key={hero.id}>
              <img
                className="d-block w-100"
                src={hero.image}
                alt={"slide " + hero.id}
              />
              <Carousel.Caption>
                <h3>{hero.title}</h3>
                <p>{hero.description}</p>
                <a className="btn btn-primary" href="#register">
                  Register Now
                </a>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
};

export default Hero;
