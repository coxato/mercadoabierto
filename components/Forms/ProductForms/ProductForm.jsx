import React from 'react';
import { Form, Header, Button } from 'semantic-ui-react';
// components
import TitleAndDescription from './ProductTitleAndDescription';
// style for product forms
import s from './product-forms.module.css';

const categories = ['smartphones', 'tv', 'smartwatchs', 'laptops', 'videogames', 'pc-components'];
const categoriesOpts = categories.map( category => ({
    key: category,
    text: category,
    value: category,
}))

const ProductForm = () => {
    return (
        <div className={s.formCardsContainer}>

            <Header textAlign="center" content="Sell a tech product!" as="h1" />
            
            <Header textAlign="left" content="First, select a category" as="h4" />
            <div className={s.formCard}>
                <Form.Select
                    fluid
                    label='Category'
                    options={categoriesOpts}
                    placeholder='Category'
                />
            </div>

            <Header textAlign="left" content="Now, Describe your product" as="h4" />
            <TitleAndDescription />

            <Header textAlign="left" content="How many will you sell?" as="h4" />
            <div className={s.formCard}>
                <Form.Input
                    name="quantity"
                    fluid
                    label='Quantity'
                    type="number"
                />
            </div>

            <Header textAlign="left" content="Is it new or used?" as="h4" />
            <div className={s.formCard}>
                <div className={s.btns}>
                    <div className={s.btn} style={{borderColor: 'transparent'}}>
                        <Button>New</Button>
                    </div>
                    <div className={s.btn} style={{borderColor: 'var(--blue)'}}>
                        <Button>Used</Button>
                    </div>
                </div>
            </div>

            <Header textAlign="left" content="A very important thing, the price" as="h4" />
            <div className={s.formCard}>
                <Form.Input
                    name="price"
                    fluid
                    label='Price (USD)'
                    type="number"
                />
            </div>

        </div>
    );
}
 
export default ProductForm;