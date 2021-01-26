import React, { useContext } from 'react';
// components
import ProductGridView from './gridView';
import ProductListView from './listView';
// context
import { ProductListContext } from '../ContextsAndHOCs/productsListHOC';

const ProductsList = () => {
    const { productsView, productsData } = useContext(ProductListContext);

    return (
        <div className="container">
            {
                productsView === 'grid'
                ?
                <ProductGridView products={productsData.results} />
                :
                <ProductListView products={productsData.results} />
            }
            <style jsx>
                {`
                    .container{
                        background: var(--light);
                        overflow: hidden;
                        margin-bottom: 10px;
                        border-radius: 5px;
                    }
                `}
            </style>
        </div>
    );
}
 
export default ProductsList;