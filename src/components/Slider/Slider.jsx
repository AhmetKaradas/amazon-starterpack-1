import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "./Slider.css";

// import swipper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { SliderProducts } from "../../data/products";

const Slider = () => {
  return (
    <div className="s-container">
      <Swiper
      breakpoints={{
        640:{
          slidesPerView:3
        },
        0:{
          slidesPerView:1
        }
      }}
        modules={[Pagination, Navigation]}
        navigation={true}
        className="mySwiper"
        loopFillGroupWithBlank={true}
        slidesPerView={3}
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true}
      >
        {SliderProducts.map((slide, i) => (
          <SwiperSlide>
            <div className="left-s">
              <div className="name">
                <span>{slide.name}</span>
                <span>{slide.detail}</span>
              </div>

              <span>{slide.price}$</span>
              <div>Shop now</div>
            </div>

            <img src={slide.img} alt="products" className="img-p"></img>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
