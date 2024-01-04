import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function SwiperComponent ({content:Content}){
    return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={0}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><Content/></SwiperSlide>
      <SwiperSlide><Content/></SwiperSlide>
      <SwiperSlide><Content/></SwiperSlide>
      <SwiperSlide><Content/></SwiperSlide>
      <SwiperSlide><Content/></SwiperSlide>
      <SwiperSlide><Content/></SwiperSlide>
      <SwiperSlide><Content/></SwiperSlide>
      <SwiperSlide><Content/></SwiperSlide>
           
    </Swiper>

    )    
}

export default SwiperComponent