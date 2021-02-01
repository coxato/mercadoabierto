import React from 'react';
// components
import AppLayout from '../Layouts/appLayout';
import ProductsListTitle from '../Products/productsListTitle';
import ProductsList from '../Products/productsList';
import Menu from '../Menus/productListMenuContainer';
import Pagination from '../Paginations/productsPagination';
// style
import s from './layoutsStyle/productsListMobileLayout.module.css';


const ProductListMobileLayout = () => {
    return (
        <AppLayout>
            <div className={s.container}>
                <div className={s.menuTop}>
                    <Menu isMobile />
                </div>

                <div className={s.productsTitle}>
                    <ProductsListTitle isMobile />
                </div>

                <div className={s.bottomContainer}>
                    <ProductsList />
                    <Pagination />
                </div>
            </div>
        </AppLayout>
    );
}

export default ProductListMobileLayout;