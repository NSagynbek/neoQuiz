import "./filter.css"

function Filter (){
    return (
        <div className="filter-container">
            <div className="filter-header">
                <p className="filter-header__text">Фильтр</p>
                <button className="filter-header__btn">Сбросить все</button>
            </div>
            <div className="filter-categories">
                <label htmlFor="history" >
                    <input type="checkbox" id="history" />
                    История
                </label>
                <label htmlFor="literature">
                    <input type="checkbox" id="literature" />
                    Литература
                </label>
                <label htmlFor="filosofy">
                    <input type="checkbox" id="filosofy" />
                    Философия
                </label>
                <label htmlFor="psychology">
                    <input type="checkbox" id="psychology" />
                    Психология
                </label>
                <label htmlFor="art">
                    <input type="checkbox" id="art" />
                    Искусство
                </label>
                <label htmlFor="music">
                    <input type="checkbox" id="music" />
                    Музыка
                </label>
                <label htmlFor="movie">
                    <input type="checkbox" id="movie" />
                    Кино
                </label>
            </div>

            <button className="filter-container__btn">Применить</button>

        </div>
    )
}

export default Filter;