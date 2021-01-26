import React, { useContext } from 'react';
// components
import ProductListMobileMenu from './productListMobileMenu';
import ProductListDesktopMenu from './productListDesktopMenu';
// context
import { ProductListContext } from '../ContextsAndHOCs/productsListHOC';

const ProductsListMenu = ({ isMobile = true }) => {
    // const { isMobile } = useContext(ProductListContext);
    
    if(isMobile) return <ProductListMobileMenu />;

    return <ProductListDesktopMenu />;
}
 
export default ProductsListMenu;