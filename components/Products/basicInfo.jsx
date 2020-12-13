import React from 'react';
import { useRouter } from 'next/router';
import { Header } from 'semantic-ui-react';
// components
import AddToCart from '../Cart/cartButtonContainer';
// style
import s from './products.module.css';

const BasicInfo = ({ title, price, quantity, new: _new }) => {

    const { query } = useRouter();

    return (
        <div className={s.basicInfoCont}>
            <Header as="h3" content={ _new ? 'new' : 'used' } textAlign="left" />
            
            <div className={s.basicInfoWrapper}>
                <Header as="h1" content={title} />

                <h2 className={s.price} >${price}</h2>

                <div className={s.addToCart}>
                    <AddToCart
                        productId={query.productId}
                        avaliableQty={quantity}
                    />
                </div>
            </div>
            
        </div>
    );
}
 
export default BasicInfo;