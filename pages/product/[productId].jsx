import React from 'react';
import productRequests from '../../requests/products';
import ProductDetail from '../../components/Products/productDetail';


export const getServerSideProps = async ({ params: { productId } }) => {
    const { productData, photos } = await productRequests.getProductById(productId);

    if(!productData){
        return { notFound: true }
    }

    return {
        props: {
            productData,
            photos
        }
    }
}

const ProductPage = ({ productData, photos }) => {
    return (
        <ProductDetail {...{productData, photos}} />
    );
}
 
export default ProductPage;