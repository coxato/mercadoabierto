import React from 'react';
import { useRouter } from 'next/router';
import { useUserInfo } from '../../store/user';
import { useCartInfo } from '../../store/cart';
import { Header, Button, Label } from 'semantic-ui-react';
// components
import AddToCart from '../Cart/cartButtonContainer';
// style
import s from './products.module.css';

const BasicInfo = ({ title, price, quantity, new: _new, id_user: productUserId }) => {

    const { query, push } = useRouter();
    const { id_user: userId } = useUserInfo();
    const cartState = useCartInfo();

    const handleLink = () => {
        push({
            pathname: `/cart/${userId}`,
            query: { token: localStorage.getItem('token') }
        })
    }

    return (
        <div className={s.basicInfoCont}>
            <div className={s.labelPrice}>
                <Label as='p' color={_new ? 'blue' : 'yellow'} ribbon="right">
                    { _new ? 'NEW' : 'USED' }
                </Label>
            </div>
            
            <div className={s.basicInfoWrapper}>
                <Header as="h1" content={title} />

                <h2 className={s.price} >${price}</h2>

                <div className={s.addToCart}>
                    {
                        productUserId === userId
                        ?
                        <div className={s.isYour}>
                            <Header as="h3" content="This product is yours" />
                            <Button color="blue">Update Product</Button>
                        </div>
                        :
                        cartState[query.productId] // if is already in cart
                        ?
                        <div className={s.inCart}>
                            <Header as="h3" content="Added to cart" />
                            <Button onClick={handleLink} color="green">Go to cart</Button>
                        </div>
                        :
                        <AddToCart
                            productId={query.productId}
                            avaliableQty={quantity}
                            userId={userId}
                            price={price}
                        />
                    }
                </div>
            </div>
            
        </div>
    );
}
 
export default BasicInfo;