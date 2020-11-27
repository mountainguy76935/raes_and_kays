import React from 'react';
import { SidesRight } from './sides-right.component';
import { SidesLeft } from './sides-left.component';
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

const EditSidesBlock = styled.div`
    display: grid;
    grid-template-columns: 100%;
    padding: 3%; 
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

const AddMore = styled.div`
    padding: .5em;
    border-radius: 5%;
    width: 150px;
    margin: auto;
    box-shadow:
    0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12)
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
        props.setSidesGenre([...newItems])
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
                                handleClick={() => props.handleFunction(item.name, handleDelete)}
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
            <AddMore>
                <h4>Add More Sides!</h4>
                <DetailButton
                    purpose="add"
                    handleClick={() => handleAdd(props.sides, props.setSides, { name: 'insert side here!', genre: props.genre })}
                />
            </AddMore>
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

    const handleFunction = (item, cb) => {
        let index;
        index = props.sides.findIndex(a => a.name === item)
        cb(index, props.sides, props.setSides)
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
        <EditSidesBlock>
            <SidesLeft>
                <SideGenre
                    genre={'Puerto Rican'}
                    sidesGenre={prSides}
                    setSidesGenre={setPrSides}
                    handleSubmit={handleSubmit}
                    handleFunction={handleFunction}
                    sides={props.sides}
                    setSides={props.setSides}
                />
            </SidesLeft>
            <br />
            <SidesRight>
                <SideGenre
                    genre={'Soul'}
                    sidesGenre={soulSides}
                    setSidesGenre={setSoulSides}
                    handleSubmit={handleSubmit}
                    handleFunction={handleFunction}
                    sides={props.sides}
                    setSides={props.setSides}
                />
            </SidesRight>
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
            <AddMore>
                <h4>Add more Carousel Pictures</h4>
                <DetailButton
                    purpose="add"
                    handleClick={() => handleAdd(props.carouselItems, props.setCarouselItems, { name: '', image: '' })}
                />
            </AddMore>
        </EditSidesBlock>
    )
}