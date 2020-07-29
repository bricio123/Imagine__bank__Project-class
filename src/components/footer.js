import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Mag from "../assets/MAGbank.svg";
import Google from "../assets/google-play.svg";
import Apple from "../assets/app-store.svg";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import youtube from "../assets/youtube.png";
import './footer.scss';


import "./IconText";

const Footer = () => (
  <Container className='my-5 border ' >
    
    <Row className="d-flex align-items-center" sm={12} xm={4}>
      <Col className='d-flex justify-content-center align-items-center'>
        <Image src={Mag} />
      </Col>
    
      <Row>
        <Col  className="d-flex justify-content-center align-items-center my-5 "  lg={3} >
          <Image src={Google} className='mx-3'/>
          <Image src={Apple} />
        </Col>
        <Col className="d-flex justify-content-center align-items-center mx-5 " >
                <Image src={facebook}  className='mx-3'/>
                <Image src={twitter} />
                <Image src={youtube} className='mx-3'/>
                
              </Col>
      </Row>
    </Row>

  </Container>
);
export default Footer;
