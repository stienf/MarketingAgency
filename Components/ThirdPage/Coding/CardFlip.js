import React, { useState } from "react";

import ReactCardFlip from "react-card-flip";
import { Container, Row, Col } from "reactstrap";

import marketing from "../photos/marketing.jpg";
import development from "../photos/development.jpg";
import strategy from "../photos/strategy.jpg";
import next from "../photos/next.jpg";
import prev from "../photos/prev.jpg";

import "../Design/Card.css";

const CardFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <Container>
      <Row>
        <Col className="mnv" xs="12" sm="12" md="12" lg="4" xl="4">
          <h4>Digital Marketing</h4>
          <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div className="marketing">
              <img src={marketing} alt="service" />
              <button className="next" onClick={handleClick}>
                <img src={next} alt="next" />
              </button>
            </div>

            <div className="marketing">
              <hr></hr>
              <ul>
                <li>Content Marketing</li>
                <li>Search Engine Optimization (SEO)</li>
                <li>Search Engine Marketing (SEM)</li>
                <li>Social Media Marketing (SMM)</li>
                <li>Pay-Per-Click Advertising (PPC)</li>
                <li>Affiliate Marketing</li>
                <li>Email Marketing</li>
                <li>Instant Messaging Marketing</li>
                <li>Radio&Television Advertising</li>
              </ul>
              <button className="prev" onClick={handleClick}>
                <img src={prev} alt="prev" />
              </button>
            </div>
          </ReactCardFlip>
        </Col>
        <Col className="mnv" xs="12" sm="12" md="12" lg="4" xl="4">
          <h4>Development&Design</h4>
          <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div className="development">
              <img src={development} alt="development" />
              <button className="next" onClick={handleClick}>
                <img src={next} alt="next" />
              </button>
            </div>

            <div className="development">
              <hr></hr>
              <ul>
                <li>Web Development Services</li>
                <li>Mobile Application Development</li>
                <li>E-Commerce Development</li>
                <li>Website Maintenance</li>
                <li>WordPress</li>
                <li>Development Custom</li>
                <li>Branding</li>
                <li>EDI Integrattion</li>
                <li>Web Design Services</li>
              </ul>
              <button className="prev" onClick={handleClick}>
                <img src={prev} alt="prev" />
              </button>
            </div>
          </ReactCardFlip>
        </Col>
        <Col className="mnv" xs="12" sm="12" md="12" lg="4" xl="4">
          <h4>Strategy</h4>
          <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
            <div className="strategy">
              <img src={strategy} alt="service" />
              <button className="next" onClick={handleClick}>
                <img src={next} alt="next" />
              </button>
            </div>

            <div className="strategy">
              <hr></hr>
              <ul>
                <li>Offpage optimization</li>
                <li>Mobile friendliness</li>
                <li>Defining the state of SEO</li>
                <li>Building quality backlinks</li>
                <li>An Engaging website</li>
                <li>
                  Focusing on audiences, channels
                  <br />
                  and capabilities
                </li>
                <li>
                  Bringing your best minds together
                  <br />
                  to dream of the possible
                </li>
              </ul>
              <button className="prev" onClick={handleClick}>
                <img src={prev} alt="prev" />
              </button>
            </div>
          </ReactCardFlip>
        </Col>
      </Row>
      <hr></hr>
    </Container>
  );
};

export default CardFlip;
