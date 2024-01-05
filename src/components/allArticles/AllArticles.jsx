import "./allArticles.css"
import { IconButton, InputAdornment } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Filter from "../filter/Filter"
import HorizontalArticles from "../horizontalArticles/HorizontalArticles";
import {NavLink} from "react-router-dom"
import { useState } from "react";

function AllArticles (){

  const [filter,setFilter] = useState(false);

  function handleClick(){
    setFilter(!filter);
  }

    return (
        <div className="all-articles">
            <div  className="all-articles__header" >
                <div className="all-articles__btn">      
                <NavLink to="/">         
                  <InputAdornment>
                    <IconButton>
                      <KeyboardBackspaceIcon/>
                    </IconButton> 
                  </InputAdornment>
                </NavLink>  
                   
                  <p className="all-articles__title">Все статьи</p>
                </div>

                <div className="all-articles__search">
                    <input 
                    type="text" 
                    placeholder="Поиск статей"
                    />                   
                    <InputAdornment 
                    onClick={handleClick}
                    >
                      <IconButton>
                        <FilterAltIcon/>
                      </IconButton> 
                    </InputAdornment>
                    
                </div> 
            </div>
             
             <div className="all-articles-content">
             {filter?<Filter/>:null}
             <HorizontalArticles/>
             <HorizontalArticles/>
             <HorizontalArticles/>
             <HorizontalArticles/>
             <HorizontalArticles/>
             <HorizontalArticles/>
             </div>
            
        </div>
    )
}

export default AllArticles;