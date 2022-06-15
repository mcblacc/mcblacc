import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

import "animate.css";
import './assets/fonts/font.css'
import './assets/css/as2.css';
import './assets/css/as3.css';
import './assets/css/an.css';
import './assets/css/main.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;