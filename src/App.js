import React from "react";
import MyNavbar from "./components/my-navbar/my-navbar.component";
import MyCarousal from "./components/my-carousal/my-carousal.component";
import TitleMessage from "./components/title-message/title-message.component";
import About from "./pages/about/about.component";
import Fade from "react-reveal/Fade";
import Container from "react-bootstrap/Container";
import Experience from "./pages/experience/experience.component";
import { Parallax} from 'react-parallax';
import "./App.css";
import Slide from "react-reveal/Slide";
import Skills from "./pages/skills/skills.component";
import TimeLine from "./components/projects-timeline/projects-timeline.component";
import FooterPanel from "./components/footer/footer.component";
import ContactForm from "./pages/contact-form/contact-form.component";
/* import Particles from "react-particles-js";
import { particlesOptions } from "./particlesOptions"; */

function App() {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyCarousal />
      <TitleMessage />
      <MyNavbar />
       {/*  <Particles
        className="particles particles-box"
        params={particlesOptions}
      />  */}

      <div>
        <Parallax
           blur={{ min: -15, max: 15 }}
          bgImage="./assets/img/carousal/slide1.webp"
          bgImageAlt="Hello"
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Skills />
        </Slide>
      </Container>
      <div>
      <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />

            <Experience />
          </Fade>
        </Container>
      </div>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <TimeLine />
        </Slide>
      </Container>
      <Container className="container-box rounded">
        <Fade duration={500}>
          <hr />
          <ContactForm />
        </Fade>
      </Container>

      <hr />
      <FooterPanel />
    </div>
  );
}

export default App;
