import React, { useEffect } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PostsList from './pages/PostsList';
import SinglePost from './pages/SinglePost';
import CreatePost from './pages/CreatePost';
import getAllPosts from './redux/actions/GetAllPosts';
import { useDispatch } from 'react-redux';
import EditPost from './pages/EditPost';
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllPosts())
  }, [])
  return (
    <div className="App pt-5">
      <Router>
        <Switch>
          <Route exact path="/" component={PostsList} />
          <Route exact path="/post/:id" component={SinglePost} />
          <Route exact path="/create" component={CreatePost} />
          <Route exact path="/edit" component={EditPost} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
