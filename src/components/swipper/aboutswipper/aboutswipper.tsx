
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './aboutswipper.css';
import { EffectCoverflow, Pagination, } from 'swiper/modules';
import donut from "../../../assets/donut.png"


export default function SwipperAbout() {
  return (
    <div  className='about'>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className='img-fluid' src={donut} />
        </SwiperSlide>
        <SwiperSlide>
          <img className='img-fluid' src={donut}  />
        </SwiperSlide>
        <SwiperSlide>
          <img className='img-fluid' src={donut}  />
        </SwiperSlide>
        <SwiperSlide>
          <img className='img-fluid' src={donut}  />
        </SwiperSlide>
        <SwiperSlide>
          <img className='img-fluid' src={donut}  />
        </SwiperSlide>
        <SwiperSlide>
          <img className='img-fluid' src={donut}  />
        </SwiperSlide>
        <SwiperSlide>
          <img className='img-fluid' src={donut} />
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
}