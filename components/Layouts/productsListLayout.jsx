import React, { useState, useEffect } from 'react';
// layouts
import ProductsMobileLayout from './productsListMobileLayout';
import ProductsDesktopLayout from './productsListDesktopLayout';
// HOC
import { ProductsListHOC } from '../ContextsAndHOCs/productsListHOC';

function ProductListLayout({ productsData }) {

    const [isMobile, setIsMobile] = useState(true);
    const [currentDevice, setCurrentDevice] = useState('smartphone');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const width = document.body.clientWidth;

        if( width >= 770 ){
            setIsMobile(false);
            setCurrentDevice('desktop');
        }
        else if( width < 770 && width >= 540 ){
            setCurrentDevice('tablet');
        }
        else{
            setCurrentDevice('smartphone');
        }
        setLoading(false);
    }, []);

    if(loading) return null;

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