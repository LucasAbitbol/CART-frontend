import './App.css';
import Form from './Pages/Form/Form';
import Login from './Pages/Connexion/Connexion';
import React, {useEffect, useState} from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import profil from "./Pages/Profil/Profil";
import Inscription from "./Pages/Form/Inscription";
import Diagnostic from "./Pages/Diagnostic/Diagnostic";
import Historique from "./Pages/Historique/Historique";
import DonneesVitales from "./Pages/Historique/DonneesVitales";

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/dashboard" exact component={Form} />
            <Route path="/profil" exact component={profil} />
            <Route path="/inscription" exact component={Inscription} />
            <Route path="/diagnostic" exact component={Diagnostic} />
            <Route path="/historique" exact component={Historique} />
            <Route path="/donneesVitales" exact component={DonneesVitales} />
            <Route path="/" exact component={Login} />
          </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;