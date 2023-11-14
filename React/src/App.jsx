import './App.css'
import {Routes,Route} from "react-router-dom";
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
const user = {
  name:'Piyush',
  Age:19,
  imgSrc:'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699747200&semt=sph',
  size:200
};

const App = ()=> {
  return (
    <Routes>
    <Route path="/" Component={()=>{
      return (
      <p>Home works</p>)
    }} />
    <Route path="/about" Component={About}/>
    <Route path="/contact" Component={Contact}/>
    </Routes>
  )
}

export default App
