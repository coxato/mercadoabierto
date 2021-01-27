import React, { useContext } from 'react';
// components
import ProductListMobileMenu from './productListMobileMenu';
import ProductListDesktopMenu from './productListDesktopMenu';
// context
import { ProductListContext } from '../ContextsAndHOCs/productsListHOC';

const ProductsListMenu = ({ isMobile = true }) => {
    const { reloadPageWithParams, paramsEnum } = useContext(ProductListContext);
    
    // order by date or price
    const handleReloadWithOrder = (_, data) => {
        reloadPageWithParams(paramsEnum.orderQuery, data.value);
    }

    // reload new or used, also reset condition if condition === ''
    const handleReloadProductsCondition = condition => {
        reloadPageWithParams(paramsEnum.filter, condition);
    }
    
    if(isMobile) return (
        <ProductListMobileMenu 
            reloadWithOrder={handleReloadWithOrder}
            reloadProductsCondition={handleReloadProductsCondition} 
        />
    );

    return (
        <ProductListDesktopMenu 
            reloadWithOrder={handleReloadWithOrder}
            reloadProductsCondition={handleReloadProductsCondition} 
        />
    );
}
 
export default ProductsListMenu;