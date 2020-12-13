import React from 'react';
import { ItemDescription } from '../item-description/item-description.component';
import Button from '@material-ui/core/Button';
import { UploadPhoto } from '../upload_photo/upload_photo.component';
import styled from 'styled-components';

const ImageFormat = styled.div`
    display: flexbox; 
    flex-direction: column; 
    margin: auto;
    `

const ButtonFormat = styled.div`
    width: 50px;
    margin: auto;
    `

const MenuRows = styled.div`
    display: flex;
    width: 85%;
    margin: auto;
    padding: 1%;
`

export const MenuItem = (props) => {
    const [preview, setPreview] = React.useState('')
    const [image, setImage] = React.useState(null)
    const [itemName, setItemName] = React.useState('')
    const [itemDescription, setItemDescription] = React.useState('');
    const [imageName, setImageName] = React.useState('')

    const handleSubmit = () => {
        const data = {
            name: itemName,
            description: itemDescription,
            image: image,
            itemName: itemName,
            preview: preview,
            imageName: imageName,
            edit: false
        }
        props.handleSubmit(props.index, data, props.entreeItems, props.setEntreeItems)
    }

    React.useEffect(() => {
        setItemName(props.item.name);
        setItemDescription(props.item.description)
        setImage(props.item.image)
        setPreview(props.item.preview)
    }, [props])

    const handleImage = async (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        setImage(file)
        setImageName(file.name)
        if (window.FileReader) {
            const reader = new FileReader();
            if (file && file.type.match('image.*')) {
                reader.readAsDataURL(file);
            }
            reader.onloadend = () => {
                setPreview(reader.result)
            }
        }
    }

    return (
        <React.Fragment>
            <MenuRows
                style={{ flexFlow: props.index % 2 !== 0 ? 'row wrap-reverse' : 'row wrap' }}
            >
                {props.index % 2 !== 0 ?
                    <ImageFormat>
                        <UploadPhoto
                            handleImage={handleImage}
                            preview={preview}
                            image={props.item.image}
                            name={props.item.name}
                            edit={props.edit}
                        />
                    </ImageFormat>
                    : null
                }
                <br />
                <ItemDescription
                    itemName={itemName}
                    setItemName={setItemName}
                    itemDescription={itemDescription}
                    setItemDescription={setItemDescription}
                    edit={props.edit}
                />
                {props.index % 2 !== 0 ?
                    null :
                    <ImageFormat>
                        <UploadPhoto
                            handleImage={handleImage}
                            preview={preview}
                            image={props.item.image}
                            name={props.item.name}
                            edit={props.edit}
                        />
                    </ImageFormat>
                }
            </MenuRows>
            {props.edit ?
                <ButtonFormat>
                    <Button
                        onClick={handleSubmit}
                        variant="contained"
                        color="primary"
                    >
                        Submit!
                    </Button>
                </ButtonFormat> :
                null}
        </React.Fragment>
    )
}