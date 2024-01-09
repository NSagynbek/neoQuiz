import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { getArticles,getQuizzes } from '../../api';
import { useState,useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function SwiperComponent ({content:Content}){

  const[articles,setArticles] = useState([]);
  const[quizzes,setQuizzes] = useState([]);
console.log(articles)
  useEffect(()=>{
    const getArticlesData = async ()=>{
      try{
        const res = await getArticles();
        setArticles(res);
        const response = await getQuizzes();
        console.log(response)
        setQuizzes(response);
      }catch(error){
        console.log(error);
      }

    }
    getArticlesData();
  },[]);
  


    return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={0}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
    >
      
    {articles && articles.results && articles.results.length > 0 ? (
      articles.results.map((el, index) => (
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