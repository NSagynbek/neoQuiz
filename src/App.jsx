import { Provider } from "react-redux"
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import store from "./redux/store"
import RootLayout from "./components/layOuts/RootLayout"
import PrivateRoutes from "./components/PrivateRoutes"
import Home from "./components/home/Home"
import AllArticles from "./components/allArticles/AllArticles"


function App() {
  

  return (
   <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout/>}>
          <Route element={<PrivateRoutes/>}>
            //Private routes is empty for now
          </Route>
          <Route path="/" element={<Home/>}/>
          <Route path="/articles" element={<AllArticles/>}/>

        </Route>



      </Routes>
    </Router>
   </Provider>
      
  )
}

export default App
