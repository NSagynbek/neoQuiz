import "./results.css";
import confettileft from "../../assets/confettileft.png"
import confettiright from "../../assets/confettiright.png"
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";

function Results ({id,score,totalQuestions}){
    return (
        <div className="results">
            <div className="results-content">
                <div className="confetti">
                  <img src={confettiright} alt="confetti"/> 
                  <p className="results-content__message">Поздравляем!</p>
                  <img src={confettileft} alt="confetti"/> 

                </div>
                <div className="results-content__results">
                    <p className="results-content__of">Вы ответили правильно на {score}</p>
                    <p className="results-content__qty">вопросов из {totalQuestions}</p>
                </div>
                <p className="results-content__text">
                  У вас всегда есть возможность пройти квиз заново, 
                  чтобы еще раз проверить свои знания!
                </p>
                
                <form>
                  <button 
                    className="results-content__btn"
                    type="submit"
                  >                  
                    Вернуться
                  </button>
                </form>
            </div>

        </div>
    )
}

export default Results;