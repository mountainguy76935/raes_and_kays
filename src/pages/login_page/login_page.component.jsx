import React from 'react';
import { withRouter } from 'react-router-dom'
import { CustomForm } from '../../components/custom-form/custom-form.component';

const LoginPage = (props) => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        setError('')
        const data = {
            username: username,
            password: password
        }
        return fetch(process.env.REACT_APP_SOURCE+'/login', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(response => {
                if (response.success) {
                    alert('logged in successfully!')
                    props.history.push({
                        pathname: '/edit_menu',
                        state: {
                            data: response.userData
                        }
                    })
                } else {
                    setError(response.message)
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <div className="login-page-main">
            <form method="POST" onSubmit={e=> handleSubmit(e)}>
                <br />
                <br />
                <br />
                <h1>Login to Change the Menu!</h1>
                <CustomForm
                    label="username"
                    type="text"
                    value={username}
                    handleChange={setUsername}
                />
                <br />
                <CustomForm
                    label="password"
                    type="password"
                    value={password}
                    handleChange={setPassword}
                />
                <br />
                <br />
                <button type="submit">LOGIN!</button>
            </form>
            {error ? <p>{error}</p> : null}
        </div>
    )
}

export default withRouter(LoginPage)