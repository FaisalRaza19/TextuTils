export default function About(props) {
  let myStyle = {
     color:props.mode === 'dark'?'white':'#134475',
     backgroundColor:props.mode === 'dark'?'#134475':'white',
     borde : '2px solid',
     borderColor : props.mode==='dark'?'#134475':'white',
  }
  return (
    <div className='container' style={myStyle}>
     <div className="accordion my-3" id="accordionExample">
         <div className="accordion-item" style={myStyle}> 
           <h1>About Us</h1>
           <h2 className="accordion-header">
             <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
               <strong>Analyze Your Text</strong>
             </button>
           </h2>
           <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
             <div className="accordion-body" style={myStyle}>
               Textutils gives You a way to analyze your text quickly and efficiently.Be it Word count, Chracter 
               count or 
             </div>
           </div>
         </div>
         <div className="accordion-item" style={myStyle}>
           <h2 className="accordion-header" style={myStyle}>
             <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
               <strong>Free To Use</strong>
             </button>
           </h2>
           <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
             <div className="accordion-body" style={myStyle}>
              TextUtils is a free chracter counter tool that provides instant chracter count & Word count statics 
              for a given text.TextUtils report the number of words and chracter. Thus it is suitable for writing 
              text with word/ chracter limit.
            </div>
           </div>
         </div>
         <div className="accordion-item" style={myStyle}>
           <h2 className="accordion-header" style={myStyle}>
             <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
               <strong>Browser Compatible</strong>
             </button>
           </h2>
           <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
             <div className="accordion-body" style={myStyle}>
              This word counter software work in any web browsers such as chrome,Firefox,Internet Explorer,Safari,
              Opera.It suits to count chracters in facebook, blog, books, excel document, pdf document, essay, etc.
             </div>
           </div>
         </div>
      </div>
    </div>
  )
}
