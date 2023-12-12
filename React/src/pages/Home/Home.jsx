import Cards from "../../components/Cards/Cards";
import { useEffect , useState} from "react";

import axios from "axios";

import "./Home.css";
const Home = () => {
  const getName = ()=>{
    axios.get("http://localhost:3000/").then((response)=>{
      setNames(response.data.names);
    })
  }
  const [names, setNames] = useState(null);

  useEffect(()=>{
    getName();
  },[])
  return (
    <div className="home">
      <div className="card-container">
        {
          names?(names.map((val, i) => {
            return <Cards key={i} fName={val.fName} lName={val.lName} />;
          })):null 
        }
      </div>
    </div>
  );
};

export default Home;
