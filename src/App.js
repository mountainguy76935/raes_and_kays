import React from 'react';
import './App.css';
import { MenuPage } from './pages/menu_page/menu_page.component';
import { Route } from 'react-router-dom'
import { Navigation } from './components/navigation/navigation.component';
import { HomePage } from './pages/home_page/home_page.component';

function App() {

return (
    <div className='App'>
      <Navigation />
      <Route exact path='/' render={() => <HomePage/>}/>
      <Route exact path='/menu' render={() => <MenuPage/>}/>
    </div>
  );
}

export default App;
