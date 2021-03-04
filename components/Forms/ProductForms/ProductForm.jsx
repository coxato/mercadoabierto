import React from 'react';
import { Form, Header } from 'semantic-ui-react';
// components
import CategoriesList from './ProductCategoryList';
import TitleAndDescription from './ProductTitleAndDescription';
import NewOrUsed from './productNewOrUsed';
// store
import { useProductState } from '../../../store/productCreation';
// style for product forms
import s from './product-forms.module.css';


const ProductForm = ({ handleChange, isEditing }) => {
    const { productData: { quantity, price } } = useProductState();

    return (
        <div className={s.formCardsContainer}>

            <Header textAlign="center" content={isEditing ? 'Update your product' : 'Sell a tech product!'} as="h1" />
            
            <CategoriesList handleChange={handleChange} />

            <Header textAlign="left" content="Now, Describe your product" as="h4" />
            <TitleAndDescription handleChange={handleChange} />

            <Header textAlign="left" content="How many will you sell?" as="h4" />
            <div className={s.formCard}>
                <Form.Input
                    onChange={handleChange}
                    name="quantity"
                    fluid
                    label='Quantity'
                    type="number"
                    required
                    defaultValue={quantity}
                />
            </div>

            <NewOrUsed handleChange={handleChange} />            

            <Header textAlign="left" content="A very important thing, the price" as="h4" />
            <div className={s.formCard}>
                <Form.Input
                    onChange={handleChange}
                    name="price"
                    fluid
                    label='Price (USD)'
                    type="number"
                    required
                    defaultValue={price}
                />
            </div>

        </div>
    );
}
 
export default ProductForm;