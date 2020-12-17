import React from 'react';
import cartRequests from '../../requests/cart';
import AppLayout from '../../components/Layouts/appLayout';

export const getServerSideProps = async ({ params: { userId }, query: { token } }) => {
    const items = await cartRequests.getUserCartItems(userId, token);

    return {
        props: {
            items
        }
    }
}

const CartPage = ({ items }) => {

    console.log("items ", items);

    return (
        <AppLayout>
            <h1>hola</h1>
        </AppLayout>
    );
}
 
export default CartPage;