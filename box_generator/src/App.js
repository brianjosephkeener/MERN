import "./App.css";
import BoxForm from "./components/BoxForm";
import Box from "./components/Box";
import React, { useState } from "react";

function App() {
  const [boxes, setBoxes] = useState([]);
  const createBox = (nextBox) => {
    setBoxes([...boxes, nextBox]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <BoxForm createBox={createBox} />
        <br />
      </header>
      <main className="App-main">
          {boxes.map((item, i) => (
            <Box thisBox={item} />
          ))}
      </main>
    </div>
  );
}

export default App;