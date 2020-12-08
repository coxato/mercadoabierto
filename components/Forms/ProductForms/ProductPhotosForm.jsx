import React, { useState } from 'react';
// components
import { Icon, Header } from 'semantic-ui-react';
import PhotoContainer from '../../Media/photoContainer';
// style for forms
import s from './product-forms.module.css';

const ProductPhotosForm = () => {
    
    const [ photosUrls, setPhotosUrls ] = useState([]); // uploaded photos
    const [ photosCount, setPhotosCount ] = useState(0);

    const sumPhotoCount = () => photosCount <= 6 ? setPhotosCount(photosCount+1) : null;  
    const removePhotoCount = () => photosCount > 0 ? setPhotosCount(photosCount-1) : null;

    const saveUrlCallback = (url) => {
        setPhotosUrls( prevState => [...prevState, url]);
    }
    
    const deleteUrlCallback = (url) => {
        const photosFilter = photosUrls.filter( photoUrl => photoUrl !== url );

        removePhotoCount();
        setPhotosUrls(photosFilter);
    }
  
    const renderPhotosContainers = () => {
        let containers = [];
        let i = 0;

        while(i < photosCount){
            containers.push(
                <PhotoContainer
                    {...{ saveUrlCallback, deleteUrlCallback }}
                    key={i}
                />
            )
            i++;
        }

        return containers;
    }

    return (
        <div>
            <Header as="h4" textAlign="left" content="People need to see photos, add some!" />

            <div className={s.formCard}>
                <div className={s.photosContainer}>

                    {renderPhotosContainers()}

                    {
                        photosCount < 6 && (
                            <div onClick={sumPhotoCount} className={s.addMore}>
                                <Icon name="plus circle" color="blue" size="huge" />
                            </div>
                        )
                    }

                </div>
            </div>
        </div>
    );
}
 
export default ProductPhotosForm;