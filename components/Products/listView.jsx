import React from 'react';
import { List } from 'semantic-ui-react';
// components
import ProductCardInList from '../Cards/productCardInList';

const ProductListView = ({ products }) => {
    return (
        <div id="my-list">
            <List divided>
                {
                    products.map( (product, idx) => (
                        <ProductCardInList key={idx} {...product} />
                    ))
                }
            </List>
            <style jsx>
            {`
                #my-list{
                    background: white;
                }
            `}
            </style>
        </div>
    );
}
 
export default ProductListView;