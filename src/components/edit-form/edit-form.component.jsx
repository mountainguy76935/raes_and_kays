import React from 'react';
import { TextareaAutosize } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const EditFormFull = styled.div`
    display: flex;
    flex-direction: column
`

export const EditForm = (props) => {
    const [name, setName] = React.useState(props.name)

    const handleSubmit = () => {
        const value = {
            name: name,
            genre: props.genre
        }
        props.handleSubmit(value, props.name)
    }

    return (
        <EditFormFull>
            <br />
            <TextareaAutosize
                aria-label="empty textarea"
                cols={40}
                placeholder={`${props.genre} Sides`}
                type={props.type}
                onChange={e => setName(e.target.value)}
                value={name}
            />
            <br />
            <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
            >
                Submit!
            </Button>
            <br />
        </EditFormFull>
    )
}