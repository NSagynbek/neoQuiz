import Articles from '../articles/Articles';
import Quizzes from '../quizzes/Quizzes';
import SwiperComponent from '../swiper/SwiperComponent';
import SwiperComponentforQuiz from "../swiper/SwiperComponentforQuiz";
import { IconButton, InputAdornment } from '@mui/material';
import ForwardIcon from '@mui/icons-material/Forward';
import {NavLink} from "react-router-dom"
import "./home.css"



function Home() {
  return (
    <div className="home">
      <div className="article-section-container">
        <div className='article-header-container'>
          <p className="home__articles">Статьи</p>  
          <NavLink to="/articles">
            <InputAdornment className='article-header-btn' position='end'>
              <IconButton>
                <ForwardIcon/>
              </IconButton>
            </InputAdornment> 
          </NavLink>  
        </div>    
        <SwiperComponent content={Articles}/>
      </div>

      <div className="quiz-section-container">
      <div className='article-header-container'>
        <p className="home__articles">Квизы</p>   
        <NavLink to="/quizzes">
          <InputAdornment className='article-header-btn' position='end'>
            <IconButton>
              <ForwardIcon/>
            </IconButton>
          </InputAdornment> 
        </NavLink>  
        </div>        
        <SwiperComponentforQuiz content={Quizzes}/>
      </div>
    </div>
  );
}

export default Home;
