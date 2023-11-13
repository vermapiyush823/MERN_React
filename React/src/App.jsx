import './App.css'

const user = {
  name:'Piyush',
  Age:19,
};

const App = ()=> {
  return (
    <>
    <h1>Hey, this is <span>{user.name}</span></h1>
    <h2>and, I am <span>19</span></h2>
    </>
  )
}

export default App
