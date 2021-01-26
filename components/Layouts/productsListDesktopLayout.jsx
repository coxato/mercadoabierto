import React from 'react';
// components
import AppLayout from '../Layouts/appLayout';
import ProductsList from '../Products/productsList';
import ProductsListTitle from '../Products/productsListTitle';
import Menu from '../Menus/productListMenuContainer';
import Pagination from '../Paginations/productsPagination';
// style
import s from './layoutsStyle/productsListDesktopLayout.module.css';

const ProductListDesktopLayout = () => {
    return (
        <AppLayout>
            <div className={s.left}>
                <div className={`${s.leftTop} ${s.title}`}>
                    <ProductsListTitle isMobile={false} />
                </div>

                <div className={s.leftBottom}>
                    <Menu isMobile={false} />
                </div>
            </div>

            <div className={s.right}>
                <ProductsList />
                <Pagination />
            </div>
        </AppLayout>
    );
}

export default ProductListDesktopLayout;