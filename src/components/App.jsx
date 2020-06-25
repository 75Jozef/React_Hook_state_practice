import React, { useState } from "react";

function App() {
  const [state, change] = useState();

  function seeTime() {
    let time = new Date().toLocaleTimeString().slice(0, 8);
    change(time);
  }

  setInterval(seeTime, 1000);

  return (
    <div className="container">
      <h1>{state}</h1>
      <button onClick={seeTime}>Get Time</button>
    </div>
  );
}

export default App;
