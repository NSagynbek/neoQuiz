import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import "./swiper.css"


function QuizeSwipercomponent ({content:Content}){
    return (
        <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide><Content/></SwiperSlide>
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

export default QuizeSwipercomponent;