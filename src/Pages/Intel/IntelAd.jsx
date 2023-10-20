import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
const IntelAd = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch("https://brand-shop-server-ca8glg8nh-shakib2123.vercel.app/intelad")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {images.map((image) => (
          <SwiperSlide key={image._id}>
            <div>
              <img className="h-[60vh] w-full" src={image.photo} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default IntelAd;
