import React, { useRef, useState } from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import './styles/App.css'

function App() {
  const [posts1, setPosts1] = useState([
    {id: 1, title: 'JavaScript1', body: 'Description1'},
    {id: 2, title: 'JavaScript2', body: 'Description2'},
  ]);

  const [posts2, setPosts2] = useState([
    {id: 1, title: 'Pyton1', body: 'Description1'},
    {id: 2, title: 'Pyton2', body: 'Description2'},
  ]);

  const [post, setPost] = useState({
    title: '',
    body: ''
  })
  const bodyInputRef = useRef();

  const addNewPost = (e) => {
    e.preventDefault();
    
    setPosts1([...posts1, {...post, id: Date.now()}])
    setPost({title: '', body: ''})
  }

  return (
    <div className="App">
      <form>
        <MyInput
          type="text"
          placeholder="Name of the post"
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}
        />
        <MyInput
          type="text"
          placeholder="Description of the post"
          value={post.body}
          onChange={e => setPost({...post, body: e.target.value})}
        />

        <MyInput
          type="text"
          placeholder="Description of the post"
          ref={bodyInputRef}
        />
        <MyButton onClick={addNewPost}>Create Post</MyButton>
        <MyButton disabled>Disabled</MyButton>
      </form>
      <PostList posts={posts1} title='JavaScript List'/>
      <PostList posts={posts2} title='Pyton List'/>
      <PostItem post={{id: 1, title: 'JavaScript', body: 'Description'}} />
      <Counter/>
      <ClassCounter/>     
    </div>
  );
}

export default App;
