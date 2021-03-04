import React, { useEffect } from 'react';
import Link from 'next/link';
import { useCart, useCartInfo } from '../../store/cart';
import { useUserInfo } from '../../store/user';
import { Icon } from 'semantic-ui-react';
import cartRequests from '../../requests/cart';
// utils
import { getToken } from '../../utils/token';
// style
import s from './cartNavbar.module.css';

const CartInNav = () => {

    const { id_user } = useUserInfo();
    const { restoreCart } = useCart();
    const cartState = useCartInfo();

    useEffect(() => {
        if(cartState.totalItemsQty === 0){
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
        <Link href={`/cart/${id_user}?token=${getToken()}`} as={`/cart/${id_user}`}>
            <a className={s.container}>
                <Icon name="shop" color="grey" />
                <div className={s.txt}>( {cartState.totalItemsQty} )</div>
            </a>
        </Link>
    );
}
 
export default CartInNav;