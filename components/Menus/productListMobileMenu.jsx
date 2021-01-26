import React, { useState, useEffect, useContext } from 'react';
import { Icon, Dropdown } from 'semantic-ui-react';
// context
import { ProductListContext } from '../ContextsAndHOCs/productsListHOC';
// style
import s from './productsMenu.module.css';

const orderOptions = [
{
    key: 'date1',
    text: 'Date (newest)',
    value: "{orderBy: 'date', order: 'DESC'}"
},
{
    key: 'date2',
    text: 'Date (older)',
    value: "{orderBy: 'date', order: 'ASC'}"
},
{
    key: 'price1',
    text: 'Price (low to high)',
    value: "{orderBy: 'price', order: 'ASC'}"
},
{
    key: 'price2',
    text: 'Price (high to low)',
    value: "{orderBy: 'price', order: 'DESC'}"
}]

const ProductListMobileMenu = ({ reload }) => {
    const { setProductsView, productsView } = useContext(ProductListContext);

    return (
        <div className={s.mobileContainer}>
            <div>
                <h3>Order by</h3>
                <Dropdown text="Date (newest)" options={orderOptions} />
            </div>

            <div>
                <h3>Products view</h3>
                <div className={s.viewIconsDesktop}>
                    <Icon 
                        color={productsView === 'grid' ? 'black' : 'grey'} 
                        size="small" 
                        onClick={() => setProductsView('grid')}
                        name="th large"
                    />
                    <Icon 
                        color={productsView === 'list' ? 'black' : 'grey'} 
                        size="small" 
                        onClick={() => setProductsView('list')}
                        name="th list"
                    />
                </div>
            </div>

            <div>
                <h3>Condition</h3>
                <p>New</p>
                <p>Used</p>
            </div>
        </div>
    );
}
 
export default ProductListMobileMenu;