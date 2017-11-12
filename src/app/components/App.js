import React, { Component } from 'react';
import './App.css';
import PostList from './../../posts/containers/PostListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PostList />
      </div>
    );
  }
}

export default App;
