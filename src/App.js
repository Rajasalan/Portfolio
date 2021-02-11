import React from "react";
import MyNavbar from "./components/my-navbar/my-navbar.component";
import MyCarousal from "./components/my-carousal/my-carousal.component";
import TitleMessage from "./components/title-message/title-message.component";
import About from "./pages/about/about.component";
import Fade from "react-reveal/Fade";
import Container from "react-bootstrap/Container";
import { Parallax} from 'react-parallax';
import "./App.css";

function App() {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyCarousal />
      <TitleMessage />
      <MyNavbar />


      <div>
        <Parallax
           blur={{ min: -15, max: 15 }}
          bgImage={require("./assets/img/parallex/images.jpg")}
          bgImageAlt=""
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
    </div>
  );
}

export default App;
