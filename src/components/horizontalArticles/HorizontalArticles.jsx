import "./horizontalArticles.css"
import chehov from "../../assets/chehov.png"

function HorizontalArticles (){
    return (
        <div className="horizontalArticle">
            <div className="article-text">
                <p className="article-text__title">Почему Чехов не так прост?</p>
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