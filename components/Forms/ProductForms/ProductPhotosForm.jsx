import React, { useState } from 'react';
// components
import { Icon, Header } from 'semantic-ui-react';
import PhotoContainer from '../../Media/photoContainer';
// store and providers
import { useProductState } from '../../../store/productCreation';
import { ProductPhotoMediaHOC } from '../../ContextsAndHOCs/productPhotoMediaHOC';
// style for forms
import s from './product-forms.module.css';

const ProductPhotosForm = ({urlsCallback}) => {
    // get data from store if is editing
    const { photos } = useProductState();
    
    const [ photosUrls, setPhotosUrls ] = useState(
        // uploaded photos or void array if is new
        photos.map( p => p.photo_url)
    ); 
    const [ photosCount, setPhotosCount ] = useState(photos.length);

    const sumPhotoCount = () => photosCount <= 6 ? setPhotosCount(photosCount+1) : null;  
    const removePhotoCount = () => photosCount > 0 ? setPhotosCount(photosCount-1) : null;

    const saveUrlCallback = (url) => {
        const newUrls = [...photosUrls, url];
        
        setPhotosUrls(newUrls);
        
        urlsCallback(newUrls);
    }
    
    const deleteUrlCallback = (url) => {
        const photosFilter = photosUrls.filter( photoUrl => photoUrl !== url );

        setPhotosUrls(photosFilter);
        removePhotoCount();

        urlsCallback(photosFilter)
    }
  

    const renderBoxesToUpload = () => {
        let boxesContainers = [];
        let i = 0;

        while (i < Math.abs(photosCount - photosUrls.length)){
            boxesContainers.push(
                <PhotoContainer 
                    key={i} 
                    saveUrlCallback={saveUrlCallback}
                    deleteUrlCallback={deleteUrlCallback}
                />
            );
            
            i++;
        }
        return boxesContainers;
    }


    const renderPhotosContainers = () => {
        let containers = [];
        let i = 0;

        while (i < photosUrls.length){
            containers.push(
                <PhotoContainer 
                    key={photosUrls[i]} 
                    deleteUrlCallback={deleteUrlCallback}
                    uploadedImageUrl={photosUrls[i]}
                    index={i}
                />
            );
            
            i++;
        }

        return containers;
    }

    return (
        <ProductPhotoMediaHOC>
            <div>
                <Header as="h4" textAlign="left" content="People need to see photos, add some!" />

                <div className={s.formCard}>
                    <div className={s.photosContainer}>
                        
                        { renderPhotosContainers() }
                        { renderBoxesToUpload() }

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
        </ProductPhotoMediaHOC>
    );
}
 
export default ProductPhotosForm;