import 'swiper/css';
import 'swiper/css/effect-cards';
import "./swiper.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';

function QuizeSwipercomponent ({quizzes,component:Component}){
 
    return (

      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >       
          {quizzes&&quizzes.results?(
            quizzes.results.map((el,index)=>(
              <SwiperSlide>
                <Component key={index} el={el}/>
              </SwiperSlide>
            ))
          ):(
            null
          )}
         
      </Swiper>
    )    
}

export default QuizeSwipercomponent;