// if the photo is already uploaded, just show it and delete it onClick
import React, { useState } from 'react'
import { Dimmer, Image } from 'semantic-ui-react';
// components
import PhotoDelete from './photoDelete';


const PhotoAlreadyUploaded = ({ deleteCallback, uploadedImageUrl}) => {

    const [active, setActive] = useState(false);

    const handleShow = () => setActive(true);
    const handleHide = () => setActive(false);

    const content = <PhotoDelete {...{deleteCallback, uploadedImageUrl}} />;

    return (
        <div className="container">
            <Dimmer.Dimmable
                as={Image}
                dimmed={active}
                dimmer={{ active, content, inverted: true }}
                onMouseEnter={handleShow}
                onMouseLeave={handleHide}
                fluid
                src={uploadedImageUrl}
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

export default PhotoAlreadyUploaded;