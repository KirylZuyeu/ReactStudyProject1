import React, { useState } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";

function App() {

  const [value, setValue] = useState(0);

  

  return (
    <div className="App">

      <Counter/>
      <ClassCounter/>

    </div>
  );
}

export default App;
