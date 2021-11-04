import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import CreateStory from './styleComponents/CreateStory';
import Allstroy from './styleComponents/Allstroy';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/create-story">
            <CreateStory />
          </Route>
          <Route exact path="/all-story">
            <Allstroy />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
