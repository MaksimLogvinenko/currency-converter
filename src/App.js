import React from "react";

import Header from "./components/Header";
import heroBg from "./assets/img/hero.jpg";
import Main from "./components/Main";
import Converter from "./components/Converter";

const bgStyle = {
  backgroundImage: "url(" + heroBg + ")",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backdropFilter: "blur(4px)",
  overflow: "hidden",
};

function App() {
  return (
    <div className="h-full p-5 bg-orange-200">
      <div
        className="h-[calc(100vh_-_40px)] rounded-3xl relative"
        style={bgStyle}
      >
        <Header />
        <Main />
        <Converter />
      </div>
    </div>
  );
}

export default App;
