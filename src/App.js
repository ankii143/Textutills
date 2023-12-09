import React, { useState } from "react";
import Navbar from "./Components/Navbar";
// import About from "./Components/About";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import './index.css';
// import TextForm from "./Components/TextForm";

export default function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    },2000);
  }

  const toggleMode = () => {
    if(mode === "light"){
      setmode("dark");
      document.body.style.backgroundColor = '#3e4951';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode'
      // setInterval(() => {
      //     document.title = 'TextUtils is Amazing Mode';
      // }, 2500)
      // setInterval(() => {
      //     document.title = 'Install TextUtils Now';
      // }, 1500)
    }else{
      setmode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode'
    }
  }
  return (
    <>
        <Navbar title="TextUtils" about="About us" mode={mode} toggleMode={toggleMode}/>
        <Alert  alert={alert}/>
        <TextForm  mode={mode} showAlert={showAlert}/>
{/*  
    <BrowserRouter>
    <Navbar title="TextUtils" about="About us" mode={mode} toggleMode={toggleMode}/>
    <Alert  alert={alert}/>
    <Routes>
      <Route  path="/" element={<TextForm  mode={mode} showAlert={showAlert}/>} />
      <Route path="/about" element={<About mode={mode} />} />
    </Routes>
    </BrowserRouter> */}
   
    </>
  );
}

 