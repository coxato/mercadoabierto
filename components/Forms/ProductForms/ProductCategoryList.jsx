import React from 'react';
import { Form, Header } from 'semantic-ui-react';
import { categoriesOptions } from '../../../utils/constants';
// store
import { useProductState } from '../../../store/productCreation';
// styles
import s from './product-forms.module.css';

const CategorySelectForm = ({handleChange}) => {
    const { productData: { category } } = useProductState();

    return (
        <>
            <Header textAlign="left" content="First, select a category" as="h4" />
            
            <div className={s.formCard}>
                <Form.Select
                    onChange={(_, data) => {
                        handleChange({ target: data })
                    }}
                    name="category"
                    fluid
                    label='Category'
                    options={categoriesOptions}
                    placeholder='Category'
                    defaultValue={category}
                />
            </div>
        </>
    );
}
 
export default CategorySelectForm;