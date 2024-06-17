import React, { Component, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Contactus from "./components/CONTACTUS/contactus";
import Signup from "./components/SIGNUP/signup";
import CarList from "./components/CarList/CarList";


const App = () => {


  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/contactusss" element={<Contactus/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/pb-24" element={<CarList/>}></Route>
      
    </Routes>
    </>
  );
};

export default App;
