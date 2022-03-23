import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewDrink from "./routes/new";
import About from "./routes/about";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/new" element={<NewDrink />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
