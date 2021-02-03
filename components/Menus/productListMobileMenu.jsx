import React, { useState, useContext } from 'react';
import { Icon } from 'semantic-ui-react';
// context
import { ProductListContext } from '../ContextsAndHOCs/productsListHOC';
// modals
import { MobileFilterMenu, MobileOrderMenu } from './mobileModalsMenu';
// style
import s from './productsMenu.module.css';

const ProductListMobileMenu = () => {
    const { setProductsView, productsView } = useContext(ProductListContext);
    const [showOrderModal, setShowOrderModal] = useState(false);
    const [showFilterModal, setShowFilterModal] = useState(false);

    // handlers
    const handleView = () => {
        setProductsView(productsView === 'list' ? 'grid' : 'list');
    }

    // render
    return (
        <div className={s.mobileContainer}>
            <MobileOrderMenu open={showOrderModal} setOpen={setShowOrderModal} />

            <MobileFilterMenu open={showFilterModal} setOpen={setShowFilterModal} />

            <div className={s.menuItemMobile} onClick={() => setShowOrderModal(true)}>
                <Icon color="blue" name="exchange" style={{transform: 'rotateZ(90deg)'}} />
                Order
            </div>

            <div className={s.divider_m} />

            <div className={s.menuItemMobile} onClick={handleView}>
                <Icon color="blue" name={productsView === 'list' ? 'square full' : 'list'} />
                {productsView === 'list' ? 'Gallery' : 'List'}
            </div>

            <div className={s.divider_m} />

            <div className={s.menuItemMobile} onClick={() => setShowFilterModal(true)} >
                <Icon color="blue" name="filter" />
                Filter
            </div>
        </div>
    );
}
 
export default ProductListMobileMenu;