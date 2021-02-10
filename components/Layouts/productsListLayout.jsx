import React from 'react';
// layouts
import ProductsMobileLayout from './productsListMobileLayout';
import ProductsDesktopLayout from './productsListDesktopLayout';
// HOC
import { ProductsListHOC } from '../ContextsAndHOCs/productsListHOC';
// utils
import { getScreenData } from '../../utils/screen';

function ProductListLayout({ productsData }) {

    const { isMobile, currentDevice } = getScreenData();

    return (
        <ProductsListHOC {...{currentDevice, productsData}} >
            {
                isMobile
                ?
                <ProductsMobileLayout />
                :
                <ProductsDesktopLayout />
            }
        </ProductsListHOC>
    )

}

export default ProductListLayout;