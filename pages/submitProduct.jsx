import React from 'react';
import CustomHead from '../components/Head/head';
// components
import ProductFormContainer from '../components/Forms/ProductForms/ProductFormContainer';
import Layout from '../components/Layouts/appLayout';
import RouteWrapperHOC from '../components/ContextsAndHOCs/routerWrapperHOC';
// Providers
import ProductCreationProvider from '../store/productCreation';

const SubmitProductPage = () => {
    return (
        <RouteWrapperHOC needBeLogged >
            <ProductCreationProvider>
                <Layout>
                    <CustomHead title="Sell a product" />
                    <ProductFormContainer />
                </Layout>
            </ProductCreationProvider>
        </RouteWrapperHOC>
    )
}
 
export default SubmitProductPage;