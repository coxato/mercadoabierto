import React from 'react';
// components
import ProductListMobileMenu from './productListMobileMenu';
import ProductListDesktopMenu from './productListDesktopMenu';

const ProductsListMenu = ({ isMobile = true }) => {
    
    if(isMobile) return <ProductListMobileMenu />

    return <ProductListDesktopMenu />
}
 
export default ProductsListMenu;