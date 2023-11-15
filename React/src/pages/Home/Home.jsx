import Cards from "../../components/Cards/Cards";
import "./Home.css";
const names = [
  {
    fName: "Piyush",
    lName: "Verma",
  },
  {
    fName: "Kashish",
    lName: "Verma",
  },
  {
    fName: "Sahil",
    lName: "Verma",
  },
  {
    fName: "Sagar",
    lName: "Verma",
  },
];
const Home = () => {
  return (
    <div className="home">
      <div className="card-container">
        {names.map((val, i) => {
          return <Cards key={i} fName={val.fName} lName={val.lName} />;
        })}
      </div>
    </div>
  );
};

export default Home;
