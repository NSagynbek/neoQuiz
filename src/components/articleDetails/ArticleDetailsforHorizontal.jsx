import "./articleDetails.css";
import {useParams} from "react-router-dom";
import { useState,useEffect } from "react";
import { getArticlesById } from "../../api";
import { IconButton, InputAdornment } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { NavLink } from "react-router-dom";

function ArticleDetailsforHorizontal (){
    const {id} = useParams();
    const [article,setArticle] = useState(null);
    console.log(article)
    useEffect(()=>{
        const getArticle = async ()=>{
            try{
                const res = await getArticlesById(id);              
                  setArticle(res)                
            }catch(error){
                console.log(error);
            }           
        }
        getArticle();
    },[]);

    if(!article){
      return <p></p>
    }else{
      return (
        <div className="article-details">
          <div className="article-details__btn">
            <NavLink to="/articles">         
              <InputAdornment position="end">
                <IconButton>
                  <KeyboardBackspaceIcon/>
                </IconButton> 
              </InputAdornment>
           </NavLink> 
        </div>

        <div className="article-details__category">
          <p>{article.title}</p>
          <div>
            <span># {article.category.name}</span> 
            <span> &#9900; </span> 
            <span>{article.time_to_read} минут</span>
          </div>
        </div>
        <p className="article-details-article">{article.content}</p>

    </div>
)}}

export default ArticleDetailsforHorizontal;