import React, { Component } from 'react';
import './App.css';

import {Conclusion} from './pages/conclusion'
import {Introduction} from './pages/intro'
import {Data} from './pages/data'
import {StatAnalysis} from './pages/stat'
import {MachineLearning} from './pages/machineLearning'

import {Validation} from './pages/validation'


import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import * as d3 from 'd3';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null
    }
  }

  componentDidMount() {
    d3.csv("data/poverty_data.csv").then((d) => {
      this.setState({data: d});
    })
  }

  render() {
    if(!this.state) {
      return(
        <div>Loading Data</div>
      )
    }
    return (
      <Router> 
        <Switch>
          <Route exact path= {"/"} render={(routerProps) => {
            return <Introduction {...routerProps} />
          }}/>
          <Route path= {"/data"} render={(routerProps) => {
            return <Data data={this.state.data} {...routerProps} />
          }}/>
          <Route path= {"/stat"} render={(routerProps) => {
            return <StatAnalysis {...routerProps} />
          }}/>
          <Route path= {"/ml"} render={(routerProps) => {
            return <MachineLearning {...routerProps} />
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
