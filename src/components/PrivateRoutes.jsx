import { Outlet,Navigate } from "react-router-dom"
import { useSelector } from "react-redux"

function PrivateRoutes (){
    const isAllowed = useSelector(state => state.isAllowed);
    return (
        <div>
            {isAllowed?<Outlet/>:<Navigate to="/"/>}
        </div>
    )
}

export default PrivateRoutes