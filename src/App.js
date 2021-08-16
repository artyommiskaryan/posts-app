import { useState } from 'react';
import { PostForm, Posts } from './components/index.ts';

import './App.css';

function App() {
  const [posts, setPosts] = useState([]);

  const onSave = (newPost) => setPosts((posts) => [newPost, ...posts]);

  const handleRemovePost = (id) => {
    setPosts((prevPosts) => {
      return prevPosts.filter((post) => post.id !== id);
    });
  };
  return (
    <div className="App">
      <PostForm onSave={onSave} />
      <Posts data={posts} handleRemovePost={handleRemovePost} />
    </div>
  );
}

export default App;
