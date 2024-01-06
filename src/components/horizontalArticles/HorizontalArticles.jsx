import "./horizontalArticles.css"
import chehov from "../../assets/chehov.png"
import { generateRandomColor,colors } from "../../utils";

function HorizontalArticles ({article}){
    return (
        <div className="horizontalArticle" style={{background:generateRandomColor(colors)}}>
            <div className="article-text">
                <p className="article-text__title">{article.title}</p>
                <div>
                  <span>#История</span> <span>&#9900;</span> <span>15 минут</span>
                </div>
            </div>
            <div className="article-image-container">
                <img className="article-image" src={chehov} alt={chehov} />
            </div>

        </div>
    )
}

export default HorizontalArticles;