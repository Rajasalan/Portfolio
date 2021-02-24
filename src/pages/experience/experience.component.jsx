import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <h1>Experience</h1>
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Junior Software Developer</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Front End Developer </strong>
                    <br />
                    <strong>Technology:</strong> JavaScript, React, Gatsby, Angular, HTML, CSS, Bootstrap, .NET, SQL
                    <br />
                    <strong>Employement Status:</strong> Currently seeking Opportunities

                    <br/>
                    <br/>
                    <strong><p className="text-left"> EXPERIENCE SUMMARY </p></strong>
                    <ul className="text-left">
                      <li><strong>Developed &amp; enhanced</strong> web application.</li>
                      <li><strong>Handled</strong>  maintenance support for web applications.
                      </li>
                      <li><strong>Performed</strong> UI testing for websites.</li>
                      <li><strong>Managed</strong> project documentation.
 
                      </li>
                     
                      {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}

                    </ul>
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;