import React from 'react';
import './App.css';
import LoginPage from './pages/login_page/login_page.component';
import { MenuPage } from './pages/menu_page/menu_page.component';
import { HomePage } from './pages/home_page/home_page.component';
import EditMenuPage from './pages/edit_menu_page/edit_menu_page.component';
import { Route } from 'react-router-dom'
import { Navigation } from './components/navigation/navigation.component';

const App = () => {
  const [popupViewed, setPopupViewed] = React.useState(false)

  const [data, setData] = React.useState({})

  const getMenu = () => {
    fetch(process.env.REACT_APP_SOURCE + '/menu')
      .then(res => res.json())
      .then(response => {
        if (response.message) {
          alert(response.message)
          return
        }
        if (response.success) {
          setData(response.data)
        } else {
          alert('something went wrong!')
        }
      })
      .catch(err => console.log(err))
  }

  React.useEffect(() => getMenu(), [])

  return (
    <div className='App'>
      <Navigation popupViewed={popupViewed} setPopupViewed={setPopupViewed} />
      <Route
        exact
        path='/'
        render={() =>
          <HomePage
            popup={popupViewed}
            handleClose={setPopupViewed}
          />} />
      <Route exact path='/menu' component={() => <MenuPage data={data}/>} />
      <Route exact path='/login' render={() => <LoginPage />} />
      <Route exact path='/edit_menu' component={() => 
        <EditMenuPage
          data={data}
          setData={setData}
        />
      } />
    </div>
  );
}

export default App;
