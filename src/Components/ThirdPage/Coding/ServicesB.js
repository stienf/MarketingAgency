import React from "react";

import OurApproch from "./OurApproch";
import OurServices from "./OurServices";
import service from "../photos/service.png";
import brand from "../photos/brand.jpg";

import { Container, Row, Col } from "reactstrap";

import "../Design/Services.css";

const Services = () => (
  <Container>
    <Row>
      <Col className="service" xs="12" sm="12" md="12" lg="12" xl="12">
        <img src={service} alt="service" />
        <h4>A Brand-first Marketing Agency</h4>
        <h6>
          WE help businesses to drive demand, to build brands and to change the
          way people live.
        </h6>
      </Col>
      <Col xs="12" sm="12" md="6" lg="6" xl="6">
        <p className="description">
          All our solutions begin with brand research as we believe that an
          effective brand can give you a significant edge in today’s highly
          competitive market.
          <br />
          Our team is exploring the new, always innovating, with a focus on
          creative storytelling and start by developing a foundation built on
          strong brand pillars and then define a brand voice that resonates with
          your audience.
          <br />
          Our agency communicates with new found audience and develops a
          relationship that converts them to consumers and eventually brand
          loyalists.
          <br />
          We help you to reach your prospects while maintaining a robust
          relationship with your existing clients. As long as your business has
          a strong digital presence, your customers will always find you.
        </p>
      </Col>
      <Col className="brand" xs="12" sm="12" md="6" lg="6" xl="6">
        <img src={brand} alt="Gif" />
      </Col>
      <OurApproch />
      <OurServices />
    </Row>
  </Container>
);

export default Services;
