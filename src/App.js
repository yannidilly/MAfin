import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/mafin" component={ Home } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
