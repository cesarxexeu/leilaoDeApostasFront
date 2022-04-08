import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import pageInitial from './pages/pageInitial';
import pageFutebol from './pages/pageFutebol';
import pageRegulament from './pages/pageRegulament';
import pageBilhete from './pages/pageBilhete';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import { Switch } from 'react-router-dom';


function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyC4LZrQ0U1Lx8DUIqkNdwjvoqX-UyEEjw8",
    authDomain: "leilao-apostas-fb7fc.firebaseapp.com",
    projectId: "leilao-apostas-fb7fc",
    storageBucket: "leilao-apostas-fb7fc.appspot.com",
    messagingSenderId: "123867938518",
    appId: "1:123867938518:web:fcc107d34624ff35db1377",
    measurementId: "G-6HSQE8R3ZT"
  };
  const app = initializeApp(firebaseConfig);
  getAnalytics(app);
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
