import React from 'react';
import { DetailButton } from '../detail-button/detail-button.component';
import { handleEdit, handleAdd, handleDelete } from '../../functions/detail-buttons';
import { ConfirmDialog } from '../../components/confirm_dialog/confirm_dialog.component';
import { EditForm } from '../edit-form/edit-form.component';
import { EditCarousel } from '../carousel/edit_carousel.component'
import { Divider } from '../divider/divider.component';
import { ChangeOrder } from '../change_order/change_order.component';
import styled from 'styled-components';
import Button from '@material-ui/core/Button'

const SidesEdit = styled.div`
        display: flex;
        margin: auto;
    `

const Sides = styled.div`
    width: 20%;
    min-width: 250px;
    font-weight: bold;
    height: 100%;
`

const EditSidesBlock = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    width: 80%;
    margin: auto
`

const EditCarouselBlock = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between
`

const EditCarouselItem = styled.div`
    margin: auto;
    padding-bottom: 5%;
`

const SideGenre = (props) => {
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
                entreeNames={props.sidesGenre ? [...props.sidesGenre.map(a => a.name)] : []}
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

export const EditSides = (props) => {
    const [prSides, setPrSides] = React.useState([]);
    const [soulSides, setSoulSides] = React.useState([]);
    const [dialog, setDialog] = React.useState(false);
    const [deleteInd, setDeleteInd] = React.useState(-1)

    const handleSubmit = (newItem, oldItem) => {
        const newSides = [...props.sides];
        const newIndex = newSides.findIndex(a => a.name === oldItem)
        if (newIndex < 0) {
            newSides.push(newItem);
        } else {
            newSides[newIndex] = newItem
        }
        props.setSides(newSides)
    }

    React.useEffect(() => {
        if (!props.sides) {
            return;
        }
        let sidesTest = [...props.sides];
        setPrSides([...sidesTest.filter(a => a.genre === 'Puerto Rican')])
        setSoulSides([...sidesTest.filter(a => a.genre === 'Soul')])
    }, [props.sides])

    return (
        <React.Fragment>
            <EditSidesBlock>
                <Sides>
                    <SideGenre
                        genre={'Puerto Rican'}
                        sidesGenre={prSides}
                        setSidesGenre={setPrSides}
                        handleSubmit={handleSubmit}
                        sides={props.sides}
                        setSides={props.setSides}
                    />
                </Sides>
                <br />
                <Sides>
                    <SideGenre
                        genre={'Soul'}
                        sidesGenre={soulSides}
                        setSidesGenre={setSoulSides}
                        handleSubmit={handleSubmit}
                        sides={props.sides}
                        setSides={props.setSides}
                    />
                </Sides>
            </EditSidesBlock>
            <Divider />
            <h4>Carousel Pictures</h4>
            <EditCarouselBlock>
                <ConfirmDialog
                    handleClick={() => handleDelete(deleteInd, props.carouselItems, props.setCarouselItems)}
                    open={dialog}
                    setClosed={() => setDialog(false)}
                />
                {props.carouselItems ?
                    props.carouselItems.map((item, index) => (
                        <EditCarouselItem key={index}>
                            <EditCarousel
                                name={item.name}
                                image={item.image}
                                edit={item.edit ? item.edit : false}
                                handleSubmit={props.handleSubmit}
                                index={index}
                                handleImage={props.handleImage}
                                carouselItems={props.carouselItems}
                                setCarouselItems={props.setCarouselItems}
                            />
                            {
                                item.edit ?
                                    null :
                                    <SidesEdit>
                                        <DetailButton
                                            purpose="delete"
                                            handleClick={() => {
                                                setDialog(true)
                                                setDeleteInd(index)
                                            }}
                                        />
                                        <DetailButton
                                            purpose="edit"
                                            handleClick={() => handleEdit(index, props.carouselItems, props.setCarouselItems)}
                                        />
                                    </SidesEdit>
                            }
                        </EditCarouselItem>
                    )) :
                    null
                }
            </EditCarouselBlock>
            <Button
                variant="contained"
                color="secondary"
                onClick={() => handleAdd(props.carouselItems, props.setCarouselItems, { name: '', image: '' })}
                style={{ width: '200px', margin: 'auto' }}
            >
                Add more Carousel Pictures
            </Button>
            <br />
        </React.Fragment>
    )
}