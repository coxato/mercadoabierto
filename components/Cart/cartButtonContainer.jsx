import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import cartRequests from '../../requests/cart';
import userRequests from '../../requests/user';
import { Message } from 'semantic-ui-react';
// store
import { useCart } from '../../store/cart';
import { useUserInfo } from '../../store/user';
// components
import CardButtonComponent from './cardButtonComponent';
// import SimpleCartHOC from './simpleCartHOC';

const AddToCartButtonContainer = ({userId, productId, avaliableQty, price}) => {
    
    const { addCartItem } = useCart();
    const { id_user } = useUserInfo();
    const router = useRouter();

    const [qty, setQty] = useState(1);
    const [money, setMoney] = useState(0);
    const [loading, setLoading] = useState(false);
    const [canBuy, setCanBuy] = useState(true);

    useEffect(() => {
        if(id_user){
            userRequests.getUserMoney(id_user)
                .then( _money => {
                    setMoney(_money);
                    // not enough money
                    if(qty * price > _money) setCanBuy(false);
                })
        }
    }, []);

    const handleChange = value => {
        setQty(value);
        setCanBuy(value * price <= money);
    }
    
    // save in DB
    const handleAdd = async () => {
        // is logged
        if(id_user){
            if(!canBuy) return;

            setLoading(true);
    
            const productAdded = await cartRequests.addToCart({ productId, qty, userId });
            
            setLoading(false);
            
            // save in reducer
            addCartItem(productId, productAdded, qty);
        }
        // not logged, redirect
        else{
            router.push('/login');
        }
    }

    return (
        
            avaliableQty >= 1
            ?
            <CardButtonComponent
                avaliableQty={avaliableQty}
                handleChange={handleChange}
                value={qty}
                handleClick={handleAdd}
                loading={loading}
                canBuy={canBuy}
            />
            :
            <Message 
                header="Sorry this product is unavaliable"
                content="The product is out of stock"
                warning  
            />
    );
}
 
export default AddToCartButtonContainer;