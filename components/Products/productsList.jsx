import React, { useContext } from 'react';
// components
import ProductGridView from './gridView';
import ProductListView from './listView';
import ZeroResultsProducts from '../NotFound/zeroResultsProducts';
// context
import { ProductListContext } from '../ContextsAndHOCs/productsListHOC';

const ProductsList = () => {
    const { productsView, productsData } = useContext(ProductListContext);
    const { results } = productsData;

    return (
        <div className="container">
            {   
                results?.length === 0
                ? 
                <ZeroResultsProducts/> 
                :
                productsView === 'grid'
                ?
                <ProductGridView products={results} />
                :
                <ProductListView products={results} />
            }
            <style jsx>
                {`
                    .container{
                        background: var(--light);
                        overflow: hidden;
                        margin-bottom: 10px;
                        border-radius: 5px;
                        padding-bottom: 30px;
                    }
                `}
            </style>
        </div>
    );
}
 
export default ProductsList;