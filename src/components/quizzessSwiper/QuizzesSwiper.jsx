import "./quizzesSwiper.css";
import aristotelHead from "../../assets/aristotelHead.png"
import { generateRandomColor,generateRandomBoxShadow,colors } from "../../utils";
import { NavLink } from "react-router-dom";

function QuizzesSwiper ({el}){
    return (
        <div className="quizzes-swiper">
          <NavLink 
            to={`/quiz-intro/${el.id}`}
            className="quiz-welcome-link"
            >
            <div className="quizzes-swiper__card" 
              style={{
                background:generateRandomColor(colors),
                boxShadow: generateRandomBoxShadow()
            }}
            >
              <div className="quizzes-image-container">
                 <img 
                   className="quizzes-image-container__image" 
                   src={el.quiz_cover} 
                   alt={aristotelHead} 
                   />
              </div>

              <div className="quiz-category">
                 <p className="quiz-category__title">{el.title}</p>
                 <p className="quiz-category__questions">{el.total_questions} вопросов</p>
              </div>
            </div>
          </NavLink> 
          
            <NavLink 
              className="quizzes-swiper__btn"
              to={`/quiz-questions/${el.id}`}
            >
              Начать квиз
            </NavLink>

        </div>
    )
}

export default QuizzesSwiper;