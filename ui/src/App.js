import React from 'react';
import './App.css';
import Home from './components/home';
import About from './components/about';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <main>
      <Switch>
        <Route path='/about' component={About} />
        <Route path='/' component={Home} />
      </Switch>
    </main>
  );
}

export default App;
