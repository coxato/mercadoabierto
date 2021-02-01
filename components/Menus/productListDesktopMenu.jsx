import React, { useContext } from 'react';
import { orderOptions } from '../../utils/constants';
// components
import { Icon, Dropdown } from 'semantic-ui-react';
import FilterTags from '../Tags/tagsWithDeleteButton';
// context
import { ProductListContext } from '../ContextsAndHOCs/productsListHOC';
// style
import s from './productsMenu.module.css';


const ProductListDesktopMenu = () => {
    const { 
        setProductsView, 
        productsView, 
        orderQuery,
        filter,
        reloadProductsCondition,
        reloadWithOrder,
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