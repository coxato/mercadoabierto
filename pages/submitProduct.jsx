import React, { useEffect } from 'react';
import PhotoUploadContainer from '../components/Media/photoContainer';
// store
import { useProductCreation } from '../store/product';

const SubmitProductPage = () => {

    const [, dispatch ] = useProductCreation();
    
    useEffect(() => {
        dispatch({type: 'new-id_album'});
    }, []);

    return (
        <div>
            <PhotoUploadContainer />
        </div> 
    );
}
 
export default SubmitProductPage;