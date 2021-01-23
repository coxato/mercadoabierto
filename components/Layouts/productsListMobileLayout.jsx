import React from 'react';
// components
import AppLayout from '../Layouts/appLayout';
import ProductsList from '../Products/productsList';


const ProductListMobileLayout = () => {
    return (
        <AppLayout>
            <ProductsList />
        </AppLayout>
    );
}

export default ProductListMobileLayout;