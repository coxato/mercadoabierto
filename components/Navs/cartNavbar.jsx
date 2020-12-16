import React, { useEffect } from 'react';
import { useCart } from '../../store/cart';
import { useUserInfo } from '../../store/user';
import { Icon } from 'semantic-ui-react';
import cartRequests from '../../requests/cart';
// style
import s from './cartNavbar.module.css';

const CartInNav = () => {

    const { getCartItems, restoreCart } = useCart();
    const { id_user } = useUserInfo();

    useEffect(() => {
        if(getCartItems().totalItemsQty === 0){
            cartRequests.getUserCartItems(id_user)
                .then( items => {
                    if(items.length){
                        restoreCart(items);
                    }
                })
                .catch(console.error);
        }
    }, []);

    return (
        <div className={s.container}>
            <Icon name="shop" color="grey" />
            <div className={s.txt}>( {getCartItems().totalItemsQty} )</div>
        </div>
    );
}
 
export default CartInNav;