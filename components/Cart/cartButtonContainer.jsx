import React, { useState } from 'react';
import cartRequests from '../../requests/cart';
// store
import { useCart } from '../../store/cart';
// components
import CardButtonComponent from './cardButtonComponent';
// import SimpleCartHOC from './simpleCartHOC';

const AddToCartButtonContainer = ({userId, productId, avaliableQty}) => {
    
    const { addCartItem } = useCart();

    const [qty, setQty] = useState(1);
    const [loading, setLoading] = useState(false);
    
    // save in DB
    const handleAdd = async () => {
        setLoading(true);

        const productAdded = await cartRequests.addToCart({ productId, qty, userId });
        // save in reducer
        addCartItem(productId, productAdded, qty);
        
        setLoading(false);
    }

    return (
        <CardButtonComponent
            avaliableQty={avaliableQty}
            handleChange={setQty}
            value={qty}
            handleClick={handleAdd}
            loading={loading}
        />
    );
}
 
export default AddToCartButtonContainer;