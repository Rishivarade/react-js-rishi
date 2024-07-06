import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';


const Profile = () => {
  return (
    <Container className="text-left mt-5">
      <Row className='justify-content-between align-items-center'>
        <Col md={6}  className="">
          <h1><strong>Hi, Hi, I'm John Deo.</strong></h1>
          <p>A freelance Web developer from London. I convert custom web designs to bootstrap templates.</p>
          <p>I make YouTube videos and write Blog.</p>
          <Button variant="primary" className="mt-3">I'M AVAILABLE</Button>
          <div className="mt-4">
            <a href="rfg" className="text-dark mx-2" style={{fontSize:"25px"}}><i className="fab fa-facebook"></i></a>
            <a href="gfgfg" className="text-dark mx-2" style={{fontSize:"25px"}}><i className="fab fa-twitter"></i></a>
            <a href="gfgf" className="text-dark mx-2" style={{fontSize:"25px"}}><i className="fab fa-instagram"></i></a>
            <a href="gfgf" className="text-dark mx-2" style={{fontSize:"25px"}}><i className="fab fa-github"></i></a>
          </div>
        </Col>
        <Col md={4} sm={12}>
          <img src="https://www.dmarge.com/wp-content/uploads/2023/11/Blazer-Jeans-Smart-Casual-Idea-768x960.webp" alt="" width={300} />
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
