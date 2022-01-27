import React, { useState } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import './styles/App.css'

function App() {

  const [value, setValue] = useState(0);

  

  return (
    <div className="App">
      <PostItem post={{id: 1, title: 'JavaScript', body: 'Description'}} />
      <Counter/>
      <ClassCounter/>     
    </div>
  );
}

export default App;
