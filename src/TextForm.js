import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const TextForm = (props) => {
    const handleUpClick = (() => {
        let newtext = text.toUpperCase() ;
        setText(newtext)
        

    })
    const handleOnChange = ((event) => {
        setText(event.target.value);

    })
    const handledownclick = (() => {
        let newtext = text.toLowerCase();
        setText(newtext)

    })
    const clearclick = (() => {
        let newtext ="";
        setText(newtext)
        alert("are you sure");

    })


    const [text, setText] = useState("");

    return (
        <>
        <div className="container" style={{color:"white"}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">

                <textarea className="form-control" value={text} onChange={handleOnChange}id="myBox" rows="4"></textarea>


            </div>
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
          <button className="btn btn-primary mx-2" onClick={handledownclick}>Convert To LowerCase</button>
          <button className="btn btn-primary mx-2" onClick={clearclick}>clear</button>

          </div>
          <div className="container my-3" style={{color:"black"}}>
              <h1>Your text Summery</h1>
              <p>{text.split(" ").length} words and {text.length}Character</p>
              <p>{0.008*text.split("").length } Minutes read</p>
<h2>Preview</h2>
<p color="blue">{text}</p>
          </div>
        </>

    )
}

export default TextForm;
