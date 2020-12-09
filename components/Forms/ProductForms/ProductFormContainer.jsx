import React, { useState, useEffect } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useProductCreation } from '../../../store/product';
import productRequests from '../../../requests/products';
// components
import ProductForm from './ProductForm';
import ProductPhotos from './ProductPhotosForm';
// style for forms
import s from './product-forms.module.css';

const ProductFormContainer = () => {

    // context
    const { state: contextState } = useProductCreation();
    // local state
    const [ productData, setProductData ] = useState({});

    // handlers
    const handleChange = ({target: { name, value }}) => {
        setProductData( prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = ev => {
        ev.preventDefault();
        // productRequests.saveProduct(productData);
        console.log("the data is: ", productData);
    }



    return (
        <div className={s.container}>

            <Form onSubmit={handleSubmit} autoComplete="off" className={s.form}>
                <ProductForm {...{handleChange}} />
                
                <ProductPhotos {...{handleChange}} />
                
                <Button type="submit" fluid size="huge" primary>
                    Ready, publish my product!
                </Button>
            </Form>

        </div>
    );
}
 
export default ProductFormContainer;