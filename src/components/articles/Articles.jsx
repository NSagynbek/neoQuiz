import "./articles.css"
import napaleon from "../../assets/napaleon.png"

function Articles (){
    return (
        <div className="articles">
            <p className="articles__title">Жизнь и правление Наполеона Бонапарта</p>
            <div className="articles__group">
                <p className="articles__category">#История</p>
                <div className="articles__image-container">
                  <img className="articles__image" src={napaleon} alt={napaleon} />
                </div>
            </div>

        </div>
    )
}

export default Articles;