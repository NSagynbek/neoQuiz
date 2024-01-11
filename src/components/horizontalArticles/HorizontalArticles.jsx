import "./horizontalArticles.css"
import chehov from "../../assets/chehov.png"
import { generateRandomColor,colors } from "../../utils";
import {NavLink} from "react-router-dom"

function HorizontalArticles ({article}){
    return (
        <NavLink to={`/details-horizontal/${article.id}`} className="details-navLink">
          <div className="horizontalArticle" style={{background:generateRandomColor(colors)}}>
              <div className="article-text">
                  <p className="article-text__title">{article.title}</p>
                  <div>
                    <span>#{article.category.name}</span> <span>&#9900;</span> <span>{article.time_to_read} минут</span>
                  </div>
              </div>
              <div className="article-image-container">
                  <img className="article-image" src={article.article_cover} alt={chehov} />
              </div>

          </div>
        </NavLink>
    )
}

export default HorizontalArticles;