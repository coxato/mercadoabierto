import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useProductCreation } from '../../../store/product';
import productRequests from '../../../requests/products';
import { productFormValidation } from '../../../utils/productFormValidation';
// components
import ProductForm from './ProductForm';
import ProductPhotos from './ProductPhotosForm';
import ProductErrorManagement from './productFormErrorManage';
import ProductSuccessCreated from './ProductCreated';
// style for forms
import s from './product-forms.module.css';

const ProductFormContainer = () => {

    // context
    const { state: contextState } = useProductCreation();
    // local state
    const [ productData, setProductData ] = useState({});
    const [ photosUrls, setPhotosUrls ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ errors, setErrors ] = useState(false);
    const [ success, setSuccess ] = useState(false);
    const [ openModal, setOpenModal ] = useState(false);
    const [ productCreatedData, setProductCreatedData ] = useState(null);

    // handlers
    const handleChange = ({target: { name, value }}) => {
        setProductData( prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const getPhotos = urlsArr => setPhotosUrls(urlsArr);

    const handleSubmit = (ev) => {
        ev.preventDefault();
        setLoading(true);
        
        const data = {
            ...productData,
            id_album: contextState.id_album,
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

        // create and save product
        productRequests.saveProduct(data)
            .then( createdData => {
                setProductCreatedData(createdData);
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
                    <ProductSuccessCreated productCreatedData={productCreatedData} />
                ) : (
                <>
                    <ProductErrorManagement errors={errors} open={openModal} setOpen={setOpenModal} />
                    
                    <Form onSubmit={handleSubmit} autoComplete="off" className={s.form}>   

                        <ProductForm {...{handleChange}} />
                        
                        <ProductPhotos urlsCallback={getPhotos} />
                        
                        <Button type="submit" fluid size="huge" primary loading={loading}>
                            Ready, publish my product!
                        </Button>
                    </Form>
                </>)
            }

        </div>
    );
}
 
export default ProductFormContainer;