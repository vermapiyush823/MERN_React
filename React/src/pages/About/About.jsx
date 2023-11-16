import { useState,useEffect } from "react";
import axios from "axios";
const About = () => {
  const generateRandomPerson = ()=>{
    axios.get("https://randomuser.me/api/").then((resp)=>{
        setData(resp.data);
    })
    
  }
  const [data,setData] = useState(null);

  useEffect(()=>{
    generateRandomPerson();
  },[" "]);

  const userInfo = data?.results[0];
  return (
    <>

    {data ?(<div>
  
      <img src={userInfo?.picture.large}/>
      <p>
        { userInfo?.name.title +
          " " +
          userInfo?.name.first +
          " " +
          userInfo?.name.last}
      </p>
    </div>):null}
      <button onClick={generateRandomPerson}>Generate Random</button>
    </>
  );
};
 
export default About;
