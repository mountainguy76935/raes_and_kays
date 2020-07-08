import React from 'react';
import './App.css';
import { MenuPage } from './pages/menu.component';
import { HomePage } from './pages/home-page/home.component'
import { Navigation } from './components/navigation/navigation.component';
import { Route } from 'react-router-dom'

function App() {
return (
    <React.Fragment>
      <Navigation />
      <Route exact path={process.env.PUBLIC_URL + '/'} component={HomePage} />
      <Route exact path={process.env.PUBLIC_URL + '/menu'} component={MenuPage} />
    </React.Fragment>
  );
}

export default App;
