import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


let name ="Harry";
function App() {
  const [mode, setMode] = useState('light'); //whether dak mode is enabled or not
  const [alert, setAlert] = useState('null'); 
  
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1200);
  }

  const removeBodyClasses= ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')

  }
  const toggleMode = (cls)=>{
    console.log(cls)
    removeBodyClasses();

    document.body.classList.add('bg-'+cls)
    if(cls === 'light'){
      showAlert("Light Mode has been enabled!", "success");
    }
    if(cls === 'success'){
      showAlert("Green Mode has been enabled!", "success");
    }
    if(cls === 'warning'){
      showAlert("Yellow Color Mode has been enabled!", "success");
    }
    if(cls === 'danger'){
      showAlert("Red Color Mode has been enabled!", "success");
    }
    if(cls === 'primary'){
      showAlert("Blue Color Mode has been enabled!", "success");
    }


    // if(mode === 'light'){
    //   setMode('dark');
    //   document.body.style.backgroundColor = '#042743';
    //   showAlert("Dark Mode has been enabled", "success");
    //   // document.title="TextUtils - Dark Mode";
    //   // This is used to change the title of the page after every 1 or 2 sec to grab user attention
    //   // setInterval(() => {
    //   //   document.title="TextUtils is Amazing!!"
    //   // }, 2000);
    //   // setInterval(() => {
    //   //   document.title="Install TextUtils Now!!"
    //   // }, 1500);
    // }
    // else{
    //   setMode('light');
    //   document.body.style.backgroundColor = 'white';
    //   showAlert("Light Mode has been enabled", "success");
    //   // document.title="TextUtils - Light Mode";
    // }
  }
  return (
    <>
      <Router>
      <Navbar title="TextUtils" aboutText = "About TextUtils" mode={mode} toggleMode={toggleMode} />
      {/* <Navbar /> */}
      {/* Ye ek component he navbar and usko chahiye ye variables ki value and ye he props. Ye component inke bina ek koraa kagaz he */}
      <Alert alert={alert}/>
      <div className="container my-3" >
      <Routes>
      <Route exact path="/about" element={<About mode={mode} />} />
        <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Number of Sentences" mode={mode} />} />
          {/* <TextForm showAlert={showAlert} heading = "Enter the text to analyze below" mode={mode} /> */}
      </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
