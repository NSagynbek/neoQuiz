import { Provider } from "react-redux"
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import store from "./redux/store"
import RootLayout from "./components/layOuts/RootLayout"
import PrivateRoutes from "./components/PrivateRoutes"
import Home from "./components/home/Home"
import AllArticles from "./components/allArticles/AllArticles"
import AllQuizzes from "./components/allQuizzes/AllQiuzzes"
import ArticleDetails from "./components/articleDetails/ArticleDetails"
import QuizIntro from "./components/quizeIntro/QuizIntro"
import QuizQuestions from "./components/quizQuestions/QuizQuestions"
import Results from "./components/results/Results"
import NotFound from "./components/notFound/NotFound"
import ArticleDetailsforHorizontal from "./components/articleDetails/ArticleDetailsforHorizontal"

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
          <Route path="/quizzes" element={<AllQuizzes/>}/>
          <Route path="/details/:id" element={<ArticleDetails/>}/>
          <Route path="/details-horizontal/:id" element={<ArticleDetailsforHorizontal/>}/>
          <Route path="/quiz-intro/:id" element={<QuizIntro/>}/>
          <Route path="/quiz-questions/:id" element={<QuizQuestions/>}/>
          <Route path="/results" element={<Results/>}/>
          <Route path="/not-found" element={<NotFound/>}/>

        </Route>



      </Routes>
    </Router>
   </Provider>
      
  )
}

export default App
