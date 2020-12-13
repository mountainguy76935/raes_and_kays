import React from 'react';
import './App.css';
import { withRouter } from 'react-router-dom'
import LoginPage from './pages/login_page/login_page.component';
import { MenuPage } from './pages/menu_page/menu_page.component';
import { HomePage } from './pages/home_page/home_page.component';
import jwt_decode from 'jwt-decode';
import EditMenuPage from './pages/edit_menu_page/edit_menu_page.component';
import { Route } from 'react-router-dom'
import { Navigation } from './components/navigation/navigation.component';

const App = props => {
  const [popupViewed, setPopupViewed] = React.useState(false)
  const [data, setData] = React.useState({})
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('')
  const [userId, setUserId] = React.useState('')

  const handleSubmitLogin = (e) => {
    e.preventDefault()
    setError('')
    const data = {
      username: username,
      password: password
    }
    return fetch(process.env.REACT_APP_SOURCE + '/login', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then((response) => {
        if (response.message) {
          setError(response.message);
          return;
        } else if (response.success) {
          const info = jwt_decode(response.token)
          const userId = info.userId
          setUserId(userId)
          if (userId === process.env.REACT_APP_USER_ID) {
            localStorage.setItem('token', response.token)
            localStorage.setItem('user_id', userId)
            props.history.push('/edit_menu')
          } else {
            setError('wrong credentials')
          }
          return true;
        }
      })
      .catch(err => {
        console.log(err);
      })
  }

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
      <Navigation
        popupViewed={popupViewed}
        setPopupViewed={setPopupViewed}
      />
      <Route
        exact
        path='/'
        render={() =>
          <HomePage
            popup={popupViewed}
            handleClose={setPopupViewed}
          />} />
      <Route exact path='/menu' component={() => <MenuPage data={data} />} />
      <Route
        exact
        path={'/'+process.env.REACT_APP_LOGIN_ROUTE}
        render={() =>
          <LoginPage
            setError={setError}
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            error={error}
            handleSubmit={handleSubmitLogin}
          />} />
      {process.env.REACT_APP_USER_ID === localStorage.getItem('user_id') ?
        <Route exact path='/edit_menu' component={() =>
          <EditMenuPage
            data={data}
            setData={setData}
          />
        } /> :
        null
      }
    </div>
  );
}

export default withRouter(App);
