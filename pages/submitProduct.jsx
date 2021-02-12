import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import CustomHead from '../components/Head/head';
// components
import ProductFormContainer from '../components/Forms/ProductForms/ProductFormContainer';
import Layout from '../components/Layouts/appLayout';
// store
import { useProductCreation } from '../store/product';
import { useUser } from '../store/user';

const SubmitProductPage = () => {

    const { dispatch } = useProductCreation();
    const { checkIsLogged } = useUser();
    const router = useRouter();
    
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if(checkIsLogged()){
            dispatch({type: 'new-id_album'});
            setLoading(false);
        }
        // is not logged
        else{
            router.push('/login');
        }
    }, []);

    return (
        <>
        <CustomHead title="Sell a product" />
        {
            !loading
            ?
            <Layout>
                <ProductFormContainer />
            </Layout>
            : 
            null
        }
        </>
    );
}
 
export default SubmitProductPage;