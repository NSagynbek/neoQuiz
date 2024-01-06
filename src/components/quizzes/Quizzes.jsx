import "./quizzes.css"
import quizImage from "../../assets/historic.png"
import { generateRandomColor,colors } from "../../utils";

function Quizzes (){
    return (
        <div className="quizzes" style={{background:generateRandomColor(colors)}}>
            <div className="quizzess__image-container">
                <img className="quizzess__image" src={quizImage} alt={quizImage} />
            </div>
            <p className="quizzess__title">История</p>
            <p className="quizzess__questions">10 вопросов</p>

        </div>
    )
}

export default Quizzes;