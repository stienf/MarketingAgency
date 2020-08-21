import React from "react";

import { Col } from "reactstrap";
import CardFlip from "./CardFlip";
import Digital from "./Digital";
import EndPart from "./EndPart";

import "../Design/Services.css";

const OurServices = () => {
  return (
    <>
      <Col className="ourservices" xs="12" sm="12" md="12" lg="12" xl="12">
        <h4>Our Services</h4>
        <h6>Start setting the pace.</h6>
        <p className="text">
          We explain our online services in plain language. Our detailed monthly
          reports are easy to understand and delineate the specific work we’ve
          done and the specific results we’ve obtained. We’ll tell you the good,
          the bad and the ugly about the progress of your campaign, because
          we’ve learned that openness is the key to building productive,
          long-term business relationships.
        </p>
      </Col>
      <CardFlip />
      <Digital />
      <EndPart />
    </>
  );
};

export default OurServices;
