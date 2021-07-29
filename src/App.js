import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PostsList from './pages/PostsList';
import SinglePost from './pages/SinglePost';
import CreatePost from './pages/CreatePost';
function App() {
  return (
    <div className="App pt-5">
      <Router>
        <Switch>
          <Route exact path="/" component={PostsList} />
          <Route exact path="/post/:id" component={SinglePost} />
          <Route exact path="/create" component={CreatePost} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
