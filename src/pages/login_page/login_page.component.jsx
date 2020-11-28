import React from 'react';
import { withRouter } from 'react-router-dom'
import { CustomForm } from '../../components/custom-form/custom-form.component';

const LoginPage = (props) => {
    return (
        <div className="login-page-main">
            <form method="POST" onSubmit={e => props.handleSubmit(e)}>
                <br />
                <br />
                <br />
                <h1>Login to Change the Menu!</h1>
                <CustomForm
                    label="username"
                    type="text"
                    value={props.username}
                    handleChange={props.setUsername}
                />
                <br />
                <CustomForm
                    label="password"
                    type="password"
                    value={props.password}
                    handleChange={props.setPassword}
                />
                <br />
                <br />
                <button type="submit">LOGIN!</button>
            </form>
            {props.error ? <p>{props.error}</p> : null}
        </div>
    )
}

export default withRouter(LoginPage)