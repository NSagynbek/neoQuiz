import "./allArticles.css"
import { IconButton, InputAdornment } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Filter from "../filter/Filter"
import HorizontalArticles from "../horizontalArticles/HorizontalArticles";
import {NavLink} from "react-router-dom"
import {useState,useEffect} from "react";
import Pagination from "../pagination/Pagination"
import { getArticles } from "../../api";

function AllArticles (){

  const [filter,setFilter] = useState(false);
  const [articles,setArticles] = useState([]);
console.log(articles)
  
  useEffect(()=>{
    const getData = async ()=>{
      try{
        const res = await getArticles();
        setArticles(res)
        console.log(res);
      }catch(error){
        console.log(error)
      }
      
    }

    getData()
  },[]);


  function handleClick(){
    setFilter(!filter);
  }

    return (
        <div className="all-articles">
            <div  className="all-articles__header" >
                <div className="all-articles__btn">      
                <NavLink to="/">         
                  <InputAdornment position="end">
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
                    position="end" 
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

               {articles&&articles.results&&articles.results.length>0?(

                articles.results.map((el,index)=>(
                  <HorizontalArticles key={index} article={el}/>
                ))

               ):(
                <></>
               )}
             </div>
            
        </div>
    )
}

export default AllArticles;