import React, { useEffect } from 'react';
// components
import ProductFormContainer from '../components/Forms/ProductForms/ProductFormContainer';
// store
import { useProductCreation } from '../store/product';

const SubmitProductPage = () => {

    const  { dispatch } = useProductCreation();
    
    useEffect(() => {
        dispatch({type: 'new-id_album'});
    }, []);

    return (
        <div>
            <ProductFormContainer />
        </div> 
    );
}
 
export default SubmitProductPage;