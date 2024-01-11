import "./quizzes.css"
import quizImage from "../../assets/historic.png"
import { generateRandomColor,colors } from "../../utils";
import { NavLink } from "react-router-dom";

function Quizzes ({el}){
    return (
        <NavLink 
        to={`/quiz-intro-for-swiper/${el.id}`}
        className="quiz-link"
        >
        <div className="quizzes" style={{background:generateRandomColor(colors)}}>
            <div className="quizzess__image-container">
                <img 
                  className="quizzess__image" 
                  src={el.quiz_cover} 
                  alt="quizzes image" />
            </div>
            <p className="quizzess__title">{el.title}</p>
            <p className="quizzess__questions">{el.total_questions} вопросов</p>

        </div>
        </NavLink>
    )
}

export default Quizzes;