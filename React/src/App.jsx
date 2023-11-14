import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Cards from "./components/Cards/Cards";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        Component={() => {
          return (
            <div className="card-container">
<<<<<<< HEAD
              <Cards fName={"Piyush"} lName={"Verma"}/>
              <Cards fName={"Akash"} lName={"Bansal"}/>
=======
              <Cards />
              <Cards />
>>>>>>> 449c6e7728e9b2410f42b38059e9af4a4307cec5
              <Cards />
              <Cards />
              <Cards />
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
