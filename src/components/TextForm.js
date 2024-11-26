import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log('Uppercase was clicked' + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase!", "success")
    }

    const handleLoClick = ()=>{
        // console.log('Uppercase was clicked' + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase!", "success")
    }

    const handleClearText = ()=>{
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared!", "success")
    }

    const handleSentences = ()=>{
        let newText = text.split(/[.!?]/).length-1;
        setText(newText.toString())
        props.showAlert("Counted number of sentences!", "success")
    }

    

    //text ki state ko update karne ke liye onchange finction banaya he cause uski value change karna important he
    const handleOnchange = (event)=>{
        // console.log('On change');
        setText(event.target.value) //isse ab or text add kar paoge once clicked ke baad
    }

    const[text, setText] = useState(''); //Called hooks. Further reference on google and text yaaha ek state variable he usko direct update nahi kar sakte.For that need to use setText Function. useState ek hook he
    // text = "Helloooooooooooooooo"; Wrong way
    // setText("kdngnostdn"); Correct Way


    
    
  return (
    <>
    <div className='container' style={{color: props.mode === 'dark'?'white':'#042743'}}>

        <h1 className='my-2'>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="myBox"  value={text} onChange={handleOnchange} style={{backgroundColor: props.mode === 'dark'?'#13466e':'white', color: props.mode === 'dark'?'white':'#042743'}} rows="8"></textarea> 
        </div>
        <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UPPERCASE</button>
        <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to lowercase</button>
        <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear Text</button>
        <button disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleSentences}>Number of Sentences</button>

    </div>
    <div className="container my-3" style={{color: props.mode === 'dark'?'white':'#042743'}}>
        <h1>Your text summary here</h1>
        <p>
            {text.trim() === "" ? 0 : text.trim().split(/\s+/).length} words and {text.trim().length} characters(with spaces)
        </p>

        <p>
        {text.trim() === "" ? 0 : text.trim().split(/\s+/).length} words and {text.replace(/\s+/g, '').length} characters (without spaces)
        </p>

        {/* Method 2 */}
        {/* <p>{text.split(" ").filter((element)=>{return element.length!==0}).length}words and {text.length} characters</p> */}

        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
        {/* <p>{text.split(/[".!?"]/).length-1} :No of Sentences</p> */}
    </div>
    </>
  )
}
