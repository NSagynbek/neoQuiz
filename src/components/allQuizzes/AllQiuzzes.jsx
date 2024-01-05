import "./allQuizzes.css";
import { IconButton, InputAdornment } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { NavLink } from "react-router-dom";

function AllQuizzes (){
    return (
        <div className="all-quizzes-container">
             <div className="all-quizzes__btn">      
               <NavLink to="/">         
                  <InputAdornment>
                    <IconButton>
                      <KeyboardBackspaceIcon/>
                    </IconButton> 
                  </InputAdornment>
               </NavLink>  
                   
              <p className="all-articles__title">Все квизы</p>
            </div>

            <div className="all-quizzes-content">
                
            </div>

        </div>
    )
}

export default AllQuizzes;