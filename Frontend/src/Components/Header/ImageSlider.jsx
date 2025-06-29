import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import "./style.css"
import { Navigation } from 'swiper/modules';
import "../../../public/images/slide2.jpg"
function ImageSlider() {
  return (
    <div className='header'> <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
       <SwiperSlide><img src=" /public/images/slide2.jpg" alt="" className='image1'/></SwiperSlide>
        <SwiperSlide><img src="https://images.oxu.az/2022/12/10/18/35/25/b5d8cf5b-0e64-4db6-9238-e6e34f998406/FotoJet%20%281%29%3A1200.jpg" alt="" /></SwiperSlide>
       <SwiperSlide><img src="https://www.azernews.az/media/2021/08/13/jrfegfe9.png" alt="" /></SwiperSlide>
      </Swiper></div>
  )
}

export default ImageSlider