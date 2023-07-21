import React from "react";
import Container from "react-bootstrap/Container";


const Contact = () => {
  return (
    <Container fluid>
      <a id="contact_us"></a>
      <div className="contact-info">
        <ul>
          <li>
            <i className="fas fa-envelope"></i> ouremail@mail.com
          </li>
          <li>
            <i className="fas fa-phone"></i>0008000000
          </li>
          <li>
            <i className="fas fa-map"></i>Location
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Contact;
