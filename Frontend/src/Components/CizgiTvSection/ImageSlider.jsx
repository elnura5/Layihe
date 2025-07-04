import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import './style.css';

function ImageSlider() {
  return (
    <div className="header">
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/images/slide2.jpg" alt="Slayd 1" className="image1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/slide1.jpg" alt="Slayd 2" className="image1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/slide3.jpg" alt="Slayd 3" className="image1" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ImageSlider;
