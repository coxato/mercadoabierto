import React, { useContext } from 'react';
// utils
import { getCategoryFromPath, getSearchQuery } from '../../utils/urlUtils';
import { cardTitle } from '../../utils/textUtils';
// context
import { ProductListContext } from '../ContextsAndHOCs/productsListHOC';

const ProductsListTitle = ({ isMobile = true }) => {
    
    const { productsData: { totalItems } } = useContext(ProductListContext);

    return (
        <div>
            <h1 className="title">{
                cardTitle(getCategoryFromPath() || getSearchQuery(), 120)
            }</h1>

            <h3 className="qty">{totalItems} {'result' + (totalItems === 1 ? '' : 's')}</h3>


            <style jsx>
            {
            `
                .title{
                    font-size: ${isMobile ? '19px' : '26px'};
                    font-weight: bolder;
                }
                .qty{
                    font-size: 14px;
                }
            `
            }
            </style>
        </div>
    );
}
 
export default ProductsListTitle;