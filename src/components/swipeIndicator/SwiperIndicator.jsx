import "./swipeIndicator.css";
import SwipeIcon from '@mui/icons-material/Swipe';
import { IconButton, InputAdornment } from '@mui/material';

function SwiperIndicator (){
    return (
        <div className="swipe-indicator-container">
            <InputAdornment 
              position="end"
              className="swipe-indicator-btn"
              >
              <IconButton >
                <SwipeIcon fontSize="large" style={{color:"white"}}/>
              </IconButton>
            </InputAdornment>
        </div>
    )
}

export default SwiperIndicator;