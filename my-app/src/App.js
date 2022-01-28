import React, { useState } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import './styles/App.css'

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript1', body: 'Description1'},
    {id: 2, title: 'JavaScript2', body: 'Description2'},
    {id: 3, title: 'JavaScript3', body: 'Description3'},
    {id: 4, title: 'JavaScript4', body: 'Description4'},
    {id: 5, title: 'JavaScript5', body: 'Description5'},
  ]);

  

  return (
    <div className="App">
      <PostItem post={{id: 1, title: 'JavaScript', body: 'Description'}} />
      <h1 style={{textAlign: 'center'}}>List of Posts</h1>
      {posts.map(post => 
        <PostItem post={post} key={post.id}/>
      )}
      <Counter/>
      <ClassCounter/>     
    </div>
  );
}

export default App;
