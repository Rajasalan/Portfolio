import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Slide1 from "../../assets/img/salanphoto/1.jpg";
import Slide2 from "../../assets/img/salanphoto/2.jpg";
import Slide3 from "../../assets/img/salanphoto/3.jpg";
import Slide4 from "../../assets/img/salanphoto/4.jpg";
import Slide5 from "../../assets/img/salanphoto/5.jpg";
import Slide6 from "../../assets/img/salanphoto/6.jpg";
import Slide7 from "../../assets/img/salanphoto/7.jpg";
import Slide8 from "../../assets/img/salanphoto/8.jpg";
import Slide9 from "../../assets/img/salanphoto/9.jpg";

import ScrollDown from "../scroll-down/scroll-down.component";
import "./my-carousal.styles.css";

const MyCarousal = () => {
  return (
    <div id="home">
      <Carousel controls={false} indicators interval={2500} pause={false}>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slide1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slide2} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slide3} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slide4} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slide5} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slide6} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slide7} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slide8} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100 custom-img" src={Slide9} alt="Third slide" />
        </Carousel.Item>
       

      </Carousel>
      <ScrollDown/>
    </div>
  );
};

export default MyCarousal;