import React, { useState, useEffect } from 'react';
// store custom hooks
import { useUser, useUserInfo } from './user';
import { useCart } from './cart';
// components
// import FullPageLoader from '../components/Loaders/fullPage';

function InitStoreHOC({children}){
    const [loading, setLoading] = useState(true);

    const { checkIsLogged } = useUser();
    const { id_user } = useUserInfo();
    const { getCartItemsForDB } = useCart();

    useEffect(() => {
        const isLogged = checkIsLogged();
        
        if(isLogged){
            getCartItemsForDB(id_user)
                .then( () => setLoading(false));
        }
        else{
            setLoading(false);
        }

    }, []);

    return(
        <>
            {
                loading ? null : children
            }
        </>
    );

}

export default InitStoreHOC;