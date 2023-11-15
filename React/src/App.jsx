import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Cards from "./components/Cards/Cards";


const names = [
  {

    fName:'Piyush',
    lName:'Verma'
  },
  {
    
    fName:'Kashish',
    lName:'Verma'
  },
  {
    
    fName:'Sahil',
    lName:'Verma'
  },
  {
    fName:'Sagar',
    lName:'Verma'
  }
]
const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        Component={() => {
          return (
            <div className="card-container">
             { names.map((val,i)=>{
              return(
                <Cards key={i} fName={val.fName} lName={val.lName}/>);
              })}
            </div>
          );
        }}
      />
      <Route path="/about" Component={About} />
      <Route path="/contact" Component={Contact} />
    </Routes>
  );
};

export default App;
