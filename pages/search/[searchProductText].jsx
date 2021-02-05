import React from 'react';
import ProductsListLayout from '../../components/Layouts/productsListLayout';
import productRequests from '../../requests/products';

export async function getServerSideProps({ params, query }){
    const searchProductText = params.searchProductText;

    try {
        const response = await productRequests.getProductsByInputSearch(searchProductText, query);

        if(response.error){
            return {
                notFound: true
            }
        }

        return {
            props: {
                productsData: response
            }
        }
    } catch (error) {
        console.error("[error getting products by input search from server]", error);
        return {
            notFound: true
        }
    }
}

const SearchPage = ({productsData}) => {
    return <ProductsListLayout productsData={productsData}/>
}
 
export default SearchPage;