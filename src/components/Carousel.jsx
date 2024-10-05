import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';

import { Navigation } from 'swiper/modules';

 const Carousel =() => {
  return (
    <div className='swiper'>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img src ='https://stylo.pk/cdn/shop/files/1920x600_2_381663d1-f18e-4d21-be7b-c2c11593a6b1.jpg?v=1719832680' /></SwiperSlide>
        <SwiperSlide><img src = 'https://stylo.pk/cdn/shop/files/1920x600-Kids.jpg?v=1719832680' /></SwiperSlide>
        <SwiperSlide><img src ='https://stylo.pk/cdn/shop/files/1920x600_2_381663d1-f18e-4d21-be7b-c2c11593a6b1.jpg?v=1719832680' /></SwiperSlide>
        <SwiperSlide><img src ='https://stylo.pk/cdn/shop/files/1920x600_2_ac2e1327-a856-4388-bdbf-b8bcc99b7238.jpg?v=1724069146&width=1920' /></SwiperSlide>
        {/* <SwiperSlide><img src = 'https://stylo.pk/cdn/shop/files/1920x600-Kids.jpg?v=1719832680' /></SwiperSlide> */}
        
      </Swiper>
    </div>
  );
}
export default Carousel;