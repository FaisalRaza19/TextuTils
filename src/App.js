import Navbar from './components/Navbar'
import Alert from './components/Alert'
// import About from './components/About'
import Form from './components/Form'
import React,{useState} from 'react';

function App() {
  const[mode,setMode] = useState('light');
  const toogleMode = ()=>{
    if(mode=== 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#134475';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
     <>
       <Navbar title={"TextUTils"} mode={mode} toogleMode={toogleMode}/>
       <div className="container">
        <Alert alert={"This Is Alert"}/>
       </div>
       <div className="container">
        {/* <About mode={mode}/> */}
        <Form heading={"Enter The Value"} mode={mode}/>
       </div>
     </>
  );
}

export default App;
