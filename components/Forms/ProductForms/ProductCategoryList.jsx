import React from 'react';
import { Form, Header } from 'semantic-ui-react';
import { categoriesOptions } from '../../../utils/constants';
// styles
import s from './product-forms.module.css';

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
                    options={categoriesOptions}
                    placeholder='Category'
                />
            </div>
        </>
    );
}
 
export default CategorySelectForm;