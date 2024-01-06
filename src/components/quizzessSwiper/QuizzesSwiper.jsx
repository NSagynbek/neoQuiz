import "./quizzesSwiper.css";
import aristotelHead from "../../assets/aristotelHead.png"
import { generateRandomColor,generateRandomBoxShadow,colors } from "../../utils";

function QuizzesSwiper (){
    return (
        <div className="quizzes-swiper">
            <div className="quizzes-swiper__card" 
              style={{
                background:generateRandomColor(colors),
                boxShadow: generateRandomBoxShadow()
            }}
            >
              <div className="quizzes-image-container">
                 <img className="quizzes-image-container__image" src={aristotelHead} alt={aristotelHead} />
              </div>

              <div className="quiz-category">
                 <p className="quiz-category__title">Философия</p>
                 <p className="quiz-category__questions">10 вопросов</p>
              </div>
            </div>

            <button className="quizzes-swiper__btn">Начать квиз</button>

        </div>
    )
}

export default QuizzesSwiper;