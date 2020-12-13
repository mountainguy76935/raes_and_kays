import React from 'react';
import Button from '@material-ui/core/Button';
import { UploadPhoto } from '../upload_photo/upload_photo.component';
import { TextareaAutosize } from '@material-ui/core';

export const EditCarousel = (props) => {
    const [image, setImage] = React.useState('');
    const [name, setName] = React.useState('');
    const [preview, setPreview] = React.useState('')
    const [imageName, setImageName] = React.useState('')

    React.useEffect(() => {
        setImage(props.item.image);
        setName(props.item.name);
        if (props.item.preview) {
            setPreview(props.item.preview)
        }
    }, [props])

    const handleSubmit = () => {
        const data={
            image: image,
            name: name, 
            preview: preview,
            imageName: imageName
        }
        props.handleSubmit(props.index, data, props.carouselItems, props.setCarouselItems)
    }

    const handleImage = async (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        setImage(file);
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
            <UploadPhoto
                image={image}
                name={name}
                preview={preview}
                handleImage={handleImage}
                edit={props.edit}
            />
            <br />
            {props.edit ? 
            <TextareaAutosize 
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder={"item name"}
            /> : 
            null}
            <br />
            {
                props.edit ?
                    <Button
                        onClick={handleSubmit}
                        variant="contained"
                        color="primary"
                    >
                        Submit!
                    </Button> :
                    null
            }
        </React.Fragment>
    )
}