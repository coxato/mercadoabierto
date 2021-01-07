import React, { useState } from 'react';
// components
import CartItemsList from './cartItemList';
import CheckAndPay from './checkAndPay';

const ItemListContainer = ({ items }) => {
    const [showPay, setShowPay] = useState(false);
    
    return (
        showPay
        ?
        <CheckAndPay items={items} handleShowPay={() => setShowPay(false)} />
        :
        <CartItemsList items={items} handleShowPay={() => setShowPay(true)} />
    );
}
 
export default ItemListContainer;