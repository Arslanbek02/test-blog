import React from 'react';
import './styles/App.css';
import Posts from './pages/Posts';
import Post from './pages/Post';
import { BrowserRouter, Link, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter >
          <Link to="/"><h2>Home</h2></Link>
        <Route exact path='/'>
          <Posts/>
        </Route>
        <Route exact path='/posts/:id'>
          <Post/>
        </Route>
    </BrowserRouter>
  )
}

export default App;
