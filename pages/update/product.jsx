import React from 'react';
import CustomHead from '../../components/Head/head';
// components
import AppLayout from '../../components/Layouts/appLayout';
import ProductFormContainer from '../../components/Forms/ProductForms/ProductFormContainer';
// Providers
import ProductCreationProvider from '../../store/productCreation';
// HOC's
import RouteWrapperHOC from '../../components/ContextsAndHOCs/routerWrapperHOC';
// request
import productRequests from '../../requests/products';

export const getServerSideProps = async ({ query }) => {
    const { id_product, token } = query;

    try {
        const { productData, photos } = await productRequests.getProductById(id_product, token);

        if(!productData){
            return {
                notFound: true
            }
        }

        return {
            props: {
                productData,
                photos
            }
        }
        
    } catch (error) {
        console.error("[error getting products by input search from server]", error);
        return {
            notFound: true
        }
    }
}

const UpdateProductPage = ({ productData, photos }) => {
    return (
        <RouteWrapperHOC needBeLogged>
            <CustomHead title="Update product" />

            <ProductCreationProvider productEditData={{ productData, photos }} >
                <AppLayout>
                    <ProductFormContainer />
                </AppLayout>
            </ProductCreationProvider>

        </RouteWrapperHOC>
    );
}
 
export default UpdateProductPage;

