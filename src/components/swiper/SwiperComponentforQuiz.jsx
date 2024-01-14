import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import {getQuizzes } from '../../api';
import { useState,useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function SwiperComponent ({content:Content}){

  const[quizzes,setQuizzes] = useState([]);

  useEffect(()=>{
    const getQuizzesData = async ()=>{
      try{
        const response = await getQuizzes();
        setQuizzes(response);
      }catch(error){
        console.log(error);
      }
    }
    getQuizzesData();
  },[]);
  


    return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={0}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
    >
      
      {quizzes && quizzes.results && quizzes.results.length > 0 ? (
      quizzes.results.map((el, index) => (
      <SwiperSlide key={index}>
        <Content el={el} />
      </SwiperSlide>
      ))
    ) : (
      <></> 
    )}
               
    </Swiper>

    )    
}

export default SwiperComponent