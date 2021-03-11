import React, { useState, useEffect } from 'react';
import { Form, Button } from 'semantic-ui-react';
import productRequests from '../../../requests/products';
import { productFormValidation } from '../../../utils/productFormValidation';
// components
import ProductForm from './ProductForm';
import ProductPhotos from './ProductPhotosForm';
import ProductErrorManagement from './productFormErrorManage';
import ProductSuccessCreated from './ProductCreated';
// context providers
import { useProductCreation } from '../../../store/productCreation';
// style for forms
import s from './product-forms.module.css';

const ProductFormContainer = () => {

    // context
    const { state: contextState, dispatch: contextDispatch } = useProductCreation();
    // local state
    const [ productData, setProductData ] = useState(contextState.productData);
    const [ photosUrls, setPhotosUrls ] = useState(contextState.photos.map( p => p.photo_url));
    const [ loading, setLoading ] = useState(false);
    const [ errors, setErrors ] = useState(false);
    const [ success, setSuccess ] = useState(false);
    const [ openModal, setOpenModal ] = useState(false);
    const [ responseData, setResponseData ] = useState(null);
    const { isEditing } = contextState;

    // create random id_album
    useEffect(() => {
        if(!isEditing){
            contextDispatch({type: 'new-id_album'});
        }
    }, []);

    // handlers
    const handleChange = ({target: { name, value }}) => {
        setProductData( prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = (ev) => {
        ev.preventDefault();
        setLoading(true);
        
        const data = {
            ...productData,
            id_album: contextState.productData.id_album,
            cover: photosUrls[0]
        }
        
        const { valid, errorsArr } = productFormValidation(data);
        
        if(!valid){
            setErrors(errorsArr);
            setOpenModal(true);
            setLoading(false);
            return;
        } else{
            setErrors([]);
        }

        const requestMethod = isEditing ? 'updateProduct' : 'saveProduct';

        // create and save product
        productRequests[requestMethod](data)
            .then( _response => {
                setResponseData(_response);
                setLoading(false);
                setSuccess(true);
            })
            .catch( err => {
                setErrors([err.message]);
                setOpenModal(true);
                setLoading(false);
            })
    }


    return (
        <div className={s.container}>

            {
                success ? (
                    <ProductSuccessCreated responseData={responseData} />
                ) : (
                <>
                    <ProductErrorManagement errors={errors} open={openModal} setOpen={setOpenModal} />
                    
                    <Form onSubmit={handleSubmit} autoComplete="off" className={s.form}>   
                        <ProductForm 
                            handleChange={handleChange} 
                            isEditing={isEditing}
                        />
                        
                        <ProductPhotos urlsCallback={setPhotosUrls} />
                        
                        <Button type="submit" fluid size="huge" primary loading={loading}>
                            {`Ready, ${isEditing ? 'update':  'publish'} my product!`}
                        </Button>
                    </Form>
                </>)
            }

        </div>
    );
}
 
export default ProductFormContainer;