import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
import Profile from "../../assets/img/profile/profile.webp";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-6 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-between" alt="profile" src={Profile} thumbnail fluid />
              </Row>
            </Col>
            <Col xs={14} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                Hi there! I am <strong>&nbsp;Garland Rajasalan</strong>
                <br />I am a passionate Junior Software Developer based in Helsinki, Finland. Currently unemployed and actively seeking new job opportunities. I am skilled in JAVASCRIPT, REACT, ANGULAR HTML/CSS, and BOOTSTRAP. 
                <br />
                <br/>
                I hold a bachelor’s degree in Computer Science from Anna University and extensive training in coding language from Integrify Training Center in Helsinki. I am a Quick Learner, Hard Working, Efficient Team Player, and combined with a ‘Can Do’ attitude'. I enjoy being challenged and engaged with projects that require me to work outside my comfort zone. I adapt easily to different teams and working environments.
                <br />
               <br/>
                  I love to learn about new technologies, understand how it is used in real-time in order to use them to build better and scalable products. I also like to help and teach people from what I have learned in my career journey of becoming a professional programmer.
                <br />
                <br/>
                If an opportunity is given to me to be part of your team, you will notice that I will not let you down under any circumstances. I am confident that I will be an asset in your organization and in your team who will create value.
                 <br />
                 <br/>
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://drive.google.com/file/d/1a1x_S_QYDQEBVVh6pyJDrtX9bWkNiLQL/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/Rajasalan" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/garlandrajasalan/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
