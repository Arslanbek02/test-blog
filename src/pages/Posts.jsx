import React, { useState } from 'react';
import '../styles/App.css';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import Post from '../pages/Post';

function Posts() {
  const [posts, setPosts] = useState([
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost} /><br /><hr />
      {posts.length !== 0
        ? <PostList remove={removePost} posts={posts}/>
        : <h1 style={{textAlign: 'center'}}>There are no posts here. <br/> please Add it!</h1>
      }
      <Post posts={posts}></Post>
    </div>
  );
}

export default Posts;
