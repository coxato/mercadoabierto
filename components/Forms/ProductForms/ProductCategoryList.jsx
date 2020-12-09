import React from 'react';
import { Form, Header } from 'semantic-ui-react';
// styles
import s from './product-forms.module.css';

const categories = ['smartphones', 'tv', 'smartwatchs', 'laptops', 'videogames', 'pc-components'];
const categoriesOpts = categories.map( category => ({
    key: category,
    text: category,
    value: category,
}))

const CategorySelectForm = ({handleChange}) => {
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
                    options={categoriesOpts}
                    placeholder='Category'
                />
            </div>
        </>
    );
}
 
export default CategorySelectForm;