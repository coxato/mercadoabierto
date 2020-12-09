import React, { useState } from 'react'
import { Dimmer, Image } from 'semantic-ui-react';
// components
import PhotoInput from './photoInput';
import PhotoUpload from './photoUpload';
import PhotoDelete from './photoDelete';


const PhotoUploadComponent = ({ 
    step, 
    imageUrl,
    uploadedImageUrl, 
    imageFile, 
    handleSetImage,
    handleSetImageUrl,
    deleteCallback
}) => {

    const [active, setActive] = useState(true);

    const handleShow = () => setActive(true);
    const handleHide = () => {
        // only hide when photo is uploaded, to can see it
        if(step === 2) setActive(false);
    }

    const content = [
        <PhotoInput  {...{handleSetImage}} />,
        <PhotoUpload {...{imageFile, handleSetImageUrl, setActive }} />,
        <PhotoDelete {...{deleteCallback, imageFile, uploadedImageUrl}} />
    ];

    return (
        <div className="container">
            <Dimmer.Dimmable
                as={Image}
                dimmed={active}
                dimmer={{ active, content: content[step], inverted: true }}
                onMouseEnter={handleShow}
                onMouseLeave={handleHide}
                fluid
                src={uploadedImageUrl || imageUrl}
            />

            <style jsx>{`
                .container{
                    border: 2px solid var(--blue);
                    background-color: var(--light); 
                    width: 160px;
                    height: 160px;
                    border-radius: 5px;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                }
            `}</style>
        </div>
    )
}

export default PhotoUploadComponent;