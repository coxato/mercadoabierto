import React from 'react';
import CustomHead from '../../components/Head/head';
import productRequests from '../../requests/products';
import ProductDetail from '../../components/Products/productDetail';


export const getServerSideProps = async ({ params: { productId } }) => {
    try {
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
    } catch ({message}) {
        console.error("[Error getting product data] " + message);
        return { notFound: true }
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