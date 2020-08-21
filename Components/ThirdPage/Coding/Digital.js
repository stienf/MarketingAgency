import React from "react";
import { Container, Row, Col } from "reactstrap";

import "../Design/Digital.css";

const Digital = () => {
  return (
    <Container>
      <Row>
        <h2>Digital Strategies To Help Your Business Grow</h2>
        <Col xs="12" sm="12" md="12" lg="6" xl="6">
          <iframe
            className="video"
            src="https://www.bing.com/videos/search?view=detail&mid=30F4A96D208D9459B4F730F4A96D208D9459B4F7&shtp=GetUrl&shid=da448736-55fd-4f30-8e5a-1f10f1381cfe&shtk=RGlnaXRhbCBNYXJrZXRpbmcgLSBXaGl0ZWJvYXJkIEFuaW1hdGlvbiBWaWRlb3M%3D&shdk=SG93IHRvIHVzZSB3aGl0ZWJvYXJkIGFuaW1hdGlvbiB2aWRlb3MgdG8gY29tbXVuaWNhdGUgd2l0aCB5b3VyIGN1c3RvbWVycy4%3D&shhk=KYCEmFYAFy4TKeR12YRn2FdsUuUZjRkvFUzvXd4NeYI%3D&form=VDSHOT&shth=OSH.uffKs3cBnkMGXXbSlq%252FQuA"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
          />
        </Col>
        <Col xs="12" sm="12" md="12" lg="6" xl="6">
          <p className="digital">
            Whether you need a whole new website, or just looking to increase
            traffic to the one you’ve already got, we’ve got a solution for you.
            We are new in the digital marketing and website design industry but
            we are very ambitious. In that time we’ve gained invaluable
            experience in how to properly market businesses from any industry
            online. Whether you’re running a resort, a small online shop, or a
            large corporation, we have the know-how and experience to be able to
            market your business properly online and grow your business. We can
            analyze what has worked for you in the past, what has been done but
            wasn’t successful, and see what hasn’t been done yet that could
            yield good result, and then create for you a custom-tailored digital
            marketing solution. Each marketing endeavor is a team effort which
            brings together technical knowledge, graphic design, and marketing
            techniques, as well as invaluable past experiences that we have
            gained from previous clients.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Digital;
