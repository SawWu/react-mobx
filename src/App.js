import React, {Component} from 'react';
import * as bbb from 'mobx-react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/Home';
import "@babel/polyfill";


class App extends Component {
  render() {
    console.log(bbb)
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
