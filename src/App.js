import './App.css';
// import Greeting from './Components/Greeting';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import React,{ useState } from 'react';
import Home from "./Components/Home";
import About from "./Components/About";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
const[alert, setAlert] = useState(null);
const showAlert = (message,type) => {
  setAlert({ //Json object
    msg: message,
    type: type
  });
  setTimeout(() => {
    setAlert(null);
  }, 1500);

}
  return(
<Router>
   
  <div className="main">
{/* <div className="hello">
     <Greeting name="Rishit"/>
   </div> */}
   {/* Exact helps in full checing while routing is a good practise*/}
 <Navbar showAlert={showAlert} />
 <Alert alert ={alert}/>
   <Routes>
    
     <Route
            path="/"
            element={<TextForm title="Enter The Text to Analyze" showAlert={showAlert} />}
          />
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About />} />
  </Routes>
        
   
   
  
</div>
   </Router>
  );
}

export default App;