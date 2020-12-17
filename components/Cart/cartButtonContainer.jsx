import React, { useState } from 'react';
import { useRouter } from 'next/router';
import cartRequests from '../../requests/cart';
// store
import { useCart } from '../../store/cart';
import { useUserInfo } from '../../store/user';
// components
import CardButtonComponent from './cardButtonComponent';
// import SimpleCartHOC from './simpleCartHOC';

const AddToCartButtonContainer = ({userId, productId, avaliableQty}) => {
    
    const { addCartItem } = useCart();
    const { id_user } = useUserInfo();
    const router = useRouter();

    const [qty, setQty] = useState(1);
    const [loading, setLoading] = useState(false);
    
    // save in DB
    const handleAdd = async () => {
        // is logged
        if(id_user){
            setLoading(true);
    
            const productAdded = await cartRequests.addToCart({ productId, qty, userId });
            // save in reducer
            addCartItem(productId, productAdded, qty);
            
            setLoading(false);
        }
        // not logged, redirect
        else{
            router.push('/login');
        }
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