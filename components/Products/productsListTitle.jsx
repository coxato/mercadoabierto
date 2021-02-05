import React, { useContext } from 'react';
// utils
import { getCategoryFromPath, getSearchQuery } from '../../utils/urlUtils';
import { cutText } from '../../utils/textUtils';
// context
import { ProductListContext } from '../ContextsAndHOCs/productsListHOC';

const ProductsListTitle = ({ isMobile = true }) => {
    
    const { productsData: { totalItems } } = useContext(ProductListContext);

    return (
        <div>
            <h1 className="title">{
                cutText(getCategoryFromPath() || getSearchQuery(), isMobile ? 40 : 100)
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
                    margin: 0;
                    line-height: 0;
                }
            `
            }
            </style>
        </div>
    );
}
 
export default ProductsListTitle;