import React,{useState} from 'react'

export default function (props) {
    
    const handleUpClick = ()=>{
        //console.log("Uppercase was clicked" + text);
        let newText =text.toUpperCase()
        setText(newText)
    }
    const handleLowerClick = ()=>{
        //console.log("Uppercase was clicked" + text);
        let newText =text.toLocaleLowerCase()
        setText(newText)
    }
    const handleClearClick = ()=>{
        
        let newText =""
        setText(newText)
    }
    const handleCopy = ()=>{
        console.log("I am copy");
        var text = document.getElementById("exampleFormControlTextarea1");
        text.select();
       
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
    }
    const handleOnChange = (event)=>{
        //console.log("On Change");
        setText(event.target.value)
    }
    const [text, setText] = useState('');
  return (
    <>
    <div className='container' style={{color:props.mode==='dark' ?'white':'black'}}>
        <h1>{props.heading}</h1>        
        <div class="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Enter your text</label>           
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{background:props.mode==='dark' ?'gray':'white',color:props.mode==='dark' ?'white':'black'}} id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>convert to upper case</button>
        <button className="btn btn-primary mx-2" onClick={handleLowerClick}>convert to Lower  case</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
    </div>
    <div className='container m-3' style={{color:props.mode==='dark' ?'white':'black'}}>
        <h2>Summary of your text</h2>
        <p>{text.split(" ").length} words and {text.length}</p>
        <p>{0.008*text.split(" ").length} Minutes to read </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview  it here"}</p>
        
        
        
    </div>   
    </>
  )
}

