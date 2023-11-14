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
              <Cards fName={"Piyush"} lName={"Verma"}/>
              <Cards fName={"Akash"} lName={"Bansal"}/>
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
