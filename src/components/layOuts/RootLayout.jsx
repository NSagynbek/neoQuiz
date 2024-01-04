import { Outlet } from "react-router-dom";
import  "./rootLayout.css"

function RootLayout(){
    return (
        <div className="root-layout">         
          <p className="quizum">Квизум</p>  
          <Outlet/>
        </div>
    )
}

export default RootLayout;