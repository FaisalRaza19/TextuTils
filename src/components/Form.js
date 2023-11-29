import React,{useState} from 'react'

export default function Form(props) {
  const convertUp = ()=>{
    let raza = text.toUpperCase()
    setText(raza)
  }
  const convertLc = (a)=>{
    let hussain = text.toLowerCase();
    setText(hussain)
  }
  
  const valueChange = (a)=>{
    setText(a.target.value)
  }
  const clearText = ()=>{
     setText('');
  }
  const copyText = ()=>{
     navigator.clipboard.writeText(text)
  }
  const extraSpaces = ()=>{
     let newText = text.split(/[ ]+/);
     setText(newText.join(' '))
  }

  const[text,setText] = useState("Enter Value")
  return (
    <>
    <div className='container' style={{color:props.mode === 'dark'?'white':'black'}}>
       <h1>{props.heading}</h1>
       <div className="mb-3">
        <textarea className='form-control' onChange={valueChange} style={{background:props.mode==='dark'?'grey':'white',
        color:props.mode==='dark'?'white':'black'}} value={text} id="myBox" rows="8"></textarea>
       </div>
       <button className="btn btn-primary" onClick={convertUp}>Conver into UperCase</button>
       <button className="btn btn-primary mx-4 my-2" onClick={convertLc}>Conver into LowerCase</button>
       <button className="btn btn-primary mx-4 my-2" onClick={clearText}>Clear Text</button>
       <button className="btn btn-primary mx-4 my-2" onClick={copyText}>Copy Text</button>
       <button className="btn btn-primary mx-4 my-2" onClick={extraSpaces}>Remove Extera Spaces</button>
    </div>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
       <h1>Text Summary</h1>
       <p>{text.split(/\s+/).filter((e)=>{return e.length!==0}).length} Words & {text.length }Chracter</p>
       <p>{0.008 * text.split(" ").length} Mintues read</p>
       <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  )
};