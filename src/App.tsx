import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import FrontendAuth from './router/FrontendAuth';
import RouterMap from "./router/router";

function App() {
  
  return <Router>
    <FrontendAuth routerConfig={RouterMap} />
  </Router>
}

export default App;
