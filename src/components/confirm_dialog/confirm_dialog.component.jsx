import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export const ConfirmDialog = props => {

    const handleDelete = () =>{
        props.handleClick()
        props.setClosed()
    }

    return (
        <div>
            <Dialog
                open={props.open}
                onClose={props.setClosed}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Are you sure you want to delete this?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Deleting will erase this menu item FOREVER!!!
          </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleDelete}
                        color="primary">
                        Delete!
          </Button>
                    <Button onClick={props.setClosed} color="primary" autoFocus>
                        Nevermind!
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
