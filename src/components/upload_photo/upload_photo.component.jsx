import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components'


const MenuImage = styled.img`
    text-align: center;
    max-width: 90%;
    min-width: 230px;
    flex-grow: 1;
    box-shadow:
    0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12)
`

export const UploadPhoto = props => (
    <React.Fragment>
        <MenuImage
            src={props.preview ? props.preview : props.image ? props.image : require('../../images/no-image.jpg')}
            alt={props.name}
        />
        <br />
        {props.edit ?
            <React.Fragment>
                <Button
                    variant="contained"
                    component="label"
                >
                    Change Picture
                                        <input
                        type="file"
                        hidden
                        onChange={props.handleImage}
                    />
                </Button>
                <br />
            </React.Fragment> :
            null}
    </React.Fragment>
)