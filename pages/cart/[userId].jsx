import React from 'react';
import cartRequests from '../../requests/cart';
// components
import AppLayout from '../../components/Layouts/appLayout';
import ItemList from '../../components/Cart/itemListContainer';


export const getServerSideProps = async ({ params: { userId }, query: { token } }) => {
    const items = await cartRequests.getUserCartItems(userId, token);

    return {
        props: {
            items
        }
    }
}

const CartPage = ({ items }) => {
    return (
        <AppLayout>
            <ItemList items={items} />
        </AppLayout>
    );
}
 
export default CartPage;