import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { getArticles} from '../../api';
import { useState,useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function SwiperComponent ({content:Content}){

  const[articles,setArticles] = useState([]);
 
  useEffect(()=>{
    const getArticlesData = async ()=>{
      try{
        const res = await getArticles();
        setArticles(res);
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