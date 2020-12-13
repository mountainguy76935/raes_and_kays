import React from 'react';
import Button from '@material-ui/core/Button'
import { ChangeOrder } from '../change_order/change_order.component';
import { EditForm } from '../edit-form/edit-form.component';
import { handleEdit, handleAdd, handleDelete } from '../../functions/detail-buttons';
import { DetailButton } from '../detail-button/detail-button.component';
import styled from 'styled-components';

const SidesEdit = styled.div`
        display: flex;
        margin: auto;
    `

export const SideGenre = (props) => {
    const [open, setOpen] = React.useState(false)

    const handleDragEnd = (result) => {
        let newItems = Array.from(props.sidesGenre)
        if (!result.destination || !result.source) {
            return;
        }
        let destination = result.destination.index;
        let source = result.source.index
        const [newItem] = newItems.splice(source, 1)
        newItems.splice(destination, 0, newItem)
        let newSides = [...props.sides].filter(a => a.genre !== props.genre);
        newSides = [...newSides, ...newItems]
        props.setSides(newSides)
    }

    const handleFunction = (item, cb) => {
        let index;
        index = props.sides.findIndex(a => a.name === item)
        cb(index, props.sides, props.setSides)
    }

    return (
        <React.Fragment>
            <ChangeOrder
                open={open}
                setOpen={setOpen}
                items={props.sidesGenre ? [...props.sidesGenre.map(a => a.name)] : []}
                handleDragEnd={handleDragEnd}
            />
            <Button
                onClick={() => setOpen(true)}
                variant="contained"
                color="primary"
                style={{ width: '200px', margin: 'auto' }}
            >
                Change the order of the {props.genre} sides!
                </Button>
            <br />
            <br />
            <h4><u>{props.genre} Sides</u></h4>
            {props.sidesGenre[0] ?
                props.sidesGenre.map((item, index) => {
                    return (
                        <SidesEdit key={index}>
                            <DetailButton
                                purpose="delete"
                                handleClick={() => handleFunction(item.name, handleDelete)}
                            />
                            <DetailButton
                                purpose="edit"
                                handleClick={() => handleEdit(index, props.sidesGenre, props.setSidesGenre)}
                            />
                            {item.edit ?
                                <React.Fragment>
                                    <EditForm
                                        name={item.name}
                                        type="text"
                                        label="Side Name"
                                        handleSubmit={props.handleSubmit}
                                        genre={props.genre}
                                    />
                                </React.Fragment> :
                                <p>{item.name}</p>
                            }
                        </SidesEdit>
                    )
                }) : null
            }
            <Button
                variant="contained"
                color="secondary"
                onClick={() => handleAdd(props.sides, props.setSides, { name: 'insert side here!', genre: props.genre })}
                style={{ width: '200px', margin: 'auto' }}
            >
                Add more {props.genre} Sides
            </Button>
        </React.Fragment>
    )
}