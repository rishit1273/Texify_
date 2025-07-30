import React,{useState} from 'react'
import { Link } from 'react-router-dom';
export default function Navbar(props) {
  const[Mode,setMode]=useState("light");
  //  const[BtnMode,setBtnMode]=useState("Light Mode");
  //  const ChangetoDarkMode = () => {
  //   if (Mode === "light") {
  //     setMode("dark");
  //     document.body.style.backgroundColor = "black";
  //      document.body.style.color = "white";
  //     setBtnMode("Dark Mode");
  //    props.showAlert("Dark mode has been enabled", "success");
  //   } else {
  //     setMode("light");
  //     document.body.style.backgroundColor = "white";
  //        document.body.style.color = "black";
  //     setBtnMode("Light Mode");
  //     props.showAlert("Light mode has been enabled", "success");
  //   }

  let  setColor = (color) => {
    let bgColor="white";
    let textColor="black";
    switch(color.toLowerCase()) {
      case "red":
        bgColor = "red";
        textColor = "white";
        break;
      case "yellow":
        bgColor = "yellow";
        textColor = "black";
        break;
      case "green":
        bgColor = "green";
        textColor = "white";
        break;
      case "black":
        bgColor = "black";
        textColor = "white";
        break;
      case "white":
        bgColor = "white";
        textColor = "black";
        break;
      default:
        bgColor = "white";
        textColor = "black";
        break;
    }
   
    document.body.style.backgroundColor = bgColor;
    document.body.style.color = textColor; 
    setMode(bgColor)
    props.showAlert(`${color.charAt(0).toUpperCase() + color.slice(1)} mode has been enabled`, "success");
  }
  
const isDark = Mode === "black" || Mode === "red" || Mode === "green";

  const bgColor = isDark ? "navbar-light bg-light" : "navbar-dark bg-dark";
 const textColor= isDark ? "black" : "white"


 return (
    
    <div>
        <nav className={`navbar navbar-expand-lg ${bgColor}`}>
  <div className="container-fluid">
    <Link className={`navbar-brand text-${textColor}`} to="/" >Textify</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link active" aria-current="page" text-${textColor} `} to ="/Home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link active text-${textColor}`}   to="/About">About</Link>
        </li>
      </ul>
       {/* <button className='btn btn-primary' onClick={ChangetoDarkMode}>{BtnMode}</button>  */}
  
      <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                <button type="button" onClick={()=>setColor("red")} className="btn btn-danger my-1 mx-2 rounded-pill border border-primary"></button>
                <button type="button" onClick={()=>setColor("yellow")} className="btn btn-warning my-1 mx-2 rounded-pill border border-primary"></button>
                <button type="button"   onClick={()=>setColor("green")} className="btn btn-success  my-1 mx-2 rounded-pill border border-primary" ></button>
                 <button type="button"   onClick={()=>setColor("White")} className="btn btn-light  my-1 mx-2 rounded-pill border border-primary"></button>
                 <button type="button" onClick={()=>setColor("black")} className="btn btn-dark  my-1 mx-2 rounded-pill border border-primary"></button>
         </div>
     
    </div>
  </div>
</nav>
    </div>
  )
}