import React, { useState, useEffect } from 'react';
// components
import PhotoUploadComponent from './photoUploadComponent';

// like typescript enum
const steps = {
    toUpload: 0,
    uploading: 1,
    uploaded: 2
}

let successUploadTimer;

// TODO: 
// have an unique id per photo, so the full name should be: `${id_album}-${id_photo}-${imageFile.name}`;

const PhotoUploadContainer = ({ saveUrlCallback, deleteUrlCallback }) => {

    const defaultImageUrl = '/images/default-image.png'; 

    const [imageFile, setImageFile] = useState(null);
    const [imageUrl, setImageUrl] = useState(defaultImageUrl);
    const [step, setStep] = useState(steps.toUpload);

    const handleSetImage = (image) => {
        setImageFile(image);
        setStep(steps.uploading);
    }

    const handleSetImageUrl = (url, cb = ()=>{}) => {
        successUploadTimer = setTimeout(() => {
            setImageUrl(url)
            setStep(steps.uploaded);
            cb();
            // parent component callback
            saveUrlCallback(url);
        }, 1500);
    }

    const deleteCallback = () => {
        const oldUrl = uploadedImageUrl || imageUrl;

        setImageUrl('/images/default-image.png');
        setStep(steps.toUpload);
        
        // parent component callback
        deleteUrlCallback(oldUrl);
    }

    useEffect(() => {
        return () => {
            clearTimeout(successUploadTimer);
        }
    }, []);

    return (
        <PhotoUploadComponent
            {...{
                imageUrl,
                imageFile,
                handleSetImage,
                handleSetImageUrl,
                deleteCallback,
                step
            }}
        />
    );
}
 
export default PhotoUploadContainer;