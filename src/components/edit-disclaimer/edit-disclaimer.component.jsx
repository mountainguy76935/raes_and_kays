import React from 'react';
import { MenuDisclaimer } from '../menu/menu-disclaimer.component';
import { TextareaAutosize } from '@material-ui/core';
import { DetailButton } from '../detail-button/detail-button.component';
import Button from '@material-ui/core/Button'

export const EditDisclaimer = (props) => {
    const [editDis, setEditDis] = React.useState(false)

    return (
        <MenuDisclaimer>
            {editDis ?
                <React.Fragment>
                    <TextareaAutosize
                        value={props.disclaimer}
                        onChange={e => props.setDisclaimer(e.target.value)}
                        placeholder='Add Disclaimer'
                    />
                    <br />
                    <Button
                        onClick={() => setEditDis(false)}
                        variant="contained"
                        color="secondary"
                        style={{ width: '200px', margin: 'auto' }}
                    >Submit</Button>
                </React.Fragment> :
                <React.Fragment>
                    <p>{props.disclaimer}</p>
                    <DetailButton
                        purpose="edit"
                        handleClick={() => setEditDis(true)}
                    />
                </React.Fragment>
            }
        </MenuDisclaimer>
    )
}