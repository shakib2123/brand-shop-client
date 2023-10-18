import { useEffect, useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SamsungAd = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/samsungad")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className="max-w-7xl mx-auto">
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image._id}>
            <img className="h-[60vh] w-full" src={image.photo} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SamsungAd;
