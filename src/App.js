import React from 'react';
import './App.css';
import { MenuPage } from './pages/menu_page/menu_page.component';
import { Route } from 'react-router-dom'

function App() {

return (
    <React.Fragment>
      <Route exact path='/' render={() => <MenuPage/>}/>
    </React.Fragment>
  );
}

export default App;
