import React from 'react';
import './App.css';
import { MenuPage } from './pages/menu.component';
import { HomePage } from './pages/home-page/home.component'
import { Navigation } from './components/navigation/navigation.component';
import { Route } from 'react-router-dom'

function App() {
return (
    <div className="App">
      <Navigation />
      <Route exact path='/' component={HomePage} />
      <Route exact path='/menu' component={MenuPage} />
    </div>
  );
}

export default App;
