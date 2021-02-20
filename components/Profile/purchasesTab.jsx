import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Message, Button } from 'semantic-ui-react';
// components
import ProductsGrid from '../Products/gridView';
import Loader from '../Loaders/simple';
// store
import { useUserInfo } from '../../store/user';
// requests
import purchasesRequests from '../../requests/purchase';

const PurchasesTab = () => {
    const [loading, setLoading] = useState(true);
    const [userPurchases, setUserPurchases] = useState([]);
    const { id_user, username } = useUserInfo();
    const { push, query: { params } } = useRouter();

    useEffect(() => {
        // if logged user and profile user are not the same, redirect to /users/<@username>
        if(username !== params[0]){
            push(`/users/${params[0]}`)
        }else{
            purchasesRequests.getAllUserPurchases(id_user)
                .then( products => {
                    setUserPurchases(products);
                    setLoading(false);
                });
        }
    }, []);

    return (
        <div className="container">
            {
                loading
                ?
                <Loader name="instagram" color="var(--black)" />
                :
                userPurchases.length
                ?
                <ProductsGrid products={userPurchases} indexKey />
                :
                <Message>
                    <Message.Header as="h1" content="You don't have any purchase yet" />
                    <Message.Content>
                        <Link href="/">
                            <a>
                                <Button primary color="green">But you can purchase something...</Button>
                            </a>
                        </Link>
                    </Message.Content>
                </Message>
            }

            <style jsx>{`
                .container{ text-align: center; }
            `}</style>
        </div>
    );
}
 
export default PurchasesTab;