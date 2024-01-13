import "./quizQuestions.css";
import { IconButton, InputAdornment, buttonBaseClasses } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import {NavLink,useParams} from "react-router-dom"
import { useState,useEffect,useRef } from "react";
import {quizQuestions} from "../../api"
import Results from "../results/Results"
import NotFound from "../notFound/NotFound";


function QuizQuestions (){
  
  const {id} = useParams(); 
  const [questions,setQuestions] = useState([]);
  const [next,setNext] = useState(0);
  const [tracker,setTracker] = useState(0);
  const [isCompleted,setIsCompleted] = useState(false);
  const [lock,setLock] = useState(false);
  const [score,setScore] = useState(0);
  const maxTracker = questions.length;
  const checkPoint = questions.length -1;
  const calculatedWidth = (tracker / maxTracker) * 100;


  const optionRefs = Array.from({ length:4}, () => useRef(null));
   
  useEffect(()=>{
    const getQuestions = async ()=>{
      const response = await quizQuestions(id)
      setQuestions(response);
    }
    getQuestions();
  },[]);


  const checkAnswer = (e, isRight) => {
    if (!lock) {
      if (isRight) {
        e.target.classList.add("correct");
        setLock(true);
        setScore((prev)=>prev+1)
        
      } else {
        e.target.classList.add("wrong");
        setLock(true);
        optionRefs.forEach((ref, index) => {
          if (questions[next].answer[index].is_right) {
            ref.current.classList.add("correct");
          }
        });
      }
    }
  };
  
  const resetStyles = () => {
    optionRefs.forEach((ref) => {
      if (ref.current) {
        ref.current.classList.remove("correct", "wrong");
      }
    });
  };

  const nextQuestion = ()=>{
    setNext((prev)=>{
      return prev+1
    })

    setTracker((prev)=>{
      return prev +1
    })


    if(tracker>checkPoint){
      setIsCompleted(!isCompleted);
    }
    resetStyles()
    setLock(false);
  }


    return (
      <div className="quiz-questions-container">
          <div className="quiz-questions__header_navigation">
            <NavLink to="/quizzes">         
              <InputAdornment position="end" className="back-btn">
                <IconButton>
                  <KeyboardBackspaceIcon/>
                </IconButton> 
              </InputAdornment>
            </NavLink> 
          </div>
          {questions.length>0?(
            <div className="quiz-questions">
            <div className="quiz-questions__header">
              <div className="quiz-questions__header_navigation"> 
                {tracker>checkPoint?(
                  <p>100%</p>
                ):(
                  <div className="quiz-questions__tracker">
                    <span>Вопрос</span><span> {tracker+1}</span><span> из {questions?questions[0].quiz.total_questions:""}</span>
                  </div>
                )}
                
              </div>

                <div className="quiz-questions__percentage-container">
                    <div 
                    className="quiz-questions__percentage" 
                    style={{width:`${calculatedWidth}%`}}

                    ></div>
                </div>
            </div>
            {tracker>checkPoint?(
              <Results 
                id={id} 
                score={score} 
                totalQuestions={questions?(
                questions[0].quiz.total_questions):("")}
              />
            ):(
              <div className="quiz-questions__content">
                <p className="quiz-questions__question">{questions?questions[next].title:""}</p>
                <div className="quiz-questions__choice">
                  {questions&&questions[next].answer?(
                    questions[next].answer.map((el,index)=>(
                      <button
                        key={index}
                        onClick={(e) => checkAnswer(e,el.is_right)}
                        ref={optionRefs[index]}
                      >
                        {el.answer_text}
                      </button>
                    )
                  )):(
                    null
                  )}
                                      
                </div>

                <button 
                  className="quiz-questions__submit_btn"
                  onClick={nextQuestion}
                >
                  {isCompleted?"Завершить квиз":"Следующий вопрос"}
                </button>
            </div>

            )}
                        
        </div>

          ):(
            <NotFound />
          )}
        
      </div>  
    )
}

export default QuizQuestions;