import React, { useContext } from 'react'
import { Dimmer, Image } from 'semantic-ui-react';
// components
import PhotoInput from './photoInput';
import PhotoUpload from './photoUpload';
import DynamicDisabledDiv from '../Containers/dynamicDisabled';
// context
import { PhotoMediaContext } from '../ContextsAndHOCs/productPhotoMediaHOC';

const PhotoUploadComponent = ({ 
    step,
    imageFile, 
    handleSetImage,
    handleSetImageUrl
}) => {
    const { isOngoingProcess } = useContext(PhotoMediaContext);

    const content = [
        <PhotoInput  {...{handleSetImage}} />,
        <PhotoUpload {...{imageFile, handleSetImageUrl }} />,
    ];

    return (
        <DynamicDisabledDiv disabled={isOngoingProcess}>
            <div className="container">
                <Dimmer.Dimmable
                    as={Image}
                    dimmed={true}
                    dimmer={{ active: true, content: content[step], inverted: true }}
                    // onMouseEnter={handleShow}
                    // onMouseLeave={handleHide}
                    fluid
                    src="/images/default-image.png"
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
        </DynamicDisabledDiv>
    )
}

export default PhotoUploadComponent;