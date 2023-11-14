import './App.css'
const user = {
  name:'Piyush',
  Age:19,
  imgSrc:'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699747200&semt=sph',
  size:200
};

const App = ()=> {
  return (
    <>
    <h1>Hey, this is <span>{user.name}</span></h1>
    <h2>and, I am <span>19</span></h2>
    <img src={user.imgSrc} alt="" style={{width:user.size+"px",height:user.size+"px"}}/>
    </>
  )
}

export default App
