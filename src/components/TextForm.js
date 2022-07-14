import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  }
  const handleLowClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  }
  const handleClearClick = ()=>{
    let newText = '';
    setText(newText);
    props.showAlert("Text cleared!", "success");
  }
  const handleOnChange = (event)=>{
    setText(event.target.value);

  }
  const handleCopy = ()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied!", "success");
  }
  const handleRemoveExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed from text!", "success");
  }

  const [text, setText] = useState('Enter text here');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode
              ==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-danger mx-2" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h3>Your text summary</h3>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes taken to read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
    </div>
    </>
  )
}

