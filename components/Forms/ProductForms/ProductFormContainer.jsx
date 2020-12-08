import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useProductCreation } from '../../../store/product';
// components
import ProductForm from './ProductForm';
import ProductPhotos from './ProductPhotosForm';
// style for forms
import s from './product-forms.module.css';

const ProductFormContainer = () => {

    const { state: { id_album } } = useProductCreation();


    return (
        <div className={s.container}>
            <Form className={s.form}>
                <ProductForm />
                <ProductPhotos />
                <Button type="submit" fluid size="huge" primary >Ready, publish my product!</Button>
            </Form>
        </div>
    );
}
 
export default ProductFormContainer;