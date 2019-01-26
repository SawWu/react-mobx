import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Home from './pages/Home';
import "@babel/polyfill";


class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Route path="/" component={Home}/>
          </div>
        </Router>
    );
  }
}

export default App;
