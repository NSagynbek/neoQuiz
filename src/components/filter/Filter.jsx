import "./filter.css"
import { useState,useEffect } from "react";
import { getArticles } from "../../api";
import {useDispatch} from "react-redux"
import {setFilteredArticles} from "../../redux"

function Filter ({getByCategories,handleClick}){
     
    const [categories,setCategories] = useState([]);
    const [isActive,setIsActive] = useState(false);
    
       
    const categoryVals = {};


    categories.forEach((el) => {
      if (el === "history") {
        categoryVals[el] = "2";
      } 
      else if(el === "philosophy"){
        categoryVals[el] = "1";
      }
  
      else if(el === "psychology"){
        categoryVals[el] = "6";
      }
  
      else if(el === "movie"){
        categoryVals[el] = "8";
      }
  
      else if(el === "literature"){
        categoryVals[el] = "5";
      }
    });
  
    
    const handleCheckBox = (e)=>{
      const {name,checked} = e.target;
      if(checked){
        setCategories(prev => [...prev,name])
        setIsActive(true)
      }else{
        setCategories(prev=>prev.filter(category => category !==name));
      }

    }

    const sendCategories = ()=>{
      getByCategories(categoryVals);
      handleClick();
    }
    

    return (
        <div className="filter-container">
          
            <div className="filter-header">
                <p className="filter-header__text">Фильтр</p>
                
                <button className="filter-header__btn">Сбросить все</button>
            </div>
            <div className="filter-categories">
                <label htmlFor="history" >
                    <input 
                    type="checkbox" 
                    id="history" 
                    name="history"
                    onChange={handleCheckBox}
                    checked={categories.includes("history")}
                    />
                    История
                </label>
                <label htmlFor="literature">
                    <input 
                    type="checkbox" 
                    id="literature" 
                    name="literature"
                    onChange={handleCheckBox}
                    checked={categories.includes("literature")}
                    />
                    Литература
                </label>
                <label htmlFor="filosofy">
                    <input 
                    type="checkbox" 
                    id="philosophy" 
                    name="philosophy"
                    onChange={handleCheckBox}
                    checked={categories.includes("philosophy")}
                    />
                    Философия
                </label>
                <label htmlFor="psychology">
                    <input 
                    type="checkbox" 
                    id="psychology" 
                    name="psychology"
                    onChange={handleCheckBox}
                    checked={categories.includes("psychology")}
                    />
                    Психология
                </label>
               
                
                <label htmlFor="movie">
                    <input 
                    type="checkbox" 
                    id="movie" 
                    name="movie"
                    onChange={handleCheckBox}
                    checked={categories.includes("movie")}
                    />
                    Кино
                </label>
            </div>

            <button 
              className={isActive?
               ("filter-container__btn-active")
              :("filter-container__btn")}
              onClick={sendCategories}
            >Применить</button>
            
        </div>
    )
}

export default Filter;