import React from 'react';
import s from './detailPhotoGallery.module.css';

const borderStyle = (i1, i2) => {
    if(i1 !== i2 ) return {};

    return { backgroundColor: 'var(--blue)'}
}

const overlayStyle = (i1, i2) => {
    if(i1 !== i2 ) return {};

    return { backgroundColor: '#ffffff69' }
}


const PhotosColumn = ({ photos, idx, setPhotoIndex }) => {
    return (
        <div className={s.photosChain}>
            {
                photos.map( ({photo_url}, i) => (
                    <div 
                        key={i} 
                        onClick={() => setPhotoIndex(i)}
                        className={s.photoItemCont}     
                    >
                        <div className={s.activeItem} style={borderStyle(idx, i)}/>

                        <img src={photo_url} alt="product photo" className={s.photoItem} />
                    
                        <div className={s.itemOverlay} style={overlayStyle(idx, i)} />

                    </div>
                ))
            }
        </div>
    );
}

export default PhotosColumn;