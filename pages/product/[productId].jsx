import React from 'react';
import CustomHead from '../../components/Head/head';
import productRequests from '../../requests/products';
import ProductDetail from '../../components/Products/productDetail';


export const getServerSideProps = async ({ params: { productId } }) => {
    const { 
        productData, 
        photos, 
        sellerData } = await productRequests.getProductById(productId);

    if(!productData){
        return { notFound: true }
    }

    return {
        props: {
            productData,
            photos,
            sellerData,
            productTitle: productData.title
        }
    }
}

const ProductPage = ({ productData, photos, sellerData, productTitle }) => {
    return (
        <>
            <CustomHead title={productTitle} />

            <ProductDetail {...{productData, photos, sellerData}} />
        </>
    );
}

export default ProductPage;