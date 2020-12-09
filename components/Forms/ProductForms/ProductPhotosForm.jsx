import React, { useState } from 'react';
// components
import { Icon, Header } from 'semantic-ui-react';
import PhotoContainer from '../../Media/photoContainer';
// style for forms
import s from './product-forms.module.css';

const ProductPhotosForm = ({handleChange}) => {
    
    const [ photosUrls, setPhotosUrls ] = useState([]); // uploaded photos
    const [ photosCount, setPhotosCount ] = useState(0);

    const sumPhotoCount = () => photosCount <= 6 ? setPhotosCount(photosCount+1) : null;  
    const removePhotoCount = () => photosCount > 0 ? setPhotosCount(photosCount-1) : null;

    const saveUrlCallback = (url) => {
        const newUrls = [...photosUrls, url];
        
        setPhotosUrls(newUrls);
        
        handleChange({
            target: {
                name: 'photosUrls',
                value: newUrls
            }
        })
    }
    
    const deleteUrlCallback = (url) => {
        console.log( url ? '' : '\n############### no vino url!!!!!\n' );
        const photosFilter = photosUrls.filter( photoUrl => photoUrl !== url );

        setPhotosUrls(photosFilter);
        removePhotoCount();

        handleChange({
            target: {
                name: 'photosUrls',
                value: photosFilter
            }
        })
    }
  
    const renderPhotosContainers = () => {
        let containers = [];
        let i = 0;
        console.log("the urls array, INSIDE handler render function", photosUrls);

        while(i < photosCount){
            containers.push(
                <PhotoContainer
                    {...{ 
                        saveUrlCallback,
                        deleteUrlCallback,
                        uploadedImageUrl: photosUrls[i]
                    }}
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
                    {/* {console.log("the urls array, when delete", photosUrls)} */}
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