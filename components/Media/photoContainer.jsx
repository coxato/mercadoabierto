import React, { useState } from 'react';
// components
import PhotoUploadComponent from './photoUploadComponent';
import PhotoAlreadyUploaded from './photoAlreadyUploaded';

// like typescript enum
const steps = {
    toUpload: 0,
    uploading: 1,
    uploaded: 2
}

// TODO: 
// have an unique id per photo, so the full name should be: `${id_album}-${id_photo}-${imageFile.name}`;

const PhotoUploadContainer = ({ saveUrlCallback, deleteUrlCallback, uploadedImageUrl, index }) => {

    const defaultImageUrl = '/images/default-image.png'; 

    const [imageFile, setImageFile] = useState(null);
    const [imageUrl, setImageUrl] = useState(uploadedImageUrl || defaultImageUrl);
    const [step, setStep] = useState(steps.toUpload);

    const handleSetImage = (image) => {
        setImageFile(image);
        setStep(steps.uploading);
    }

    const handleSetImageUrl = (url, cb = ()=>{}) => {
        setImageUrl(url)
        // setStep(steps.uploaded);
        setStep(steps.toUpload);
        cb();
        // parent component callback
        saveUrlCallback(url);
    }

    const deleteCallback = () => {
        const oldUrl = imageUrl;

        setImageUrl(defaultImageUrl);
        setStep(steps.toUpload);
        
        // parent component callback
        deleteUrlCallback(oldUrl);
    }


    if(uploadedImageUrl) return (
        <div className={ index === 0 ? 'photo-form-cover' : ''}>
            <PhotoAlreadyUploaded 
                deleteCallback={deleteCallback} 
                uploadedImageUrl={uploadedImageUrl}    
            />
        </div>
    );

    return (
        <PhotoUploadComponent
            {...{
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