import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "animate.css";
import './assets/fonts/font.css'
import './assets/css/as2.css';
import './assets/css/as3.css';
import './assets/css/as4.css';
import './assets/css/an.css';
import './assets/css/main.css';

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/services" element={<Services/>} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;