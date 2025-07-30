import React,{useState} from 'react'
import PropTypes from 'prop-types';

export default function TextForm(props) {
  const [text, setText ] = useState(""); 
const ChangetoUpper =()=>{
  // console.log("Uppercase was clicked");
  // setText("You have clicked on Uppercase");
  let newText= text.toUpperCase();
  setText(newText);
  props.showAlert("Converted to Uppercase", "success");
}
const ChangetoLower =()=>{
  let newText= text.toLowerCase();
  setText(newText);
  props.showAlert("Converted to Lowercase", "success");
}
const handleOnChange=(event)=>{
  // console.log("On Change");
  setText(event.target.value);
}
const Clear =()=>{
  let newText= "";
  setText(newText);
  props.showAlert("Text Cleared", "success");
}
const RemoveSpace =()=>{
  let newText=text.replace(/\s+/g, " ").trim();
  setText(newText);
  props.showAlert("Extra Space Removed ","success");
}
const speak = () => {
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
  props.showAlert("Speaking the text", "success");
}
const[count ,setCount] = useState(0);
 
const Increment1 = () => {
  setCount(count + 1);
  // console.log("Incremented: " + count);  
}
//jacvascript object
//  let myStyle=
//   {
//     backgroundColor: "black",
//      color: "white",
//   }
  return (
 <>
    <div className='container my-3'>
     <h1>{props.title}</h1>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label"> </label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange}></textarea>
</div>
<button  disabled={text.length===0}type="button" className="btn btn-primary my-2 mx-2" onClick={ChangetoUpper}>Convert To Upper Case</button>
<button disabled={text.length===0} type="button" className="btn btn-primary  my-2 mx-2" onClick={ChangetoLower}>Convert To Lower Case</button>
<button disabled={text.length===0} type="button" className="btn btn-primary  my-2 mx-2" onClick={Clear}>Clear</button>
<button disabled={text.length===0} type="button" className="btn btn-primary  my-2 mx-2" onClick={RemoveSpace}>Remove Extra Space</button>
<button  disabled={text.length===0} type="submit" onClick={speak} className="btn btn-primary mx-2 my-2">Speak</button>

<div className="container">
  <h1>{count}</h1>
  <button className="btn btn-primary" onClick={Increment1}>Increment Button</button>
</div>
    </div>
    <div className="container">
    <h2>Your Text Summary</h2>
    <ul>
      <li><b>Words:</b>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</li>
      <li><b>Characters:</b>{text.length}</li>
      <li><b>Time To Read(Minutes):</b>{ 0.008*text.split(" ").filter((element)=>{return element.length!==0}).length}</li>
      <li><b>Preview:</b>  <br />{text}  </li>
    </ul>
    </div>
</>
  )
 
}
 TextForm.propTypes = {
    title: PropTypes.string.isRequired
  }