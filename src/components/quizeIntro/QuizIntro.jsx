import  "./quizIntro.css";
import { IconButton, InputAdornment } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import historic from "../../assets/historic.png"
import { useParams,NavLink} from "react-router-dom";
import { useState,useEffect } from "react";
import {quizWelcomPage} from "../../api";

function QuizIntro(){

  const {id} = useParams();
  const [quiz, setQuiz] = useState(null);
  
  
  useEffect(()=>{
    const getQuizWelcom = async ()=>{
      try{
        const res = await quizWelcomPage(id);
        setQuiz(res);
        console.log(res)
      }catch(error){
        console.log(error)
      }
      
    }
    getQuizWelcom();
  },[]);


    return(
        <div className="quiz-intro">
            <div className="quiz-intro__back-btn" >                
                <NavLink to="/quizzes">         
                  <InputAdornment position="end">
                    <IconButton>
                      <KeyboardBackspaceIcon/>
                    </IconButton> 
                  </InputAdornment>
                </NavLink>  
            </div>

            <div className="quiz-intro__content">

              <p className="quiz-intro__title">{quiz?quiz.title:""}</p>
              <div className="quiz-intro__image-container">
                <img 
                  className="quiz-intro__img" 
                  src={quiz?quiz.quiz_cover:""} 
                  alt="quiz image" 
                  />
              </div>

              <p className="quiz-intro__text">
               {quiz?quiz.welcome_page:""}
              </p>
              <NavLink 
                to={`/quiz-questions/${id}`}
                className="quiz-intro__btn"
              >             
                  Начать квиз                
              </NavLink>

            </div>

            


        </div>
    )
}

export default QuizIntro;