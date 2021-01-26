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
    value: '{"orderBy":"date","order":"DESC"}'
},
{
    key: 'date2',
    text: 'Date (older)',
    value: '{"orderBy":"date","order":"ASC"}'
},
{
    key: 'price1',
    text: 'Price (low to high)',
    value: '{"orderBy":"price","order":"ASC"}'
},
{
    key: 'price2',
    text: 'Price (high to low)',
    value: '{"orderBy":"price","order":"DESC"}'
}]

const ProductListDesktopMenu = ({ reload }) => {
    const { setProductsView, productsView, orderQuery } = useContext(ProductListContext);

    return (
        <div className={s.desktopContainer}>
            <div className={s.separator_d}>
                <h3>Order by</h3>
                <Dropdown 
                    defaultValue={JSON.stringify(orderQuery)} 
                    options={orderOptions}
                    onChange={reload} 
                />
            </div>

            <div className={s.separator_d}>
                <h3>Products view</h3>
                <div className={s.viewIconsDesktop}>
                    <Icon 
                        color={productsView === 'grid' ? 'black' : 'grey'}  
                        onClick={() => setProductsView('grid')}
                        name="th large"
                        size="big"
                        title="grid view"
                    />
                    <Icon 
                        color={productsView === 'list' ? 'black' : 'grey'} 
                        onClick={() => setProductsView('list')}
                        name="th list"
                        size="big"
                        title="list view"
                    />
                </div>
            </div>

            <div className={s.separator_d}>
                <h3>Condition</h3>
                <div className={s.newused_d}>
                    <p>New</p>
                    <p>Used</p>
                </div>
            </div>
        </div>
    );
}
 
export default ProductListDesktopMenu;