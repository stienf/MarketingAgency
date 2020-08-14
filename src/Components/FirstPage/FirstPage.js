import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import '../FirstPage/FirstPage.css'

import marketing from '../../Images/marketing.jpg';
import webdev from '../../Images/webdev.jpg';
import strategy from '../../Images/strategy.jpg'


const FirstPage = () => {
  return (
    <>
      <Jumbotron className="jumbo">
      <Container className="header">
      <h1 className="headerTitle">MARKETING</h1>
      <h1 className="headerTitle">AGENCY</h1>
      </Container>
      
    <Container className="HPLinks" fluid={true}>
       
      
      <a className="link" href="url">MARKETING</a>
      <a className="link" href="url">WEB DEVELOPMENT</a>
      <a className="link" href="url">STRATEGY</a>
      </Container>
      </Jumbotron>

      <Container fluid={true}>
        <Row className="aboutSection">
          <Col lg={12} className="aboutSection">
            <Container className="about">
            <h1 className="aboutUsTitle">ABOUT US</h1>
            <p className="aboutUsText">
              Founded by 3 women, MOJO is a marketing agency based in Brussels, Belgium.<br/>
              We focus on all things digital, such as marketing, web development, design and more.
              Give your  business the digital boost it needs. 
              <hr/>
              Read all about us <a href="#" >here!</a>
          </p>
          </Container>
          </Col>
        </Row>
      </Container>

      <Container fluid={true} className="servicesSection">
        <Row >
          <Col lg={12}>
            <h1 className="servicesTitle">OUR SERVICES</h1>
          </Col> 
          </Row>
       <Row className="services">
          <Col className="serviceImgWrap" lg={4}>
          
          <Image className="servicesImg" src={marketing} roundedCircle />
          <h2 className="hpserv">Marketing</h2>
          </Col>
          <Col className="serviceImgWrap" lg={4}>
          
          <Image className="servicesImg" src={webdev} roundedCircle />
          <h2 className="hpserv">Development & Design</h2>
          </Col>
          <Col className="serviceImgWrap" lg={4}>
          
          <Image className="servicesImg" src={strategy} roundedCircle />
          <h2 className="hpserv">Digital Strategy</h2>
          </Col>
        </Row>
        <Row>
          <Col className="serviceImgWrap" lg={12}>        
          <Button className="servBtn" href="#">read more about our services</Button>
        </Col>
        </Row>
      </Container>


      <Container fluid={true}>
        <Row className="testimonialSection">
          <Col lg={12}>
            <h1 className="testimonialTitle">TESTIMONIALS</h1>
            <Container className="center">
            <Row>
              <Col className="servicesCards col d-flex justify-content-center">
            <Card style={{ width: '18rem' }} className="cardOverlay">
              <Card.Img variant="top" src={marketing} />
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button className="testBtn" variant="primary">Go to testimonial</Button>
              </Card.Body>
            </Card>
            </Col>
            <Col className="servicesCards col d-flex justify-content-center">
            <Card style={{ width: '18rem' }} className="cardOverlay">
              <Card.Img variant="top" src={webdev}/>
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button className="testBtn" variant="primary">Go to testimonial</Button>
              </Card.Body>
            </Card>
            </Col>
            <Col className="servicesCards col d-flex justify-content-center">
            <Card style={{ width: '18rem' }} className="cardOverlay">
              <Card.Img variant="top" src={strategy} />
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button className="testBtn" variant="primary">Go to testimonial</Button>
              </Card.Body>
            </Card>
            </Col>
            </Row>
            </Container>
          </Col>
        </Row>
      </Container>

      
    </>
  );
}

export default FirstPage
