import React from "react";

import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Homepage/Home";
import Buy from "./Components/Buypage/Buy";
import Pagethree from "./Components/Rentpage/Pagethree";
import Mainpart from "./Components/Sellpage/Mainpart";
import Cannectsigle from "./Components/Singlepage/Cannectsigle";
import "./App.css";
import FooterComponent from "./Components/FooterComponent";
import Partagency from "./Components/Agent/Partagency";
import Mainfail from "./Components/Contact/Mainfail";
import Signup from "./Components/Signupoo/Signup";
import Signin from "./Components/Sighnf/Signin";

function App() {
  return (
    <>
<Navbar/>      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/rent" element={<Pagethree />} />
        <Route path="/sell" element={<Mainpart />} />
        <Route path="/singlepage" element={<Cannectsigle />} />
       <Route path="/Agency" element={<Partagency />} />
     <Route path="/Contact" element={<Mainfail/>}/>
     <Route path="/Signi" element={<Signin/>}/>
     <Route path="/Signupoo" element={<Signup/>}/>
     
     

      </Routes>
<FooterComponent/>
    </>
  );
}

export default App;
