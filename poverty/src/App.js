import React, { Component } from 'react';
import './App.css';

import {Conclusion} from './pages/conclusion'
import {Introduction} from './pages/intro'
import {Data} from './pages/data'
import {StatAnalysis} from './pages/stat'
import {Validation} from './pages/validation'


import { HashRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <Router> 
        <Switch>
          <Route exact path= {"/"} render={(routerProps) => {
            return <Introduction {...routerProps} />
          }}/>
          <Route path= {"/data"} render={(routerProps) => {
            return <Data {...routerProps} />
          }}/>
          <Route path= {"/stat"} render={(routerProps) => {
            return <StatAnalysis {...routerProps} />
          }}/>
          <Route path= {"/validation"} render={(routerProps) => {
            return <Validation {...routerProps} />
          }}/>
          <Route path= {"/conclusion"} render={(routerProps) => {
            return <Conclusion {...routerProps} />
          }}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
