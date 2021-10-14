import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Dashboard from './pages/Home';
import Products from './pages/Products';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Dashboard} />
          <Route path='/products' component={Products} />
        </Switch>
      </Router>
    </>
  );
}
export default App;
