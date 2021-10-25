import React, { useState } from "react";

function App() {
  const [buttonBg, setButtonBg] = useState({ background: "white" });

  let mouseHover = () => {
    setButtonBg({ background: "black" });
  };

  let mouseOut = () => {
    setButtonBg({ background: "white" });
  };

  return (
    <div className="container">
      <h1>Login man</h1>
      <input type="text" placeholder="What's your name?" />
      <button onMouseOver={mouseHover} onMouseOut={mouseOut} style={buttonBg}>
        Submit
      </button>
    </div>
  );
}

export default App;
