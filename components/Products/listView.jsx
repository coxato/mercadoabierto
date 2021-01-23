import React from 'react';
import { List } from 'semantic-ui-react';
// components
import ProductCardInList from '../Cards/productCardInList';

const ProductListView = ({ products }) => {
    return (
        <List divided>
            {
                products.map( (product, idx) => (
                    <ProductCardInList key={idx} {...product} />
                ))
            }
        </List>
    );
}
 
export default ProductListView;