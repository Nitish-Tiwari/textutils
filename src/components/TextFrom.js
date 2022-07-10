import React, { useState } from 'react'



export default function TextFrom(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked"+text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case", "success");
  }
  const handleLoClick = () => {

    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case", "success");
  }

  const handleInverseClick = () => {

    var s = '';
    var i = 0;
    while (i < text.length) {
      var n = text.charAt(i);
      if (n === n.toUpperCase()) {
        n = n.toLowerCase();
      }
      else {
        n = n.toUpperCase();
      }
      i++;
      s += n;
    }
    let newtext = s;
    setText(newtext);
    props.showAlert("Converted to Inverse Case", "success");
  }
  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  }
  const [text, setText] = useState('');
  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#000000' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick} style={{ backgroundColor: props.mode === 'dark' ? '#150050' : '#0096FF' }} >Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick} style={{ backgroundColor: props.mode === 'dark' ? '#150050' : '#0096FF' }} >Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleInverseClick} style={{ backgroundColor: props.mode === 'dark' ? '#150050' : '#0096FF' }} >Convert to Inversecase</button>
      </div>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something in textbox above to preview it"}</p>
      </div>
    </>
  )
}
