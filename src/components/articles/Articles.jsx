import "./articles.css"
import napaleon from "../../assets/napaleon.png"
import { generateRandomColor,colors } from "../../utils";
import { NavLink } from "react-router-dom";

function Articles ({el}){
    return (
        <NavLink
        className="article-navLink"
        to={`/details/${el.id}`}
        >
          <div className="articles" style={{background:generateRandomColor(colors)}}>
              <p className="articles__title">{el.title}</p>
              <div className="articles__group">
                  <p className="articles__category">{el.category.name}</p>
                  <div className="articles__image-container">
                    <img className="articles__image" src={el.article_cover} alt={napaleon} />
                  </div>
              </div>

          </div>
        </NavLink>
    )
}

export default Articles;