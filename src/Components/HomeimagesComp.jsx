// External Module...................
import Carousel from "react-bootstrap/Carousel";
// Import Local Module Images...................
import logo1 from "../../public/images/AI_H1.webp";
import logo2 from "../../public/images/GH_H1.jpg";
import logo3 from "../../public/images/IN_H1.png";
import logo4 from "../../public/images/AS_H1.webp";

function HomeImages() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img className="d-block w-100" src={logo1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={logo2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={logo3} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={logo4} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeImages;
