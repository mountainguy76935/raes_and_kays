import React from 'react';
import { withRouter } from 'react-router-dom'
import { TextField } from '@material-ui/core';

const LoginPage = (props) => {

    return (
        <form className="login-page-main" method="POST" onSubmit={e => props.handleSubmit(e)}>
            <br />
            <br />
            <br />
            <h1>Login to Change the Menu!</h1>
            <TextField
                key='editor1'
                id="standard-basic"
                InputProps={{
                    style: {
                        fontFamily: "'Prata', serif"
                    }
                }}
                label="username"
                type="text"
                value={props.username}
                onChange={e => props.setUsername(e.target.value)}
            />
            <br />
            <TextField
                key='editor2'
                id="standard-basic"
                InputProps={{
                    style: {
                        fontFamily: "'Prata', serif"
                    }
                }}
                label="password"
                type="password"
                value={props.password}
                onChange={e => props.setPassword(e.target.value)}
            />
            <br />
            <br />
            <button type="submit">LOGIN!</button>
            {props.error ? <p>{props.error}</p> : null}
        </form>
    )
}

export default withRouter(LoginPage)