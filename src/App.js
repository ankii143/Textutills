import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TextForm from "./Components/TextForm";
// import TextForm from "./Components/TextForm";

export default function App() {
  const [mode, setmode] = useState("light");
  const toggleMode = () => {
    if(mode === "light"){
      setmode("dark");
      // #273f34
      // #1d2a35bf
      // #3e4951
      document.body.style.backgroundColor = '#3e4951'
    }else{
      setmode("light");
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <>
    <BrowserRouter>
    <Navbar title="TextUtils" about="About us" mode={mode} toggleMode={toggleMode}/>
    <Routes>
      <Route path="/textform" element={<TextForm  mode={mode}/>} />
      <Route path="/about" element={<About  />} />
    </Routes>
    </BrowserRouter>
   
    </>
  );
}

 