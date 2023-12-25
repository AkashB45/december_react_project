
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Container, Row, Col } from 'react-bootstrap'; // Import Bootstrap components

const AboutUs = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col>
        <h2>About Our Grocery Service</h2>
          <p>
            At GRIGO Grocery, we are dedicated to providing fresh and high-quality groceries
            to our customers. Our mission is to make healthy and delicious food accessible to
            everyone while ensuring convenience and reliability.
          </p>
          <p>
            From farm-fresh produce to pantry essentials and specialty items, we strive to offer
            a wide range of products to cater to diverse tastes and preferences.
          </p>
          <p>
            Our team is committed to excellent customer service, timely delivery, and maintaining
            strong relationships with local suppliers to ensure the best products for our customers.
          </p>
          {/* Add more content about your company */}
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
