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

const PhotoUploadContainer = () => {

    const [imageFile, setImageFile] = useState(null);
    const [imageUrl, setImageUrl] = useState('/images/default-image.png');
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
        }, 1500);
    }

    const deleteCallback = () => {
        setImageUrl('/images/default-image.png');
        setStep(steps.toUpload);
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