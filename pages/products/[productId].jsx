import React from 'react';
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
            sellerData
        }
    }
}

const ProductPage = ({ productData, photos, sellerData }) => {
    return (
        <ProductDetail {...{productData, photos, sellerData}} />
    );
}

export default ProductPage;