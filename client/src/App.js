import React, { useEffect } from "react";
import Nav from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import ColorPanel from "./components/ColorPanel";
import { useState } from "react";
import "./index.css";
import Loading from "./components/Loading/Loading";

function App() {
  const [color, setColor] = useState("#c70039");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-col overflow-x-hidden">
          <ColorPanel onColorChange={changeColor} />
          <Nav color={color} />
          <Home color={color} />
          <About color={color} />
          <Projects color={color} />
          <Contact color={color} />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
