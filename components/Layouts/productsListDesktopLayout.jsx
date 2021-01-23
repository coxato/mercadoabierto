import React from 'react';
// components
import AppLayout from '../Layouts/appLayout';
import ProductsList from '../Products/productsList';


const ProductListDesktopLayout = () => {
    return (
        <AppLayout>
            <ProductsList />
        </AppLayout>
    );
}

export default ProductListDesktopLayout;