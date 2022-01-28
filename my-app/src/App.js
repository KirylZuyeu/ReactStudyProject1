import React, { useState } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import './styles/App.css'

function App() {
  const [posts1, setPosts1] = useState([
    {id: 1, title: 'JavaScript1', body: 'Description1'},
    {id: 2, title: 'JavaScript2', body: 'Description2'},
    {id: 3, title: 'JavaScript3', body: 'Description3'},
    {id: 4, title: 'JavaScript4', body: 'Description4'},
    {id: 5, title: 'JavaScript5', body: 'Description5'},
  ]);

  const [posts2, setPosts2] = useState([
    {id: 1, title: 'Pyton1', body: 'Description1'},
    {id: 2, title: 'Pyton2', body: 'Description2'},
    {id: 3, title: 'Pyton3', body: 'Description3'},
    {id: 4, title: 'Pyton4', body: 'Description4'},
    {id: 5, title: 'Pyton5', body: 'Description5'},
  ]);

  return (
    <div className="App">
      <PostItem post={{id: 1, title: 'JavaScript', body: 'Description'}} />
      <PostList posts={posts1} title='JavaScript List'/>
      <PostList posts={posts2} title='Pyton List'/>
      <Counter/>
      <ClassCounter/>     
    </div>
  );
}

export default App;
