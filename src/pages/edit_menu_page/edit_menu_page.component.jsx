import React from 'react';
import './edit_menu_page.styles.css'
import { withRouter } from 'react-router-dom';
import { TextareaAutosize } from '@material-ui/core';
import { DetailButton } from '../../components/detail-button/detail-button.component';
import { Divider } from '../../components/divider/divider.component';
import { MenuItem } from '../../components/menu-item/menu-item.component';
import { Title } from '../../components/title/title.component';
import { MenuStyle } from '../../components/menu/menu-style.component';
import { EditSides } from '../../components/sides/edit-sides.component';
import { MenuSelect } from '../../components/menu/menu-select.component';
import { MenuDisclaimer } from '../../components/menu/menu-disclaimer.component';
import { EditDisclaimer } from '../../components/edit-disclaimer/edit-disclaimer.component';
import { handleEdit, handleAdd, handleDelete } from '../../functions/detail-buttons';
import { ConfirmDialog } from '../../components/confirm_dialog/confirm_dialog.component';
import { ChangeOrder } from '../../components/change_order/change_order.component';
import Button from '@material-ui/core/Button';


const EditMenuPage = (props) => {
    const [openDates, setOpenDates] = React.useState([])
    const [entreeItems, setEntreeItems] = React.useState([])
    const [carouselItems, setCarouselItems] = React.useState([])
    const [sideItems, setSideItems] = React.useState([])
    const [price, setPrice] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [headerEdit, setHeaderEdit] = React.useState(false)
    const [popup, setPopup] = React.useState({ title: '', description: '' })
    const [disclaimer, setDisclaimer] = React.useState('')
    const [dialog, setDialog] = React.useState(false);
    const [deleteInd, setDeleteInd] = React.useState(0)
    const [changeOrder, setChangeOrder] = React.useState(false);

    const handleImage = (index, data, array, cb) => {
        let newData = [...array]
        let newItem = newData[index]
        newItem.image = data;
        newItem.imageName = data.name
        newData.splice(index, 1, newItem)
        cb(newData);
    }

    const handleLoad = () => {
        setOpenDates(props.data.openDates)
        setEntreeItems(props.data.entreeItems)
        setCarouselItems(props.data.carouselItems)
        setSideItems(props.data.sideItems)
        setPrice(props.data.price)
        setDescription(props.data.description)
        setPopup(props.data.popup)
        setDisclaimer(props.data.disclaimer)
    }

    React.useEffect(() => {
        handleLoad()
        //eslint-disable-next-line
    }, [])

    const handleSubmitCarousel = (i, data) => {
        const newArray = [...carouselItems];
        let itemRef = newArray[i];
        console.log('in carousel', data)
        itemRef.name = data.name;
        itemRef.image = data.image;
        delete itemRef.edit
        setCarouselItems(newArray)
    }

    const handleSubmitNew = (i, data) => {
        console.log('in new', data, entreeItems)
        const newArray = [...entreeItems];
        let itemRef = newArray[i];
        itemRef.name = data.name;
        itemRef.description = data.description;
        delete itemRef.edit
        setEntreeItems(newArray)
    }

    const handleDragEnd = (result) => {
        let newItems = Array.from(entreeItems)
        if (!result.destination || !result.source) {
            return;
        }
        let destination = result.destination.index;
        let source = result.source.index
        const [newItem] = newItems.splice(source, 1)
        newItems.splice(destination, 0, newItem)
        setEntreeItems([...newItems])
    }

    const handleSubmitMenu = () => {
        const data = new FormData();
        data.append('openDates', JSON.stringify(openDates))
        data.append('popup', JSON.stringify(popup))
        entreeItems.map(item => data.append('entreeImage', item.image))
        carouselItems.map(item => data.append('carouselImage', item.image))
        data.append('price', price)
        data.append('description', description)
        data.append('disclaimer', disclaimer)
        data.append('sideItems', JSON.stringify(sideItems))
        data.append('entreeItems', JSON.stringify(entreeItems))
        data.append('carouselItems', JSON.stringify(carouselItems))
        fetch(process.env.REACT_APP_SOURCE + '/post-menu', {
            method: "POST",
            body: data,
            headers: {
                Authorization: 'bearer ' + localStorage.getItem('token')
            }
        })
            .then((res) => res.json())
            .then(response => {
                if (response.success) {
                    alert('saved!')
                    props.history.push('/menu');
                } else {
                    alert(response.message)
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <MenuStyle>
            <ConfirmDialog
                handleClick={() => handleDelete(deleteInd, entreeItems, setEntreeItems)}
                open={dialog}
                setClosed={() => setDialog(false)}
            />
            <ChangeOrder
                open={changeOrder}
                setOpen={setChangeOrder}
                entreeNames={entreeItems ? [...entreeItems.map(a => a.name)] : []}
                handleDragEnd={handleDragEnd}
            />
            <Title />
            <Divider />
            <MenuSelect>
                {headerEdit ?
                    <React.Fragment>
                        <TextareaAutosize
                            aria-label="empty textarea"
                            cols={40}
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            placeholder={'enter a menu description (eg Any 3 items)'}
                        />
                        <TextareaAutosize
                            aria-label="empty textarea"
                            cols={40}
                            value={price}
                            onChange={e => setPrice(e.target.value)}
                            placeholder={'enter a price'}
                        />
                        <br />
                        <Button
                            onClick={() => setHeaderEdit(false)}
                            variant="contained"
                            color="secondary"
                            style={{ width: '200px', margin: 'auto' }}
                        >Submit!</Button>
                    </React.Fragment> :
                    <React.Fragment>
                        {description} ${price}
                        <DetailButton
                            purpose="edit"
                            handleClick={() => setHeaderEdit(true)}
                        />
                    </React.Fragment>
                }
            </MenuSelect>
            <br />
            <Button
                onClick={() => setChangeOrder(true)}
                variant="contained"
                color="primary"
                style={{ width: '200px', margin: 'auto' }}
            >
                Change the order of the entree items!
                </Button>
            {entreeItems ?
                entreeItems.map((item, index) => (
                    <React.Fragment key={index}>
                        <MenuItem
                            edit={item.edit ? item.edit : false}
                            item={item}
                            index={index}
                            handleSubmitNew={handleSubmitNew}
                            handleImage={handleImage}
                            entreeItems={entreeItems}
                            setEntreeItems={setEntreeItems}
                            editing={true}
                        />
                        <div className="edit-details">
                            {item.edit ?
                                null :
                                <React.Fragment>
                                    <DetailButton
                                        purpose="delete"
                                        handleClick={() => {
                                            setDialog(true)
                                            setDeleteInd(index)
                                        }}
                                    />
                                    <DetailButton
                                        purpose="edit"
                                        handleClick={() => handleEdit(index, entreeItems, setEntreeItems)}
                                    />
                                </React.Fragment>
                            }
                        </div>
                        <Divider />
                    </React.Fragment>
                )) :
                null
            }
            <Button
                variant="contained"
                color="secondary"
                onClick={() => handleAdd(entreeItems, setEntreeItems)}
                style={{ width: '200px', margin: 'auto' }}
            >
                Add more Entree Items
            </Button>
            <br />
            <Divider />
            <EditSides
                sides={sideItems}
                setSides={setSideItems}
                handleEdit={handleEdit}
                handleAdd={handleAdd}
                handleDelete={handleDelete}
                handleSubmit={handleSubmitCarousel}
                carouselItems={carouselItems}
                setCarouselItems={setCarouselItems}
                handleImage={handleImage}
            />
            <MenuDisclaimer>
                <EditDisclaimer setDisclaimer={setDisclaimer} disclaimer={disclaimer} />
            </MenuDisclaimer>
            <br />
            <Button
                variant="contained"
                color="primary"
                onClick={handleSubmitMenu}
                style={{ width: '200px', margin: 'auto' }}
            >
                Ready? Submit everything by clicking here!
            </Button>
        </MenuStyle >
    )
}

export default withRouter(EditMenuPage)