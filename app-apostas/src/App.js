import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import pageInitial from './pages/pageInitial';
import pageFutebol from './pages/pageFutebol';
import pageRegulament from './pages/pageRegulament';
import pageBilhete from './pages/pageBilhete';
// import { Switch } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ pageInitial } />
        <Route path="/futebol" component={ pageFutebol } />
        <Route path="/regulament" component={ pageRegulament } />
        <Route path="/bilhete" component={ pageBilhete } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
