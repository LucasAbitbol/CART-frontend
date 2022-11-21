import './App.css';
import Login from './Pages/Connexion/Connexion';
import React, {useEffect, useState} from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import AnciennesData from "./Pages/AnciennesData/AnciennesData";
import NouvellesData from "./Pages/NouvellesData/NouvellesData";

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/AnciennesData" exact component={AnciennesData} />
            <Route path="/nouvellesData" exact component={NouvellesData} />
            <Route path="/" exact component={Login} />
          </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;