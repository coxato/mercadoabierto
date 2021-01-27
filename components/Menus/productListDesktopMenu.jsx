import React, { useContext } from 'react';
// components
import { Icon, Dropdown } from 'semantic-ui-react';
import FilterTags from '../Tags/tagsWithDeleteButton';
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

const ProductListDesktopMenu = ({ reloadWithOrder, reloadProductsCondition }) => {
    const { 
        setProductsView, 
        productsView, 
        orderQuery,
        filter 
    } = useContext(ProductListContext);

    return (
        <div className={s.desktopContainer}>

            {
                filter && (
                    <div className={s.separator_d}>
                        <FilterTags
                            tags={[filter]}
                            onRemove={() => reloadProductsCondition('')}
                        />
                    </div>
                )
            }

            <div className={s.separator_d}>
                <h3>Order by</h3>
                <Dropdown 
                    defaultValue={JSON.stringify(orderQuery)} 
                    options={orderOptions}
                    onChange={reloadWithOrder} 
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

            {
                !filter && (
                    <div className={s.separator_d}>
                        <h3>Condition</h3>
                        <div className={s.newused_d}>
                            <p onClick={() => reloadProductsCondition('new')}>New</p>
                            <p onClick={() => reloadProductsCondition('used')}>Used</p>
                        </div>
                    </div>
                )
            }
        </div>
    );
}
 
export default ProductListDesktopMenu;