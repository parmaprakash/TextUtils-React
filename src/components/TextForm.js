import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("")
    let character=text.length>0?text.length:0;
    let word=(character===0 || text[character-1]===" ")?(text.split(" ").length-1):text.split(" ").length;
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    // convert uppercase 
    const handleUpClick = () => {
        console.log("Convert to uppercase")
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Coverted in UpperCase!","success")
    }
    // convert lowercase 
    const handleLoClick = () => {
        console.log("Convert to lowercase")
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Coverted in LowerCase!","success")
    }

    // clear whole text 
    const handleClearText = () => {
        setText("");
        props.showAlert("Text Cleared!","success")
    }

    // copy text on clipboard
    const handleCopyText = () => {
        var copyText = document.getElementById('myBox');
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        props.showAlert("Text Copied to Clipboard!","success")
    }

    // Download Text
    const handleDText = () => {
        var data = new Blob([text], { type: 'text/plain' });
        var url = window.URL.createObjectURL(data);
        document.getElementById('download_link').href = url;
    }
    // Remove extra spaces
    const handleExtraSpace = () => {
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed!","success")
    }

    // convert in Capitalized Case 
    const handleCCClick = () => {
        let newText = text.replace(
            /\w\S*/g,
            function (txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        );
        setText(newText);
        props.showAlert("Text Capitalized!","success")
    }
    const setStyle={
        color:`${props.mode==='dark'?'white':'black'}`
    }

    return (
        <div className="container">
            <h3 className="my-3" style={setStyle}><b>{props.heading}</b></h3>
            <div className="mb-3">
                <textarea style={{border:"2px solid blue",color:`${props.mode==='dark'?'black':'white'}`,
                backgroundColor:`${props.mode==='dark'?'white':'black'}`}}className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>UPPERCASE</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleCCClick}>Capitalized Case</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-1" onClick={handleCopyText}>Copy to Clipboard</button>
            <button className="btn btn-primary mx-1" onClick={handleDText}>
                <a id="download_link" style={{textDecoration:"none",color:"white"}} download="my_exported_file.txt" href="/" >Download as Text File</a>
            </button>
            <button className="btn btn-primary mx-1" onClick={handleClearText}>Clear</button>
            <div className="my-3" style={setStyle}>
                <h5>Character Count: {character} | Word Count: {word} |  {(0.008) * (word)} Minutes Read</h5>
            </div>
            <div style={setStyle}>
                <h4>Preview:</h4>
                <p>{text.length>0?text:"Enter something in the textbox above to preview it here "}</p>
            </div>

        </div>
    )
}
