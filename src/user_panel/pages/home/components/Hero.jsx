import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Scrollbar, A11y } from 'swiper/modules';
import SlideContent from './SlideContent';

const HeroComponent = () => {
  return (
    <div className="main-hero-container">
      <Swiper
        // install Swiper modules
        modules={[Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
      >
        <SwiperSlide>
          <SlideContent />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroComponent;
