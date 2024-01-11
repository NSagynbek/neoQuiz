import "./notFound.css";
import notFound from "../../assets/notfound.png"
function NotFound (){
    return (
        <div className="notFound">
            <div className="notFound__content">
                <div>
                  <img src={notFound} alt="not-found" />
                </div>
                <p className="notFound__text">К сожалению, по результам поиска ничего не найдено</p>
                
            </div>

        </div>

    )
}
export default NotFound;