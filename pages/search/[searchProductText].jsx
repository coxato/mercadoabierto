import React from 'react';
import CustomHead from '../../components/Head/head';
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
                productsData: response,
                searchProductText
            }
        }
    } catch (error) {
        console.error("[error getting products by input search from server]", error);
        return {
            notFound: true
        }
    }
}

const SearchPage = ({productsData, searchProductText}) => {
    return (
        <>
            <CustomHead title={searchProductText} />

            <ProductsListLayout productsData={productsData}/>
        </>
    );
}
 
export default SearchPage;