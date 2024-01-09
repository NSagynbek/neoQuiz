import "./filter.css"
import { useState,useEffect } from "react";
import { getArticles } from "../../api";
import { articlesTest } from "../../utils";
import {useDispatch} from "react-redux"
import {setFilteredArticles} from "../../redux"

function Filter (){
    const dispatch = useDispatch();
    const [filteredArticles,setFilteredArticles] =useState([]);
    const [categories,setCategories] = useState([]);
    console.log(categories)
    console.log(filteredArticles)

    // useEffect(()=>{
    //     const getdata = async ()=>{
    //         const response = await getArticles();
    //         setArticles(response);
    //     }
    //     getdata();
    // },[]);


    const handleCheckBox = (e)=>{
      const {name,checked} = e.target;
      if(checked){
        setCategories(prev => [...prev,name])
      }else{
        setCategories(prev=>prev.filter(category => category !==name));
      }

    }

    // useEffect(()=>{
    //     setFilteredArticles((prev)=>{
    //         return articlesTest.filter(article => categories.includes(article.category));
    //     })
    // console.log("use effet run")
    // },[categories])

    useEffect(() => {
        const filteredData = articlesTest.filter((article) => categories.includes(article.category));
        dispatch(setFilteredArticles(filteredData));
      }, [categories, dispatch]);

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
                <label htmlFor="art">
                    <input 
                    type="checkbox" 
                    id="art" 
                    name="art"
                    onChange={handleCheckBox}
                    checked={categories.includes("art")}
                    />
                    Искусство
                </label>
                <label htmlFor="music">
                    <input 
                    type="checkbox" 
                    id="music" 
                    name="music"
                    onChange={handleCheckBox}
                    checked={categories.includes("music")}
                    />
                    Музыка
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
            className="filter-container__btn"
            type="submit"
            >Применить</button>
            
        </div>
    )
}

export default Filter;