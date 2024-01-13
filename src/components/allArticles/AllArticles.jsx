import "./allArticles.css"
import { IconButton, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Filter from "../filter/Filter"
import HorizontalArticles from "../horizontalArticles/HorizontalArticles";
import {NavLink} from "react-router-dom"
import {useState,useEffect} from "react";
import { getArticles,searchArticles,articleCategories} from "../../api";
import NotFound from "../notFound/NotFound"
import PaginationRounded from "../muPagination/MuPagination";

function AllArticles (){

  const [filter,setFilter] = useState(false);
  const [articles,setArticles] = useState([]);
  const [search,setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isContent,setIsContent] = useState(false);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [isFiltered,setIsFiltered] = useState(false);
  const [page,setPage]=useState(1);


  useEffect(()=>{
    const getData = async ()=>{
      try{
        const res = await getArticles(page);
        console.log(res)
        setArticles(res)
      }catch(error){
        console.log(error)
      }
      
    }

    getData()
  },[page]);


  const pageControll =(p)=>{
    setPage(p)
  }

  useEffect(()=>{
    if(search === ""){
      setIsContent(false)
    }
  },[search])


  const handleChange = (e)=>{
    setSearch(e.target.value);
  }


  function handleClick(){
    setFilter(!filter);
  }

  const  handleSubmit = async (e) =>{
    e.preventDefault();
    const response = await searchArticles(search);
    setSearchResults(response.results)
    setIsContent(true);
  }
  
  const getByCategories = async (values) => {
    const { history, philosophy, literature, movie, psychology } = values;
  
    const queryParams = [];
  
    if (history !== undefined) {
      queryParams.push(`category=${history}`);
    }
    if (philosophy !== undefined) {
      queryParams.push(`category=${philosophy}`);
    }

    if (psychology !== undefined) {
      queryParams.push(`category=${psychology}`);
    }

    if (literature !== undefined) {
      queryParams.push(`category=${literature}`);
    }

    if (movie !== undefined) {
      queryParams.push(`category=${movie}`);
    }
    
  
    const queryString = queryParams.join('&');
  
    try {
      const response = await articleCategories(queryString);
      setFilteredArticles(response.results)
      setIsFiltered(true);
    } catch (error) {
      console.error(error);
    }
  };
  

  
  const backToAllArtcs = ()=>{
    setIsFiltered(false)
  }

  
    return (
        <div className="all-articles">
            <div  className="all-articles__header" >
                <div className="all-articles__btn">    
                  {isFiltered?(
                    ""
                  ):(
                    <NavLink to="/">         
                      <InputAdornment position="end">
                        <IconButton>
                          <KeyboardBackspaceIcon/>
                        </IconButton> 
                      </InputAdornment>
                    </NavLink>  
                  )}                  
                  <p className="all-articles__title" onClick={backToAllArtcs}>
                    Все статьи
                  </p>
                  
                </div>

                <div className="all-articles__search">
                  <form
                    onSubmit={handleSubmit}
                  >
                    <div className="all-article__search-input">
                      <InputAdornment 
                        position="start" 
                        className="all-article__search-btn">
                        <IconButton>
                          <SearchIcon onClick={handleSubmit}/>
                        </IconButton>
                      </InputAdornment>
                      <input 
                        type="text" 
                        placeholder="Поиск статей"
                        onChange={(e)=>handleChange(e)}
                      />   
                    </div> 
                  </form>                  
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
              
              {filter ? <Filter getByCategories={getByCategories} handleClick={handleClick} /> : null}

               {isFiltered?(
                filteredArticles&&filteredArticles.length>0?(
                  filteredArticles.map((el,index)=>(
                    <HorizontalArticles key={index} article={el}/>
                  ))
                ):(
                  <NotFound/>
                )

               ):(

                isContent ? (
                  searchResults && searchResults.length > 0 ? (
                  searchResults.map((el, index) => (
                    <HorizontalArticles key={index} article={el} />
                 ))
                   ) : (
                    <NotFound />
                   )
                ) : (
                    articles && articles.results && articles.results.length > 0 ? (
                    articles.results.map((el, index) => (
                      <HorizontalArticles key={index} article={el} />
                ))
                   ) : (
                     <></>
                   )
                )

               )}
              
            </div>
            <div className="pagination-rounded">
              {isFiltered?"":<PaginationRounded pageControll={pageControll}/>}
            </div>
            
        </div>
    )
}

export default AllArticles;