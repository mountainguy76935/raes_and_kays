import React from 'react';
import { TextField } from '@material-ui/core';

export const CustomForm = (props) => {
    return (
        <React.Fragment>
            <br />
            <TextField
                id="standard-basic" 
                InputProps={{
                    style: {
                        fontFamily: "'Prata', serif"
                    }
                }}
                label={props.label}
                type={props.type}
                value={props.value}
                onChange={e=>props.handleChange(e.target.value)}
            />
        </React.Fragment>
    )
}