import "./Home.css"

function Home(props){
    
  let id = 12220796
  return <>
  <h1 style={{backgroundColor:"grey",color:"blue"}}>Home Comp</h1>
  <h2 className="App-Home-Header">Your student id is: {id}</h2>
  <p>Hello {props.name} kese ho. Mujhe pta h Apki age {props.age} h </p>
  </>
}

export default Home;