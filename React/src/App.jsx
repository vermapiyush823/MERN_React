import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import  Home from "./pages/Home/Home"

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        Component={Home}
      />
      <Route path="/about" Component={About} />
      <Route path="/contact" Component={Contact} />
    </Routes>
  );
};

export default App;
